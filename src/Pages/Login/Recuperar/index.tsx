import * as React from 'react';
import { KeyboardAvoidingView, Alert, SafeAreaView, ScrollView, Platform } from 'react-native';
import { useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';

import {
	Container,
	Logoform, Formlogo,
	Loginform, FormLine, Iconline, Inputline, Tabsform, Activetab, Labeltabactive, ForgotPass, ForgotText, Cadastrobox, Cadastrolabel,
	Actionsecbtn, Actionseclabel, Divider, Glogin, Gicon, Glabel,
} from './styles';

import { Divider20 } from '../../../Styles';

/* global components*/
import HeaderLogin from '../../../Components/HeaderLogin';
import Footer from '../../../Components/Footer';
import FormButton from '../../../Components/FormButton';
import form_logo from '../../../../assets/images/eventx_logo.png';
import form_mail from '../../../../assets/images/form_mail.png';

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

	const [formMail, setFormMail] = useState<string>('');

	const checkForm = async () => {
		// eslint-disable-next-line no-control-regex
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

		if (formMail == '') {
			Alert.alert('Por favor, digite seu e-mail!');
		} else if (expression.test(String(formMail).toLowerCase()) == false) {
			Alert.alert('E-mail incorreto, por favor verifique!');
		} else {
			setFormEditable(false);

			try {
				const credentials = {
					email: formMail.toLowerCase(),
				};
				const response = await api.post('/forgot-password', credentials);
				const responseData = response.data;

				Alert.alert('Verifique seu e-mail, enviamos um código para você redefinir sua senha.');

				navigation.dispatch({
					...StackActions.replace('LoginRedefinir', { redirect: 'Eventos', redirectDetails: redirectDetails }),
					source: route.key,
					target: navigation.dangerouslyGetState().key,
				});

			} catch (err) {
				console.log(err);
				Alert.alert('E-mail não encontrado!');
				setFormEditable(true);
			}
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
							<Labeltabactive>Recuperar senha</Labeltabactive>
						</Activetab>
					</Tabsform>

					<Cadastrolabel>Nos informe seu e-mail de acesso e enviaremos um código para você redefinir sua senha:</Cadastrolabel>
					<Loginform>
						<KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flexGrow: 1 }}>
							<FormLine>
								<Iconline source={form_mail} />
								<Inputline
									value={formMail}
									onChangeText={myMail => setFormMail(myMail)}
									placeholder="E-mail"
									editable={formEditable}
								/>
							</FormLine>
						</KeyboardAvoidingView>
						<Divider20 />
						<FormButton active={formEditable} loader={formEditable ? false : true} label="Enviar" navigation={navigation} onPress={() => checkForm()} />
						<Divider20 />
						<Actionseclabel>
							<ForgotPass onPress={() => navigation.navigate('LoginRedefinir', { redirect: redirect, redirect_details: redirectDetails })}>
								<ForgotText>Já recebeu o código?</ForgotText>
							</ForgotPass>
						</Actionseclabel>
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
