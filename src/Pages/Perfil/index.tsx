import React, { useState, useEffect, useRef, useContext } from 'react';
import { SafeAreaView, Alert, Platform, Linking } from 'react-native';
import FormData from 'form-data';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Modalize } from 'react-native-modalize';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
  route: any;
}

/* styles */
import {
	Container,
	PerfilCont,
	ScreenTitle,
	HeaderPerfil,
	HeaderAvatar,
	AvatarEdit,
	AvatarEditImg,
	AvatarUser,
	HeaderInfos,
	HeaderInfosNome,
	HeaderInfosEmail,
	Suporte,
	SuporteItem,
	SuporteItemIconLabel,
	SuporteItemIcon,
	SuporteItemLabel,
	SuporteArrow,
	SairConta,
	SairContaLabel,
	AvatarTolls,
	AvatarTollsItem,
	AvatarTollsItemImg,
	AvatarTollsItemLabel,
} from './styles';

import api from '../../Services/api';

/* global components*/
import HeaderIntPainel from '../../Components/HeaderIntPainel';
import ScreenLoader from '../../Components/ScreenLoader';
import FormButtonAux from '../../Components/FormButtonAux';
import Footer from '../../Components/Footer';

/* assets */
import pre_loader from '../../../assets/images/preloader_big.gif';
import avatar_edit from '../../../assets/images/avatar-edit.png';
import opcoes_arrow from '../../../assets/images/opcoes_arrow.png';
import perfil_dados from '../../../assets/images/perfil_dados.png';
import perfil_acesso from '../../../assets/images/perfil_acesso.png';
import perfil_enderecos from '../../../assets/images/perfil_endereco.png';
import perfil_creditos from '../../../assets/images/form_valor.png';
import perfil_opcoes from '../../../assets/images/perfil_opcoes.png';
import avatar_toll_camera from '../../../assets/images/avatar-toll-camera.png';
import avatar_toll_galeria from '../../../assets/images/avatar-toll-galeria.png';
import head_user from '../../../assets/images/head_user.4x.png';

import { IUserProps } from '../../../types';
import AuthContext from '../../Contexts/auth';
import Infos from '../../../constants/Infos';

const async_key = Infos['Key'].AsyncStorage;

const Perfil = ({ navigation, route }: Props) => {
	const { user, token, signIn, signOut } = useContext(AuthContext);

	const modalizeRef = useRef<Modalize>(null);
	const [formLoad, setFormLoad] = useState<boolean>(true);

	const [avatarModal, setAvatarModal] = useState<boolean>(false);
	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [formUserId, setFormUserId] = useState<string>('');
	const [formUserName, setFormUserName] = useState<string>('');
	const [formUserMail, setFormUserMail] = useState<string>('');
	const [formUserCellPhone, setFormUserCellPhone] = useState<string>('');
	const [formUserAvatar, setFormUserAvatar] = useState<string>('');

	function phoneFormat(value: string) {
		const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
		const str = value.replace(/[^0-9]/g, '').slice(0, 11);
		const result = str.replace(regex, '($1)$2-$3');

		return result;
	}

	async function askPermission() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status !== 'granted') {
			if (Platform.OS === 'ios') showAlert();
			return;
		}
	}

	function showAlert() {
		Alert.alert(
			'Por favor permita o acesso',
			[
				'Este aplicativo precisa de acesso à sua biblioteca de fotos para fazer upload de imagens.',
				'\n\n',
				'Vá para as configurações do seu dispositivo e conceda permissões para fotos.',
			].join(''),
			[
				{ text: 'Agora não', style: 'cancel' },
				{
					text: 'Configurações',
					onPress: () => Linking.openURL('app-settings:'),
				},
			]
		);
	}

	async function changeAvatarRoll() {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);

		if (cameraRollPerm === 'granted') {
			const pickerResult = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [1, 1],
			});

			_handleImagePicked(pickerResult);
		} else {
			Alert.alert('Necessita de permição para acessar a galeria');
		}
	}

	async function changeAvatarCamera() {
		const { status: cameraPerm } = await Permissions.askAsync(
			Permissions.CAMERA
		);

		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);

		if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
			const pickerResult = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				aspect: [1, 1],
			});

			_handleImagePicked(pickerResult);
		} else {
			Alert.alert('Necessita de permição para usar a camera');
		}
	}

	async function _handleImagePicked(
		pickerResult: ImagePicker.ImagePickerResult
	) {
		try {
			if (!pickerResult.cancelled) {
				uploadAvatar(pickerResult.uri);
			}
		} catch (e) {
			console.log({ e });
		} finally {
			console.log('_handleImagePicked -> finally');
			modalizeRef.current?.close();
		}
	}

	async function uploadAvatar(photo: string) {
		setFormEditable(false);

		const uriParts = photo.split('.');
		const fileType = uriParts[uriParts.length - 1];

		const formData = new FormData();
		formData.append('avatar', {
			uri: photo,
			name: `photo.${fileType}`,
			type: `image/${fileType}`,
		});

		try {
			const response = await api.post('/users/upload-photo/' + user.id, formData, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			const responseString = response.request._response;
			const responseArray = JSON.parse(responseString);
			updateContext(responseArray.uri);
		} catch (err) {
			console.log('err: ' + JSON.stringify(err));
			setFormEditable(true);
		}
	}

	async function updateContext(avatar: string) {
		console.log('avatar: '+avatar);
		try {
			await AsyncStorage.setItem(async_key + 'user_avatar', avatar);
			const newUser: any = user;
			newUser.avatar = avatar;
			signIn(newUser, token);
			setFormEditable(true);
		} catch (err) {
			console.log('err: ' + JSON.stringify(err));
		}
	}

	async function startScreen() {
		try {
			const user_id = await AsyncStorage.getItem(async_key + 'user_id');
			const user_name = await AsyncStorage.getItem(async_key + 'user_name');
			const user_mail = await AsyncStorage.getItem(async_key + 'user_mail');
			const user_cell_phone = await AsyncStorage.getItem(
				async_key + 'user_cell_phone'
			);
			const user_avatar = await AsyncStorage.getItem(async_key + 'user_avatar');
			setFormUserName(user_name != null ? user_name : '');
			setFormUserMail(user_mail != null ? user_mail : '');
			setFormUserCellPhone(user_cell_phone != null ? user_cell_phone : '');
			setFormUserAvatar(user_avatar != null ? user_avatar : '');
			setFormEditable(true);
			setFormLoad(false);
		} catch (e) {
			console.log('ERROR AsyncStorage read - ', e);
		}
	}

	const logoutAcount = async () => {
		setFormLoad(true);
		try {
			api.defaults.headers.authorization = `Bearer ${token}`;
			const response = await api.post('/logout', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			signOut();
			console.log('signOut');
			await AsyncStorage.removeItem(async_key + 'user_login');
			await AsyncStorage.removeItem(async_key + 'user_id');
			await AsyncStorage.removeItem(async_key + 'user_token');
			await AsyncStorage.removeItem(async_key + 'user_name');
			await AsyncStorage.removeItem(async_key + 'user_mail');
			await AsyncStorage.removeItem(async_key + 'user_type_document');
			await AsyncStorage.removeItem(async_key + 'user_document');
			await AsyncStorage.removeItem(async_key + 'user_birthdate');
			await AsyncStorage.removeItem(async_key + 'user_gender');
			await AsyncStorage.removeItem(async_key + 'user_cell_phone');
			await AsyncStorage.removeItem(async_key + 'user_avatar');
			await AsyncStorage.removeItem(async_key + 'user_login_remember');
			await AsyncStorage.removeItem(async_key + 'user_organizer');
			await AsyncStorage.removeItem(async_key + 'tk_formType');
			await AsyncStorage.removeItem(async_key + 'tk_formName');
			await AsyncStorage.removeItem(async_key + 'tk_formDocument');
			await AsyncStorage.removeItem(async_key + 'tk_formMail');
			await AsyncStorage.removeItem(async_key + 'tk_formDocumentName');
			await AsyncStorage.removeItem(async_key + 'tk_formDocumentCity');
			await AsyncStorage.removeItem(async_key + 'e_formName');
			await AsyncStorage.removeItem(async_key + 'e_formAvatar');
			await AsyncStorage.removeItem(async_key + 'e_formDateStart');
			await AsyncStorage.removeItem(async_key + 'e_formTimeStart');
			await AsyncStorage.removeItem(async_key + 'e_formDateEnd');
			await AsyncStorage.removeItem(async_key + 'e_formTimeEnd');
			await AsyncStorage.removeItem(async_key + 'e_formType');
			await AsyncStorage.removeItem(async_key + 'e_formLocalName');
			await AsyncStorage.removeItem(async_key + 'e_formLocalCep');
			await AsyncStorage.removeItem(async_key + 'e_formLocalAdress');
			await AsyncStorage.removeItem(async_key + 'e_formLocalNumber');
			await AsyncStorage.removeItem(async_key + 'e_formLocalDistrict');
			await AsyncStorage.removeItem(async_key + 'e_formLocalCity');
			await AsyncStorage.removeItem(async_key + 'e_formLocalState');
			await AsyncStorage.removeItem(async_key + 'e_formLocalMap');
			await AsyncStorage.removeItem(async_key + 'e_formStreaming');
			await AsyncStorage.removeItem(async_key + 'e_formStreamingDetail');
			await AsyncStorage.removeItem(async_key + 'e_formStreamingDetailName');
			await AsyncStorage.removeItem(async_key + 'e_formStreamingDetailUrl');
			await AsyncStorage.removeItem(async_key + 'e_formDataCategory');
			await AsyncStorage.removeItem(async_key + 'e_formDescription');
			await AsyncStorage.removeItem(async_key + 'e_formDataCategory');
			await AsyncStorage.removeItem(async_key + 'e_formPrivacity');
			await AsyncStorage.removeItem(async_key + 'e_formAge');
			navigation.navigate('Eventos');
		} catch (err) {
			console.log('err: ' + JSON.stringify(err));
		}
	};

	useEffect(() => {
		askPermission();
		startScreen();
	}, []);

	return (
		<SafeAreaView>
			<ScreenLoader label='Carregando perfil...' active={formLoad} />
			<ScrollView>
				{
					!formLoad ? (<>
						<Container>
							<PerfilCont>
								<ScreenTitle>Meu perfil</ScreenTitle>
								<HeaderPerfil>
									<HeaderAvatar>
										<AvatarUser source={formEditable ? user.avatar ? { uri: user.avatar } : head_user : pre_loader} />
										<AvatarEdit onPress={() => modalizeRef.current?.open()}>
											<AvatarEditImg source={ avatar_edit } />
										</AvatarEdit>
									</HeaderAvatar>
									<HeaderInfos>
										<HeaderInfosNome>{user.name}</HeaderInfosNome>
										<HeaderInfosEmail>{user.email}</HeaderInfosEmail>
										<HeaderInfosEmail>
											{phoneFormat(user.cell_phone)}
										</HeaderInfosEmail>
									</HeaderInfos>
								</HeaderPerfil>

								<Suporte>
									<SuporteItem onPress={() => navigation.navigate('PerfilDados')}>
										<SuporteItemIconLabel>
											<SuporteItemIcon source={perfil_dados} />
											<SuporteItemLabel>Dados pessoais</SuporteItemLabel>
										</SuporteItemIconLabel>
										<SuporteArrow source={opcoes_arrow} />
									</SuporteItem>
									<SuporteItem onPress={() => navigation.navigate('PerfilAcessos')}>
										<SuporteItemIconLabel>
											<SuporteItemIcon source={perfil_acesso} />
											<SuporteItemLabel>Dados de acesso</SuporteItemLabel>
										</SuporteItemIconLabel>
										<SuporteArrow source={opcoes_arrow} />
									</SuporteItem>
									<SuporteItem
										onPress={() => navigation.navigate('PerfilEnderecos')}
									>
										<SuporteItemIconLabel>
											<SuporteItemIcon source={perfil_enderecos} />
											<SuporteItemLabel>Meus endereços</SuporteItemLabel>
										</SuporteItemIconLabel>
										<SuporteArrow source={opcoes_arrow} />
									</SuporteItem>
									<SuporteItem onPress={() => navigation.navigate('PerfilOpcoes')}>
										<SuporteItemIconLabel>
											<SuporteItemIcon source={perfil_opcoes} />
											<SuporteItemLabel>Configurações da conta</SuporteItemLabel>
										</SuporteItemIconLabel>
										<SuporteArrow source={opcoes_arrow} />
									</SuporteItem>
								</Suporte>

								<FormButtonAux
									active={formEditable}
									loader={formEditable ? false : true}
									label="Sair desta conta"
									navigation={navigation}
									onPress={() => logoutAcount()}
								/>
							</PerfilCont>

							<Footer></Footer>
						</Container>
					</>) : null
				}
			</ScrollView>
			<HeaderIntPainel navigation={navigation} route={route} />

			<Modalize
				scrollViewProps={{ showsVerticalScrollIndicator: true }}
				snapPoint={140}
				ref={modalizeRef}
			>
				<AvatarTolls>
					<AvatarTollsItem onPress={() => changeAvatarCamera()}>
						<AvatarTollsItemImg source={avatar_toll_camera} />
						<AvatarTollsItemLabel>Tirar uma foto</AvatarTollsItemLabel>
					</AvatarTollsItem>

					<AvatarTollsItem onPress={() => changeAvatarRoll()}>
						<AvatarTollsItemImg source={avatar_toll_galeria} />
						<AvatarTollsItemLabel>
              Adicionar foto da galeria
						</AvatarTollsItemLabel>
					</AvatarTollsItem>
				</AvatarTolls>
			</Modalize>
		</SafeAreaView>
	);
};

export default Perfil;
