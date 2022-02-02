import * as React from 'react';
import { KeyboardAvoidingView, Alert, SafeAreaView, ScrollView, Platform } from 'react-native';
import { useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	Logoform, Formlogo,
	Loginform, FormLine, Iconline, Tabsform, Activetab, Labeltabactive, Cadastrobox, Cadastrolabel,
	Actionsecbtn, Actionseclabel, Divider, Glogin, Gicon, Glabel,
} from './styles';

import { Divider20 } from '../../../Styles';

/* global components*/
import HeaderLogin from '../../../Components/HeaderLogin';
import Footer from '../../../Components/Footer';
import FormButton from '../../../Components/FormButton';
import FormTextInputPasswordLabel from '../../../Components/FormTextInputPasswordLabel';
import form_logo from '../../../../assets/images/eventx_logo.png';
import form_info from '../../../../assets/images/form_info.png';
import form_pass from '../../../../assets/images/form_pass.png';

import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import { RootStackParamList } from '../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginRecuperar'>;
interface Props { navigation: NavigationProp, route: any }

const LoginRecuperar = ({ navigation, route }: Props) => {
	const { signIn } = useContext(AuthContext);

	const [redirect, setRedirect] = useState<string>(route.params.redirect);
	const [redirectDetails, setRedirectDetails] = useState<string>(route.params.redirect_details);

	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [formCode, setFormCode] = useState<string>('');
	const [formCodeVerify, setFormCodeVerify] = useState<boolean>(false);
	const [formPassword0, setFormPassword0] = useState<string>('');
	const [formPassword1, setFormPassword1] = useState<string>('');

	const checkForm = async () => {
		const code = formCode.replace(/\s/g, '');

		console.log('LoginRedefinir -> checkForm - > code: '+code);

		if (code.length == 0) {
			Alert.alert('Por favor, insira o código');
		} else if (code.length < 6) {
			Alert.alert('Código incompleto, verifique!');
		} else {
			setFormEditable(false);

			try {
				const response = await api.get('/verify-code-password/'+code);
				const responseData = response.data;
				console.log('LoginRedefinir -> checkForm - > responseData: '+JSON.stringify(responseData));

				if(responseData){
					setFormEditable(true);
					setFormCodeVerify(true);
				}

			} catch (err) {
				console.log('LoginRedefinir -> checkForm - > erro: '+err);
				console.log('LoginRedefinir -> checkForm - > erro JSON: '+JSON.stringify(err));
				Alert.alert('Código inválido!');
				setFormEditable(true);
				setFormCodeVerify(false);
			}
		}
	};

	const checkNewPass = async () => {
		if (formPassword0 == '') {
			Alert.alert('Por favor, informe a nova senha!');

		} else if (formPassword0.length < 8) {
			Alert.alert('Sua nova senha deve ter no mínimo oito caracteres, verifique!');

		} else if (formPassword1 == '') {
			Alert.alert('Por favor, confirme a nova senha!');

		} else if (formPassword0 != formPassword1) {
			Alert.alert('Por favor, as novas senhas não conferem!');

		} else {
			saveNewPass();
		}
	};

	const saveNewPass = async () => {
		const code = formCode.replace(/\s/g, '');

		setFormEditable(false);

		try {
			const credentials: any = {
				password: formPassword0,
				code: code,
			};
			const response = await api.put('/reset-password', credentials);
			const responseData = response.data;

			Alert.alert('Sua senha foi redefinida com sucesso, você já pode fazer login.');

			navigation.dispatch({
				...StackActions.replace('Eventos'),
				source: route.key,
				target: navigation.dangerouslyGetState().key,
			});

		} catch (err) {
			console.log(err);
			console.log(JSON.stringify(err));
			Alert.alert('Desculpe, algo deu errado.');
			setFormEditable(true);
		}
	};

	return (
		<SafeAreaView>
			<ScrollView>
				<Container>
					<Logoform>
						<Formlogo source={form_logo} />
					</Logoform>

					<Tabsform>
						<Activetab >
							<Labeltabactive>Redefinir senha</Labeltabactive>
						</Activetab>
					</Tabsform>


					<Loginform>
						{
							!formCodeVerify ? (<>
								<Cadastrolabel>Insira abaixo o código que foi enviado em seu e-mail:</Cadastrolabel>
								<KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flexGrow: 1 }}>
									<FormLine>
										<Iconline source={form_info} />
										<TextInputMask
											style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 10}}
											type={ 'custom' }
											options={{ mask: '9 9 9 9 9 9' }}
											value={ formCode }
											placeholder={ '0 0 0 0 0 0' }
											onChangeText={(text: React.SetStateAction<string>) => { setFormCode(text); }}
											editable={formEditable}
										/>
									</FormLine>
								</KeyboardAvoidingView>
								<Divider20 />
								<FormButton active={formEditable} loader={formEditable ? false : true} label="Validar" navigation={navigation} onPress={() => checkForm()} />
							</>) : (<>
								<Cadastrolabel>Insira abaixo sua nova senha:</Cadastrolabel>
								<KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flexGrow: 1 }}>
									<FormTextInputPasswordLabel icon={form_pass} label="Nova senha" placeholder='Nova senha' value={formPassword0} callback={setFormPassword0} editable={formEditable} />
									<FormTextInputPasswordLabel icon={form_pass} label="Repita a nova senha" placeholder='Repita a nova senha' value={formPassword1} callback={setFormPassword1} editable={formEditable} />
								</KeyboardAvoidingView>
								<Divider20 />
								<FormButton active={formEditable} loader={formEditable ? false : true} label="Enviar" navigation={navigation} onPress={() => checkNewPass()} />
							</>)
						}

						<Divider20 />
						<Cadastrobox>
							<Cadastrolabel>Você é novo por aqui?</Cadastrolabel>
							<Actionsecbtn
								onPress={() => navigation.dispatch({
									...StackActions.replace('Login', { tab: 'cadastro', redirect: 'Eventos' }),
									source: route.key,
									target: navigation.dangerouslyGetState().key,
								})}
							>
								<Actionseclabel>Cadastre-se</Actionseclabel>
							</Actionsecbtn>
						</Cadastrobox>
					</Loginform>

					<Footer />
				</Container>
			</ScrollView>
			<HeaderLogin navigation={navigation} route={route} />

		</SafeAreaView>
	);
};

export default LoginRecuperar;
