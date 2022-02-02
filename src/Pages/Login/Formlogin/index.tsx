import React, { useState, useEffect, useContext } from 'react';
import { KeyboardAvoidingView, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Firebase from '../../../config/firebase';

import {
	Loginform, FormLine, Iconline, Inputline, FormTools, Remebertoll, Forgottoll, ForgotPass, ForgotText, Cadastrobox, Cadastrolabel,
	Actionsecbtn, Actionseclabel, Divider, Glogin, Gicon, Glabel,
	Inputpassline, Btnpass, Iconpass,
} from './styles';

import { CheckBox } from '../../../Styles';

import { FormloginParamList } from '../../../../types';
import AuthContext from '../../../Contexts/auth';

import FormCheck from '../../../../src/Components/FormCheck';
import FormButton from '../../../../src/Components/FormButton';
import FormButtonAux from '../../../../src/Components/FormButtonAux';

import form_mail from '../../../../assets/images/form_mail.png';
import form_pass from '../../../../assets/images/form_pass.png';
import form_view from '../../../../assets/images/form_view.png';

import { AuthenticatedUserContext } from '../../../Contexts/AuthenticatedUserContext';

const auth = Firebase.auth();

const Formlogin = ({ navigation, route, setTab }: FormloginParamList) => {
	const { signIn } = useContext(AuthContext);

	const [redirect, setRedirect] = useState<string>('');
	const [redirectDetails, setRedirectDetails] = useState<string>('');

	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [formMail, setFormMail] = useState<string>('');
	const [formSenha, setFormSenha] = useState<string>('12345678');
	const [formSenhaView, setFormSenhaView] = useState(true);
	const [formLembrar, setFormLembrar] = useState<boolean>(false);

	async function checkLogin() {		
		// eslint-disable-next-line no-control-regex
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		
		if (formMail == '') {
			Alert.alert('Por favor, informe seu e-mail!');
		} else if (expression.test(String(formMail).toLowerCase()) == false) {
			Alert.alert('E-mail incorreto, por favor verifique!');
		} else if (formSenha == '') {
			Alert.alert('Por favor, informe sua senha');
		} else {
			setFormEditable(false);
			checkUserLogin();
		}
	}

	const checkUserLogin = async () => {
		try {
			await auth.signInWithEmailAndPassword(formMail, formSenha);
			
		  } catch (error: any) {
			Alert.alert(error.message);
			setFormEditable(true);
		  }
	}

	async function startScreen() {
		try {
			const user_mail = await AsyncStorage.getItem(async_key + 'user_mail');
			if (user_mail !== null) { setFormMail(user_mail); }

			setFormEditable(true);
		} catch (e) {
			console.log('ERROR AsyncStorage read - ', e);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <Loginform>
		<KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flexGrow: 1 }}>
			<FormLine>
				<Iconline source={form_mail} />
				<Inputline
					value={formMail}
					placeholderTextColor="#6b6b6b"
					onChangeText={(myMail: string) => setFormMail(myMail)}
					placeholder="E-mail"
					editable={formEditable}
				/>
			</FormLine>
			<FormLine>
				<Iconline source={form_pass} />
				<Inputpassline
					value={formSenha}
					placeholderTextColor="#6b6b6b"
					onChangeText={(myPass: React.SetStateAction<string>) => setFormSenha(myPass)}
					placeholder="Senha"
					secureTextEntry={formSenhaView}
					editable={formEditable}
				/>
				<Btnpass onPress={() => { setFormSenhaView(!formSenhaView); }} >
					<Iconpass source={form_view} />
				</Btnpass>
			</FormLine>
		</KeyboardAvoidingView>

		<FormTools>
			<Remebertoll>
				<CheckBox onPress={() => setFormLembrar(!formLembrar)}>
					<FormCheck active={formLembrar} value='Lembrar de mim'></FormCheck>
				</CheckBox>
			</Remebertoll>

			<Forgottoll>
				<ForgotPass onPress={() => navigation.navigate('LoginRecuperar', { tab: 'Login', redirect: redirect, redirect_details: redirectDetails })}>
					<ForgotText>Esqueci minha senha</ForgotText>
				</ForgotPass>
			</Forgottoll>
		</FormTools>

		<FormButton
			active={formEditable}
			loader={formEditable ? false : true}
			label="Entrar"
			navigation={navigation}
			onPress={() =>
				checkLogin()}
		/>

		<Cadastrobox>
			<Cadastrolabel>Você é novo por aqui?</Cadastrolabel>
			<FormButtonAux
				active={formEditable}
				loader={formEditable ? false : true}
				label="Cadastre-se"
				navigation={navigation}
				onPress={() => setTab('cadastro')}
			/>
		</Cadastrobox>
	</Loginform>;
};

export default Formlogin;
