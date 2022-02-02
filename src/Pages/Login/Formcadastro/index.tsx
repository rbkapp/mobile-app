import React, { useState } from 'react';
import { KeyboardAvoidingView, Alert, Modal, Platform } from 'react-native';

import {
	Loginform, FormLine, Iconline, Inputpassline, Btnpass, Iconpass, Loginaction, Loginactionlabel, Cadastrobox, Cadastrolabel,
	MessageModal, MessageModalCont, ModalContIcon, ModalContTitle, ModalContMessage, ModalContToll,
} from './styles';

import { Button, ButtonLabel } from '../../../Styles';
import { FormloginParamList } from '../../../../types';

import FormButton from '../../../../src/Components/FormButton';
import FormTextInput from '../../../../src/Components/FormTextInput';
import FormTextInputPhone from '../../../../src/Components/FormTextInputPhone';
import form_user from '../../../../assets/images/form_user.png';
import form_mail from '../../../../assets/images/form_mail.png';
import form_phone from '../../../../assets/images/form_phone.png';
import form_pass from '../../../../assets/images/form_pass.png';
import form_view from '../../../../assets/images/form_view.png';
import icon_message_register from '../../../../assets/images/icon_message_register.png';

import Firebase from '../../../config/firebase';

const auth = Firebase.auth();

const Formcadastro = ({ navigation, setTab }: FormloginParamList) => {
	const [formEditable, setFormEditable] = useState(true);
	const [formModalMessage, setFormModalMessage] = useState(false);
	const [formName, setFormName] = useState('');
	const [formMail, setFormMail] = useState('');
	const [formPhone, setFormPhone] = useState('');
	const [formPass0, setFormPass0] = useState('');
	const [formPass1, setFormPass1] = useState('');
	const [formPass0View, setFormPass0View] = useState(true);
	const [formPass1View, setFormPass1View] = useState(true);

	async function checkCadastro() {
		// eslint-disable-next-line no-useless-escape
		// eslint-disable-next-line no-control-regex
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		
		if (formMail == '') {
			Alert.alert('Por favor, informe seu e-mail!');
		} else if (expression.test(String(formMail).toLowerCase()) == false) {
			Alert.alert('E-mail incorreto, por favor verifique!');
		} else if (formPass0 == '') {
			Alert.alert('Por favor, informe sua senha!');
		} else if (formPass0.length < 8) {
			Alert.alert('Sua senha deve ter no mínimo oito caracteres, por favor verifique!');
		} else if (formPass1 == '') {
			Alert.alert('Por favor, repita sua senha!');
		} else if (formPass0 != formPass1) {
			Alert.alert('A senhas não conferem, por favor verifique!');
		} else {
			/* API */
			setFormEditable(false);
			checkSigIn();
			
		}
	}

	const checkSigIn = async () => {
		try {
			await auth.createUserWithEmailAndPassword(formMail, formPass0);
		  } catch (error: any) {
			Alert.alert(error.message);
			setFormEditable(true);
		  }
	}

	function closeFormModalMessage() {
		setTab('login');
		setFormModalMessage(false);
	}

	return <Loginform>
		<KeyboardAvoidingView enabled style={{ flexGrow: 1 }}>
			<FormTextInput
				editable={formEditable}
				icon={form_mail}
				value={formMail}
				placeholder='E-mail'
				callback={setFormMail}
			/>			
			<FormLine>
				<Iconline source={form_pass} />
				<Inputpassline
					value={formPass0}
					onChangeText={(myText: string) => setFormPass0(myText)}
					placeholder="Senha"
					placeholderTextColor="#6b6b6b"
					secureTextEntry={formPass0View}
					editable={formEditable}
				/>
				<Btnpass
					onPress={() => { setFormPass0View(!formPass0View); }}
				>
					<Iconpass source={form_view} />
				</Btnpass>
			</FormLine>
			<FormLine>
				<Iconline source={form_pass} />
				<Inputpassline
					value={formPass1}
					onChangeText={(myText: string) => setFormPass1(myText)}
					placeholder="Repita a senha"
					placeholderTextColor="#6b6b6b"
					secureTextEntry={formPass1View}
					editable={formEditable}
				/>
				<Btnpass
					onPress={() => { setFormPass1View(!formPass1View); }} >
					<Iconpass source={form_view} />
				</Btnpass>
			</FormLine>
		</KeyboardAvoidingView>
		<Cadastrobox>
			<Cadastrolabel>Ao se cadastrar, você concorda com nossos</Cadastrolabel>
			<Loginaction onPress={() => console.log('Termos')} >
				<Loginactionlabel> Termos de uso</Loginactionlabel>
			</Loginaction>
		</Cadastrobox>
		<FormButton
			active={formEditable}
			loader={formEditable ? false : true}
			label="Cadastrar"
			navigation={navigation} onPress={() => checkCadastro()}
		/>
		<Cadastrobox>
			<Cadastrolabel>Já possui uma conta? </Cadastrolabel>
			<Loginaction onPress={() => setTab('login')} >
				<Loginactionlabel> Entrar</Loginactionlabel>
			</Loginaction>
		</Cadastrobox>
		<Modal
			animationType="slide"
			transparent={true}
			visible={formModalMessage}
		>
			<MessageModal>
				<MessageModalCont>
					<ModalContIcon source={icon_message_register} />
					<ModalContTitle>Cadastro realizado!</ModalContTitle>
					<ModalContMessage>Uma confirmação foi enviada para eu e-mail.</ModalContMessage>
					<ModalContToll>
						<Button onPress={() => closeFormModalMessage()}>
							<ButtonLabel>Ok</ButtonLabel>
						</Button>
					</ModalContToll>
				</MessageModalCont>
			</MessageModal>
		</Modal>
	</Loginform>;
};

export default Formcadastro;
