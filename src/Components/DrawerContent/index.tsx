import React, { useState, useEffect, useContext } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
	Container, DrawerList, DrawerItem, DrawerItemLabel,
	LineDivider, Tolls,
	LoginBtn, LoginLabel,
	CadastroBtn, CadastroLabel,
} from './styles';

import api from '../../Services/api';
import Infos from '../../../constants/Infos';
import AuthContext from '../../Contexts/auth';
const async_key = Infos['Key'].AsyncStorage;

const DrawerContent = (props: DrawerContentComponentProps,): React.ReactElement => {
	const { user, token, signed, signOut } = useContext(AuthContext);
	const [formLoad, setFormLoad] = useState<boolean>(true);
	const { navigation, state, ...rest } = props;

	async function logout() {
		setFormLoad(true);

		try {
			signOut();
			//console.log('signOut');

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

			api.defaults.headers.authorization = `Bearer ${token}`;

			const response = await api.post('/logout', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			navigation.closeDrawer();
		} catch (err) {
			console.log('err: ' + JSON.stringify(err));
		}
	}

	return (<Container>
		<DrawerList>
			{signed ? (<>
				<DrawerItem onPress={() => navigation.navigate('Perfil')} >
					<DrawerItemLabel>Perfil</DrawerItemLabel>
				</DrawerItem>
				<DrawerItem onPress={() => navigation.navigate('Home', { tab: 'Meus orçamentos'})} >
					<DrawerItemLabel>Meus orçamentos</DrawerItemLabel>
				</DrawerItem>
				<DrawerItem onPress={() => 
					navigation.navigate('Home', { tab: 'Ofertas especiais'})} >
					<DrawerItemLabel>Ofertas especiais</DrawerItemLabel>
				</DrawerItem>
			</>) : (
				<DrawerItem onPress={() => navigation.navigate('Home', { tab: 'Meus orçamentos'})} >
					<DrawerItemLabel>Solicitar orçamento</DrawerItemLabel>
				</DrawerItem>
			)}
			
			<DrawerItem onPress={() => navigation.navigate('Suporte')} >
				<DrawerItemLabel>Suporte</DrawerItemLabel>
			</DrawerItem>
		</DrawerList>

		<LineDivider></LineDivider>

		<Tolls>
			{signed ? (<>
				<LoginBtn onPress={() => logout()} >
					<LoginLabel>Sair</LoginLabel>
				</LoginBtn>
			</>) : (<>
				<LoginBtn onPress={() => navigation.navigate('Login', { tab: 'login', redirect: 'Home' })}>
					<LoginLabel>Login</LoginLabel>
				</LoginBtn>
				<CadastroBtn onPress={() => navigation.navigate('Login', { tab: 'cadastro', redirect: 'Home' })}>
					<CadastroLabel>Cadastre-se</CadastroLabel>
				</CadastroBtn>
			</>)}
		</Tolls>
	</Container>);
};

export default DrawerContent;
