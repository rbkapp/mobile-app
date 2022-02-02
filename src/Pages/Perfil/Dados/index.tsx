import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
	Container, PerfilCont, ScreenTitle, DadosCont,
} from './styles';

import {
	Divider10, Divider35, Divider20,
	ViewFullRow, View50,
	FormTextLabel,
	CheckBox,
	ButtonAux, ButtonAuxLabel,
} from '../../../Styles';

/* global components*/
import HeaderIntPainel from '../../../Components/HeaderIntPainel';
import FormTextInputLabel from '../../../Components/FormTextInputLabel';
import FormTextInputPhoneLabel from '../../../Components/FormTextInputPhoneLabel';
import FormDatePickerLabel from '../../../Components/FormDatePickerLabel';
import FormCheck from '../../../Components/FormCheck';
import FormTextInputCpfLabel from '../../../Components/FormTextInputCpfLabel';
import FormTextInputCnpjLabel from '../../../Components/FormTextInputCnpjLabel';
import FormDropDownPickerLabel from '../../../Components/FormDropDownPickerLabel';
import FormButton from '../../../Components/FormButton';
import Footer from '../../../Components/Footer';

/* assets */
import form_phone from './assets/form_phone.png';
import form_date from './assets/form_date.png';
import form_cpf from './assets/form_cpf.png';
import form_cnpj from './assets/form_cpf.png';
import form_user from './assets/form_user.png';

import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Infos from '../../../../constants/Infos';
import Datas from '../../../../constants/Datas';

import {
	RootStackParamList,
	DropDownParamList,
} from '../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'PerfilDados'>;
interface Props { navigation: NavigationProp, route: any; }

const async_key = Infos['Key'].AsyncStorage;
const DataGenders = Datas['Genders'];
const DataStates = Datas['States'];

const PerfilDados = ({ navigation, route }: Props) => {
	const { user, token, signIn } = useContext(AuthContext);
	const [formDataGeners, setFormDataGeners] = useState<DropDownParamList[]>(DataGenders);

	const [formEditable, setFormEditable] = useState<boolean>(false);
	const [formLoad, setFormLoad] = useState<boolean>(false);
	const [formName, setFormName] = useState<string>(user.name);
	const [formMail, setFormMail] = useState<string>(user.email);
	const [formCellPhone, setFormCellPhone] = useState<string>(user.cell_phone);
	const [formDate, setFormDate] = useState<string>(user.birthdate);
	const [formDocument, setFormDocument] = useState<string>(user.document);
	const [formTypeDocument, setFormTypeDocument] = useState<string>(user.type_document);
	const [formGender, setFormGender] = useState<string>(user.gender);

	const getGender = (gender: string) => {
		let retorno = '';
		if (gender == '1') {
			retorno = 'Masculino';
		} else if (gender == '2') {
			retorno = 'Masculino';
		} else if (gender == '' || gender == '3') {
			retorno = 'Não informado';
		}
		return retorno;
	};

	async function checkFormSave() {
		if (formTypeDocument == '' || formTypeDocument == null) {
			Alert.alert('Por favor, escolha o tipo de identificação!');
		} else if (formTypeDocument == '1' && formName == '') {
			Alert.alert('Por favor, informe seu nome completo!');
		} else if (formTypeDocument == '1' && formCellPhone == '') {
			Alert.alert('Por favor, informe seu telefone!');
		} else if (formTypeDocument == '1' && (formDate == '' || formDate == null)) {
			Alert.alert('Por favor, informe sua data de nascimento!');
		} else if (formTypeDocument == '1' && (formDocument == '' || formDocument == null)) {
			Alert.alert('Por favor, informe o seu CPF!');
		} else if (formTypeDocument == '1' && formGender == '') {
			Alert.alert('Por favor, informe escolha uma opção para gênero!');
		} else if (formTypeDocument == '1' && formGender == null) {
			Alert.alert('Por favor, informe escolha uma opção para gênero!');

		} else if (formTypeDocument == '2' && formName == '') {
			Alert.alert('Por favor, informe o nome da empresa!');
		} else if (formTypeDocument == '2' && formCellPhone == '') {
			Alert.alert('Por favor, informe o telefone da empresa!');
		} else if (formTypeDocument == '2' && (formDocument == '' || formDocument == null)) {
			Alert.alert('Por favor, informe o CNPJ da empresa!');

		} else {
			/* RUM edit API */
			setFormEditable(false);
			setFormLoad(true);
			try {
				const credentials = {
					name: formName,
					email: formMail,
					birthdate: formDate,
					document: formDocument,
					type_document: formTypeDocument,
					cell_phone: formCellPhone,
					gender: formGender,
				};
				api.defaults.headers.authorization = `Bearer ${token}`;

				const response = await api.put(`/users/update/${user.id}`, credentials);
				const user_response = response.data;
				console.log(JSON.stringify(user_response));

				refresUser();

			} catch (err) {
				console.log(err.response);
				setFormEditable(true);
				setFormLoad(false);
			}
		}
	}

	async function refresUser() {
		try {
			await AsyncStorage.setItem(async_key + 'user_name', formName);
			await AsyncStorage.setItem(async_key + 'user_birthdate', !formDate ? '' : formDate);
			await AsyncStorage.setItem(async_key + 'user_type_document', formTypeDocument);
			await AsyncStorage.setItem(async_key + 'user_document', formDocument);
			await AsyncStorage.setItem(async_key + 'user_cell_phone', formCellPhone);
			await AsyncStorage.setItem(async_key + 'user_gender', !formGender ? '' : formGender);

			const newUser:any = user;
			newUser.name = formName;
			newUser.document = formDocument;
			newUser.type_document = formTypeDocument;
			newUser.birthdate = formDate;
			newUser.gender = formGender;
			newUser.cell_phone = formCellPhone;

			signIn(newUser, token);
			setFormLoad(false);
		} catch (e) {
			console.log('ERROR AsyncStorage save - ', e);
		}
	}

	async function startScreen() {
		setFormName(user.name);
		setFormMail(user.email);
		setFormCellPhone(user.cell_phone);
		setFormDate(user.birthdate);
		setFormDocument(user.document);
		setFormTypeDocument(user.type_document);
		setFormGender(user.gender);
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<Container>
				<PerfilCont>
					<ScreenTitle>Dados{formTypeDocument == '1' || formTypeDocument == null ? ' pessoais' : ' da empresa'}</ScreenTitle>
					<DadosCont>
						<FormTextInputLabel
							icon={form_user}
							label={formTypeDocument == '1' || formTypeDocument == null ? 'Nome completo' : 'Razão social'}
							placeholder={formTypeDocument == '1' || formTypeDocument == null ? 'Nome completo' : 'Razão social'}
							value={formName}
							callback={setFormName}
							editable={formEditable}
						/>
						<FormTextInputPhoneLabel
							icon={form_phone}
							label="Telefone"
							placeholder='Telefone'
							value={formCellPhone}
							callback={setFormCellPhone}
							editable={formEditable}
						/>
						{formTypeDocument == '1' ? (
							<FormDatePickerLabel
								icon={form_date}
								label="Data nascimento"
								placeholder='Data nascimento'
								value={formDate}
								callback={setFormDate}
								editable={formEditable}
							/>) : (null)
						}
						{
							!user.type_document && formEditable ? (<>
								<Divider20 />
								<FormTextLabel>Escolha um tipo de identificação</FormTextLabel>

								<ViewFullRow>
									<View50>
										<CheckBox onPress={() => setFormTypeDocument('1')}>
											<FormCheck active={formTypeDocument == '1' ? true : false} value='CPF'></FormCheck>
										</CheckBox>
									</View50>
									<View50>
										<CheckBox onPress={() => setFormTypeDocument('2')}>
											<FormCheck active={formTypeDocument == '2' ? true : false} value='CNPJ'></FormCheck>
										</CheckBox>
									</View50>
								</ViewFullRow>
							</>) : (null)
						}
						{formTypeDocument == '1' || formTypeDocument == null ? (
							<FormTextInputCpfLabel
								icon={form_cpf}
								label="CPF"
								placeholder='Cpf'
								value={formDocument}
								callback={setFormDocument}
								editable={formEditable && !user.type_document ? true : false}
							/>
						) : (
							<FormTextInputCnpjLabel
								icon={form_cnpj}
								label="CNPJ"
								placeholder='Cnpj'
								value={formDocument}
								callback={setFormDocument}
								editable={formEditable && !user.type_document ? true : false}
							/>
						)}
						{formTypeDocument == '1' ? (<>
							{formEditable ? (<>
								<Divider10 />
								<FormDropDownPickerLabel
									label="Gênero"
									icon={form_user}
									items={formDataGeners}
									defaultValue={formGender}
									placeholder="Escolha um gênero"
									onChangeItem={setFormGender}
									editable={!formEditable}
								/>
							</>) : (<>
								<FormTextInputLabel
									icon={form_user}
									label="Gênero"
									placeholder='Gênero'
									value={getGender(formGender)}
									callback={setFormName}
									editable={formEditable}
								/>
							</>)}
						</>) : (null)}
						<Divider35 />
						{formEditable == false && formLoad == false ? (<>
							<ButtonAux onPress={() => setFormEditable(true)} >
								<ButtonAuxLabel>Editar</ButtonAuxLabel>
							</ButtonAux>
						</>) : (null)}
						{formEditable == true && formLoad == false ? (<>
							<ButtonAux onPress={() => setFormEditable(false)} >
								<ButtonAuxLabel>Cancelar</ButtonAuxLabel>
							</ButtonAux>
						</>) : (null)}
						{formEditable == true || formLoad == true ? (<>
							<Divider10 />
							<FormButton
								label="Salvar"
								onPress={() => checkFormSave()}
								active={formEditable}
								loader={formEditable ? false : true}
								navigation={navigation}
							/>
						</>) : (null)}
					</DadosCont>
				</PerfilCont>
				<Footer></Footer>
			</Container>
		</ScrollView>
		<HeaderIntPainel navigation={navigation} route={route} />
	</SafeAreaView>;
};
export default PerfilDados;
