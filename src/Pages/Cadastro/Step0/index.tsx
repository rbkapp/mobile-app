import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
	CadastroForm, FormLine, Iconline, Inputpassline, Btnpass, Iconpass, Loginaction, Loginactionlabel, Cadastrobox, Cadastrolabel,
	Divider, Glogin, Gicon, Glabel
} from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FormloginParamList } from '../../../../types';

import FormButton from '../../../../src/Components/FormButton';
import FormTextInput from '../../../../src/Components/FormTextInput';
import FormTextInputPhone from '../../../../src/Components/FormTextInputPhone';

import form_user from '../../../../assets/images/form_user.png';
import form_mail from '../../../../assets/images/form_mail.png';
import form_phone from '../../../../assets/images/form_phone.png';
import form_pass from '../../../../assets/images/form_pass.png';
import form_view from '../../../../assets/images/form_view.png';
import form_glogin from '../../../../assets/images/glogin.png';

import Infos from '../../../../constants/Infos';
const async_key = Infos['Key'].AsyncStorage;

const Step0 = ({ navigation, setTab }: FormloginParamList) => {
	const [formEditable, setFormEditable] = useState(true);

	const [formName, setFormName] = useState('');
	const [formMail, setFormMail] = useState('');
	const [formPhone, setFormPhone] = useState('');
	const [formPass0, setFormPass0] = useState('');
	const [formPass1, setFormPass1] = useState('');
	const [formPass0View, setFormPass0View] = useState(true);
	const [formPass1View, setFormPass1View] = useState(true);

	async function checkCadastro() {
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

		if (formName == '') {
			Alert.alert('Por favor, informe seu nome!');
		} else if (formMail == '') {
			Alert.alert('Por favor, informe seu e-mail!');
		} else if (expression.test(String(formMail).toLowerCase()) == false) {
			Alert.alert('E-mail incorreto, por favor verifique!');
		} else if (formPhone == '') {
			Alert.alert('Por favor, informe seu telefone!');
		} else if (formPass0 == '') {
			Alert.alert('Por favor, informe sua senha!');
		} else if (formPass0.length < 8) {
			Alert.alert('Sua senha deve ter no mínimo oito caracteres, por favor verifique!');
		} else if (formPass1 == '') {
			Alert.alert('Por favor, repita sua senha!');
		} else if (formPass0 != formPass1) {
			Alert.alert('A senhas não conferem, por favor verifique!');
		} else {
			try {
				await AsyncStorage.setItem(async_key + 'u_formName', formName);
				await AsyncStorage.setItem(async_key + 'u_formMail', formMail);
				await AsyncStorage.setItem(async_key + 'u_formPhone', formPhone);
				await AsyncStorage.setItem(async_key + 'u_formPass', formPass0);

				setTab('step1');
			} catch (e) {
				console.log('ERROR AsyncStorage save - ', e);
			}
		}
	}

	async function startScreen() {
		try {
			const u_formName = await AsyncStorage.getItem(async_key + 'u_formName');
			if (u_formName !== null) { setFormName(u_formName); }

			const u_formMail = await AsyncStorage.getItem(async_key + 'u_formMail');
			if (u_formMail !== null) { setFormMail(u_formMail); }

			const u_formPhone = await AsyncStorage.getItem(async_key + 'u_formPhone');
			if (u_formPhone !== null) { setFormPhone(u_formPhone); }

			setFormEditable(true);
		} catch (e) {
			console.log('ERROR AsyncStorage read - ', e);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <CadastroForm >
		<FormTextInput
			editable={formEditable}
			icon={form_user}
			value={formName}
			placeholder='Nome completo'
			callback={setFormName}
		/>
		<FormTextInput
			editable={formEditable}
			icon={form_mail}
			value={formMail}
			placeholder='E-mail'
			callback={setFormMail}
		/>
		<FormTextInputPhone
			editable={formEditable}
			icon={form_phone}
			value={formPhone}
			placeholder='Telefone'
			callback={setFormPhone}
		/>
		<FormLine>
			<Iconline source={form_pass} />
			<Inputpassline
				value={formPass0}
				onChangeText={myText => setFormPass0(myText)}
				placeholder="Senha"
				placeholderTextColor="#6b6b6b"
				secureTextEntry={formPass0View}
			/>
			<Btnpass onPress={() => { if (formPass0View == true) { setFormPass0View(false); } else { setFormPass0View(true); } }} >
				<Iconpass source={form_view} />
			</Btnpass>
		</FormLine>
		<FormLine>
			<Iconline source={form_pass} />
			<Inputpassline
				value={formPass1}
				onChangeText={myText => setFormPass1(myText)}
				placeholder="Repita a senha"
				placeholderTextColor="#6b6b6b"
				secureTextEntry={formPass1View}
			/>
			<Btnpass onPress={() => { if (formPass1View == true) { setFormPass1View(false); } else { setFormPass1View(true); } }} >
				<Iconpass source={form_view} />
			</Btnpass>
		</FormLine>

		<Cadastrobox>
			<Cadastrolabel>Ao se cadastrar, você concorda com nossos</Cadastrolabel>
			<Loginaction onPress={() => navigation.navigate('TermosUsuario')} >
				<Loginactionlabel> Termos de uso</Loginactionlabel>
			</Loginaction>
		</Cadastrobox>

		<FormButton active={formEditable} loader={formEditable ? false : true} label="Cadastrar" navigation={navigation} onPress={() => checkCadastro()} />

		<Cadastrobox>
			<Cadastrolabel>Já possui uma conta? </Cadastrolabel>
			<Loginaction onPress={() => setTab('login')} >
				<Loginactionlabel> Entrar</Loginactionlabel>
			</Loginaction>
		</Cadastrobox>

		<Divider>──────── Ou ────────</Divider>

		<Glogin>
			<Gicon source={form_glogin} />
			<Glabel>continue com Google</Glabel>
		</Glogin>
	</CadastroForm>;
};

export default Step0;
