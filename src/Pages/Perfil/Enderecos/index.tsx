import React, { useEffect, useContext, useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import {
	Container,
	EnderecosCont, ScreenTitle, EnderecosItens,
	EnderecosItem, EnderecosItemTitleTolls, EnderecosItemTitle, EnderecosItemTolls, TollsEdit, TollsDelete, TollsEditImg, EnderecosItemDetalhes,
	NovoBtn, NovoBtnLabel,
} from './styles';

import {
	NoResultLabel, NoResultoAvatar, NoResultoAvatarImg
} from '../../../Styles';


/* global components*/
import HeaderIntPainel from '../../../Components/HeaderIntPainel';
import ScreenLoader from '../../../Components/ScreenLoader';
import Footer from '../../../Components/Footer';

/* assets */
import edit_icon from '../../../../assets/images/edit_icon.png';
import delete_icon from '../../../../assets/images/delete_icon.png';
import noresult_eventos from '../../../../assets/images/noresult_eventos.png';

import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import {
	RootStackParamList,
	IUserAdressData,
} from '../../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props { navigation: NavigationProp, route: any; }

const Enderecos = ({ navigation, route }: Props) => {
	const { user, token } = useContext(AuthContext);
	const [formLoad, setFormLoad] = useState<boolean>(true);

	const [userAdressData, setUserAdressData] = useState<IUserAdressData[]>([]);

	function checkDeleteItem(item: string) {
		async function deleteItem(item: string) {
			setFormLoad(true);

			try {
				const credentials = {};

				api.defaults.headers.authorization = `Bearer ${token}`;
				const response = await api.delete(`/users/delete-address/${item}`, credentials);
				const user_adress = response;
				//console.log(JSON.stringify(user_adress));
				startScreen();
			} catch (err) {
				console.log(err.response);
				setFormLoad(false);
			}
		}

		Alert.alert(
			'EXCLUIR',
			'Tem certeza que deseja excluir este endereço?',
			[
				{
					text: 'Cancelar',
					style: 'cancel'
				},
				{ text: 'Excluir', onPress: () => deleteItem(item) }
			]
		);
	}

	async function startScreen() {
		try {
			const credentials = {};

			api.defaults.headers.authorization = `Bearer ${token}`;
			const response = await api.get('/users/address', credentials);
			const user_adress = response;

			setUserAdressData(user_adress.data.addresses);
			setFormLoad(false);
		} catch (err) {
			console.log(err.response);
		}
	}

	useEffect(() => {
		startScreen();
	});

	return <SafeAreaView style={{ minHeight: '100%' }}>
		<ScreenLoader active={formLoad} />

		<ScrollView>
			<Container>
				<EnderecosCont>
					<ScreenLoader active={formLoad} />
					<ScreenTitle>Meus endereços</ScreenTitle>

					<EnderecosItens>
						{userAdressData.length == 0 && formLoad == false ? (<>
							<NoResultLabel>Você ainda não possui ingressos.</NoResultLabel>
							<NoResultoAvatar>
								<NoResultoAvatarImg source={noresult_eventos} />
							</NoResultoAvatar>
						</>) : (
							userAdressData.map((item, index) => {
								return (
									<EnderecosItem key={index}>
										<EnderecosItemTitleTolls>
											<EnderecosItemTitle>{item.address_title}</EnderecosItemTitle>
											<EnderecosItemTolls>
												<TollsEdit onPress={() => navigation.navigate('PerfilEnderecosDetalhes', { adressData: item })}>
													<TollsEditImg source={edit_icon} />
												</TollsEdit>
												<TollsDelete onPress={() => checkDeleteItem(item.id.toString())}>
													<TollsEditImg source={delete_icon} />
												</TollsDelete>
											</EnderecosItemTolls>
										</EnderecosItemTitleTolls>
										<EnderecosItemDetalhes>
											{item.address_street}, {item.address_number} -{item.address_complement != '' ? item.address_complement + ', ' : null}{item.address_district}, {item.address_city}, {item.address_state} - CEP: {item.address_zipcode}
										</EnderecosItemDetalhes>
									</EnderecosItem>
								);
							})
						)}
					</EnderecosItens>

					<NovoBtn onPress={() => navigation.navigate('PerfilEnderecosNovo')} >
						<NovoBtnLabel>+ Adicionar novo</NovoBtnLabel>
					</NovoBtn>
				</EnderecosCont>
				<Footer></Footer>
			</Container>
		</ScrollView>

		<HeaderIntPainel navigation={navigation} route={route} />
	</SafeAreaView>;
};

export default Enderecos;
