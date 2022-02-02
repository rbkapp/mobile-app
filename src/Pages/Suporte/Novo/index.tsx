import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

import {
	ViewScreen, ViewScreenCont, ScreenContTitle, ScreenFormLabel, Divider20, LineDivider, Divider10,
	FormDescricao, FormDescricaoCount, CheckBox,
	ScreenFormTitle,
} from '../../../Styles';

import HeaderLogin from '../../../Components/HeaderLogin';
import Footer from '../../../Components/Footer';
import FormTextInputLabel from '../../../Components/FormTextInputLabel';
import FormTextInputPhoneLabel from '../../../Components/FormTextInputPhoneLabel';
import FormDropDownPicker from '../../../Components/FormDropDownPicker';
import FormTextArea from '../../../Components/FormTextArea';
import FormCheck from '../../../Components/FormCheck';
import FormButton from '../../../Components/FormButton';
import form_user from '../../../../assets/images/form_user.png';
import form_mail from '../../../../assets/images/form_mail.png';
import form_phone from '../../../../assets/images/form_phone.png';
import form_ticket from '../../../../assets/images/form_ticket.png';

import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';
import Infos from '../../../../constants/Infos';

import {
	RootStackParamList,
} from '../../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PainelCheck'>;
interface Props { navigation: NavigationProp, route: any; }

const ColorTheme = Colors['Theme'];
const eventxProdApi = Infos['Url'].EventxProdApi;
const DataSuportNewType = Datas['SuportNewTypes'];

const SuporteNovo = ({ navigation, route }: Props) => {
	const { user, token, signed } = useContext(AuthContext);

	const [formEditable, setFormEditable] = useState<boolean>(true);
	const [formLoad, setFormLoad] = useState<boolean>(true);

	const [formType, setFormType] = useState<string>('');
	const [formTransactionType, setFormTransactionType] = useState<string>('');

	const [formName, setFormName] = useState<string>('');
	const [formMail, setFormMail] = useState<string>('');
	const [formPhone, setFormPhone] = useState<string>('');

	const [formMailPurchase, setFormMailPurchase] = useState<string>('');
	const [formCodePurchase, setFormCodePurchase] = useState<string>('');

	const [formDescription, setFormDescription] = useState('');
	const changeFormDescription = (text: string) => {
		const newTextLenght = formDescription.length + text.length;

		newTextLenght < 501 ? setFormDescription(text) : null;
	};

	function formCheck(){
		// eslint-disable-next-line no-control-regex
		const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

		if(formName == ''){
			Alert.alert('Por favor, informe seu nome!');
		} else if(formMail == ''){
			Alert.alert('Por favor, informe seu e-mail!');
		} else if (expression.test(String(formMail).toLowerCase()) == false) {
			Alert.alert('E-mail incorreto, por favor verifique!');
		} else if(formPhone == ''){
			Alert.alert('Por favor, informe seu telefone!');
		} else if(formType == ''){
			Alert.alert('Por favor, escolha um assunto!');
		} else if(formType == '1' && formMailPurchase == ''){
			Alert.alert('Por favor, informe o e-mail utilizado na compra');
		} else if (formType == '1' && expression.test(String(formMailPurchase).toLowerCase()) == false) {
			Alert.alert('E-mail de compra incorreto, por favor verifique!');
		} else if(formType == '1' && formCodePurchase == ''){
			Alert.alert('Por favor, informe o código da compra');
		} else if(formType == '3' && formTransactionType == ''){
			Alert.alert('Por favor, selecione o problema encontrado!');
		} else if(formDescription == ''){
			Alert.alert('Por favor, insira sua mensagem ao suporte!');
		} else {
			saveForm();
		}
	}

	async function saveForm() {
		setFormEditable(false);

		let message = '';
		if(formType == '1'){
			message = formName+' - '+formPhone+' / '+formMail;
			message += '\nDeseja atendimento referente a compra ID: '+formCodePurchase+', realizada atravéz do e-mail: '+formMailPurchase;
			message += '\nDetalhes: '+formDescription;
		} else if(formType == '2'){
			message = formName+' - '+formPhone+' / '+formMail;
			message += '\nDeseja atendimento referente ao Aplicativo';
			message += '\nDetalhes: '+formDescription;
		} else if(formType == '3'){
			message = formName+' - '+formPhone+' / '+formMail;
			message += '\nDeseja atendimento referente a problemas financeiros do tipo: '+formTransactionType;
			message += '\nDetalhes: '+formDescription;
		}

		axios.post(eventxProdApi+'/messages/send-no-auth', {
			title: 'Novo atendimento (mobile)',
			message: message,
			for: 1,
		}, {
			auth: {
				username: 'eb5f49b3d3cfeb8eb2a0bed2457c8615',
				password: '96926e5e9b9331945a9f3be377681a7f'
			}
		}).then(res => {
			console.log('res: ' + JSON.stringify(res.data));
			Alert.alert('Sua mensagem foi enviada, em breve retornaremos seu contato.');
			navigation.navigate('Suporte');
			setFormEditable(true);
		}).catch(err => console.log(err));
	}
	async function startScreen() {
		if(signed){
			setFormName(user?.name);
			setFormMail(user?.email);
			setFormPhone(user?.cell_phone);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<ViewScreen>
				<ViewScreenCont>
					<ScreenFormLabel>SUPORTE</ScreenFormLabel>
					<ScreenContTitle>Enviar uma solicitação</ScreenContTitle>
					<Divider20 />
					<FormTextInputLabel icon={form_user} value={formName} label="Nome" placeholder='Nome' callback={setFormName} editable={formEditable} />
					<FormTextInputLabel icon={form_mail} value={formMail} label="E-mail de contato" placeholder='E-mail' callback={setFormMail} editable={formEditable} />
					<FormTextInputPhoneLabel icon={form_phone} value={formPhone} label="Telefone" placeholder='Telefone' callback={setFormPhone} editable={formEditable} />
					<Divider20 />
					<ScreenFormLabel>ASSUNTO</ScreenFormLabel>
					<FormDropDownPicker
						items={DataSuportNewType}
						defaultValue={formType}
						placeholder="Escolha uma opção"
						onChangeItem={setFormType}
						editable={formEditable}
					/>
					<LineDivider />

					{
						formType == '1' ? (<>
							<Divider10 />
							<ScreenFormTitle>Insira as informações referentes à sua compra</ScreenFormTitle>
							<Divider20 />
							<FormTextInputLabel icon={form_mail} value={formMailPurchase} label="E-mail utilizado na compra" placeholder='E-mail' callback={setFormMailPurchase} editable={formEditable} />
							<FormTextInputLabel icon={form_ticket} value={formCodePurchase} label="Código da venda" placeholder='Código' callback={setFormCodePurchase} editable={formEditable} />
							<LineDivider />
						</>) : null
					}
					{
						formType == '3' ? (<>
							<Divider20 />
							<ScreenFormTitle>Qual o problema encontrado com essa transação?</ScreenFormTitle>
							<Divider20 />
							<CheckBox onPress={() => setFormTransactionType('Tive um problema com a venda')}>
								<FormCheck active={formTransactionType == 'Tive um problema com a venda' ? true : false} value='Tive um problema com a venda'></FormCheck>
							</CheckBox>
							<CheckBox onPress={() => setFormTransactionType('Tive um problema com o App')}>
								<FormCheck active={formTransactionType == 'Tive um problema com o App' ? true : false} value='Tive um problema com o App'></FormCheck>
							</CheckBox>
							<CheckBox onPress={() => setFormTransactionType('O valor está errado')}>
								<FormCheck active={formTransactionType == 'O valor está errado' ? true : false} value='O valor está errado'></FormCheck>
							</CheckBox>
							<CheckBox onPress={() => setFormTransactionType('Essa transação está repetida')}>
								<FormCheck active={formTransactionType == 'Essa transação está repetida' ? true : false} value='Essa transação está repetida'></FormCheck>
							</CheckBox>
							<CheckBox onPress={() => setFormTransactionType('Eu não autorizei esta transação')}>
								<FormCheck active={formTransactionType == 'Eu não autorizei esta transação' ? true : false} value='Eu não autorizei esta transação'></FormCheck>
							</CheckBox>
							<CheckBox onPress={() => setFormTransactionType('Outro')}>
								<FormCheck active={formTransactionType == 'Outro' ? true : false} value='Outro'></FormCheck>
							</CheckBox>
							<LineDivider />
						</>) : null
					}

					<Divider10 />
					<ScreenFormTitle>Escreva aqui sua mensagem</ScreenFormTitle>
					<FormDescricao>
						<FormTextArea
							editable={formEditable}
							value={formDescription}
							placeholder='Insira aqui sua mensagem ao suporte...'
							callback={changeFormDescription}
						></FormTextArea>

						<FormDescricaoCount>{500 - formDescription.length} caracteres restantes</FormDescricaoCount>
					</FormDescricao>
					<LineDivider />


					<FormButton
						active={formEditable}
						loader={!formEditable}
						label="Enviar"
						navigation={navigation}
						onPress={() => formCheck()}
					/>
				</ViewScreenCont>
				<Footer />
			</ViewScreen>
		</ScrollView>

		<HeaderLogin navigation={navigation} route={route} />
	</SafeAreaView>;
};
export default SuporteNovo;
