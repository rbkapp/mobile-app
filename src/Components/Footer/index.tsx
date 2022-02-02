import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Container,
	Linedivider, FooterBtn, Copyfooter, FormMaster,
	FormLine, Iconline, Inputpassline, Btnpass, Iconpass,
} from './styles';

import {
	ViewFullRow, View50, CheckBox
} from '../../Styles';

import FormButton from '../../../src/Components/FormButton';
import FormCheck from '../../../src/Components/FormCheck';

import form_pass from '../../../assets/images/form_pass.png';
import form_view from '../../../assets/images/form_view.png';

import Infos from '../../../constants/Infos';

const async_key = Infos['Key'].AsyncStorage;
const eventxDevApi = Infos['Url'].EventxDevApi;
const eventxProdApi = Infos['Url'].EventxProdApi;

const Footer = () => {
	const [formSenha, setFormSenha] = useState<string>('');
	const [formSenhaView, setFormSenhaView] = useState(true);
	const [formType, setFormType] = useState<number>(Infos['Url'].DefaultApi);
	const changeFormType = async (type: number) => {
		setFormType(type);
		await AsyncStorage.setItem(async_key + 'storage_api', type.toString());
	};

	let lastTap = Date.now();
	const [step, setStep] = useState(0);

	const handleDoubleTap = () => {
		const now = Date.now();
		const DOUBLE_PRESS_DELAY = 300;
		if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
			setStep(step + 1);
		} else {
			lastTap = now;
		}
	};

	const checkLogin = () => {
		if (formSenha == '') {
			Alert.alert('Por favor, digite a senha!');
		} else if (formSenha != 'masago') {
			Alert.alert('Senha errada, verifique!');
		} else {
			setStep(10);
		}
	};

	async function startScreen() {
		try {
			const storageApi = await AsyncStorage.getItem(async_key + 'storage_api');

			if(storageApi){
				setFormType(parseFloat(storageApi));
			}
		} catch (e) {
			console.log('ERROR AsyncStorage read - ', e);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <Container>
		<Linedivider />
		{
			step == 0 || step == 1 ? (
				<FooterBtn
					onPress={() => handleDoubleTap()}
				>
					<Copyfooter>{step == 0 ? 'Rebimboka® 2021 - Direitos reservados (V 1.0 beta)' : 'Clique para acessar como ADMIN'}</Copyfooter>
				</FooterBtn>
			) : (<FormMaster>
				<Copyfooter>MASTER ADM</Copyfooter>
				{
					step == 10 ? (<>
						<Copyfooter>API em uso:</Copyfooter>
						<ViewFullRow>
							<View50>
								<CheckBox onPress={() => changeFormType(0)}>
									<FormCheck active={formType == 0 ? true : false} value='DEV (teste)'></FormCheck>
								</CheckBox>
							</View50>
							<View50>
								<CheckBox onPress={() => changeFormType(1)}>
									<FormCheck active={formType == 1 ? true : false} value='PROD (produção)'></FormCheck>
								</CheckBox>
							</View50>
						</ViewFullRow>
					</>) : (<>
						<FormLine>
							<Iconline source={form_pass} />
							<Inputpassline
								value={formSenha}
								placeholderTextColor="#6b6b6b"
								onChangeText={myPass => setFormSenha(myPass)}
								placeholder="Senha"
								secureTextEntry={formSenhaView}
								editable={true}
							/>
							<Btnpass onPress={() => { setFormSenhaView(!formSenhaView); }} >
								<Iconpass source={form_view} />
							</Btnpass>
						</FormLine>
						<FormButton
							active={true}
							loader={false}
							label="Entrar" navigation={null}
							onPress={() => checkLogin()}
						/>
					</>)
				}
			</FormMaster>)
		}
	</Container>;
};

export default Footer;
