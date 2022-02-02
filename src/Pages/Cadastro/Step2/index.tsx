import React, { useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cep from 'cep-promise';

import {
	Container,
	Endform, FormLine, Iconline, Inputline, TollS, Toll,
} from './styles';

import { Button, ButtonLabel, CheckBox, ButtonAux, ButtonAuxLabel, ViewFullRow, View50, Divider20, Divider35 } from '../../../Styles';

import FormTextInput from '../../../Components/FormTextInput';
import FormTextInputNumber from '../../../Components/FormTextInputNumber';
import FormButton from '../../../Components/FormButton';
import FormDropDownPickerLabel from '../../../Components/FormDropDownPickerLabel';
import form_cep from '../../../../assets/images/form_cep.png';
import form_end from '../../../../assets/images/form_end.png';
import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Infos from '../../../../constants/Infos';
import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';
import {
	TabsParamList,
	DropDownParamList
} from '../../../../types';

const async_key = Infos['Key'].AsyncStorage;
const ColorTheme = Colors['Theme'];
const DataStates = Datas['States'];

const Step2 = ({ navigation, route, setTab }: TabsParamList) => {
	const [formDataStates, setFormDataStates] = useState<DropDownParamList[]>(DataStates);

	const { signIn, token, user } = useContext(AuthContext);

	const [redirect, setRedirect] = useState(route.params.redirect);
	const [redirectDetails, setRedirectDetails] = useState(route.params.redirect_details);

	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [user_id, setUserId] = useState('');
	const [user_name, setUserName] = useState('');
	const [user_mail, setUserMail] = useState('');
	const [user_verify_token, setUserVerifyToken] = useState('');

	const [formDate, setFormDate] = useState('');
	const [formCpf, setFormCpf] = useState('');
	const [formType, setFormType] = useState('');
	const [formGener, setFormGener] = useState('');

	const [formCep, setFormCep] = useState('');
	const [formCepStatus, setFormCepStatus] = useState(false);
	const [formEndereco, setFormEndereco] = useState('');
	const [formNumero, setFormNumero] = useState('');
	const [formComplemento, setFormComplemento] = useState('');
	const [formBairro, setFormBairro] = useState('');
	const [formCidade, setFormCidade] = useState('');
	const [formEstado, setFormEstado] = useState('');

	async function searchAdress(text: string) {
		const enterCep = text;
		const enterCepClear = enterCep.replace(/[^0-9]/g, '');
		//console.log('enterCepClear : ' + enterCepClear);
		if (enterCepClear.length == 8) {
			//console.log('enterCepClear.length');
			try {
				//console.log('try');
				cep(enterCepClear, { timeout: 5000, providers: ['brasilapi'] })
					.then((response: {
            street: string;
            neighborhood: string;
            city: string;
            state: string;
          }) => {
						/*console.log('response: '+response.street);*/
						setFormEndereco(response.street);
						setFormBairro(response.neighborhood);
						setFormCidade(response.city);
						setFormEstado(response.state);
					});
			} catch (e) {
				//console.log(e);
			}
		}
		setFormCep(text);
	}

	async function checkFormSave() {
		if (formCep == '') {
			Alert.alert('Por favor, informe o CEP do seu endereço!');
		} else if (formEndereco == '') {
			Alert.alert('Por favor, informe seu endereço!');
		} else if (formNumero == '') {
			Alert.alert('Por favor, informe o número do seu endereço!');
		} else if (formBairro == '') {
			Alert.alert('Por favor, informe o bairro do seu endereço!');
		} else if (formCidade == '') {
			Alert.alert('Por favor, informe sua cidade!');
		} else if (formEstado == '') {
			Alert.alert('Por favor, selecione seu estado!');
		} else {
			/* RUM edit API */
			console.log('Rum API');
			setFormEditable(false);

			try {
				const credentials = {
					name: user.name,
					email: user.email,
					birthdate: formDate,
					document: formCpf,
					type_document: formType,
					gender: formGener,
				};
				api.defaults.headers.authorization = `Bearer ${token}`;

				const response = await api.put(`/users/update/${user.id}`, credentials);
				const user_response = response.data;
				console.log('API resp: '+JSON.stringify(user_response));

				newAdress();

			} catch (err: any) {
				console.log(err.response);
				setFormEditable(true);
			}
		}
	}

	async function newAdress(){
		try {
			const credentials = {
				user_id: user.id,
				address_title: 'Meu endereço',
				address_zipcode: formCep,
				address_street: formEndereco,
				address_country: 'BR',
				address_district: formBairro,
				address_number: formNumero,
				address_state: formEstado,
				address_city: formCidade,
				default: true,
			};
			api.defaults.headers.authorization = `Bearer ${token}`;

			const response = await api.post('/users/add-address', credentials);
			const user_response = response.data;
			//console.log('newAdress: '+JSON.stringify(user_response));

			refresUser();
		} catch (err) {
			console.log(err.response);
			setFormEditable(true);
		}
	}

	async function refresUser() {
		try {
			await AsyncStorage.setItem(async_key + 'user_birthdate', formDate);
			await AsyncStorage.setItem(async_key + 'user_type_document', formType);
			await AsyncStorage.setItem(async_key + 'user_document', formCpf);
			await AsyncStorage.setItem(async_key + 'user_gender', formGener);

			const user_data = {
				id: user.id,
				name: user.name,
				email: user.email,
				document: formCpf,
				type_document: formType,
				birthdate: formDate,
				gender: formGener,
				cell_phone: user.cell_phone,
				avatar: user.avatar,
				verify_token: user.verify_token,
				user_organizers: user.user_organizers,
				user_organizers_banks: user.user_organizers_banks,
			};

			signIn(user_data, token);
			removeData();
		} catch (e) {
			console.log('ERROR AsyncStorage save - ', e);
		}
	}

	async function removeData() {
		/* CLEAR AsyncStorage */
		try {
			await AsyncStorage.removeItem(async_key + 'u_formDate');
			await AsyncStorage.removeItem(async_key + 'u_formCpf');
			await AsyncStorage.removeItem(async_key + 'u_formType');
			await AsyncStorage.removeItem(async_key + 'u_formGener');
			await AsyncStorage.removeItem(async_key + 'u_formCep');
			await AsyncStorage.removeItem(async_key + 'u_formEndereco');
			await AsyncStorage.removeItem(async_key + 'u_formNumero');
			await AsyncStorage.removeItem(async_key + 'u_formComplemento');
			await AsyncStorage.removeItem(async_key + 'u_formBairro');
			await AsyncStorage.removeItem(async_key + 'u_formCidade');
			await AsyncStorage.removeItem(async_key + 'u_formEstado');

			navigation.navigate('EventosDetalhes', { event_id: redirectDetails });

		} catch (e) {
			console.log('ERROR AsyncStorage remove - ', e);
		}
	}

	async function startScreen() {
		try {
			const user_id = await AsyncStorage.getItem(async_key + 'user_id');
			if (user_id !== null) { setUserId(user_id); }

			const user_mail = await AsyncStorage.getItem(async_key + 'user_mail');
			if (user_mail !== null) { setUserMail(user_mail); }

			const user_name = await AsyncStorage.getItem(async_key + 'user_name');
			if (user_name !== null) { setUserName(user_name); }

			const user_verify_token = await AsyncStorage.getItem(async_key + 'user_verify_token');
			if (user_verify_token !== null) { setUserVerifyToken(user_verify_token); }


			const u_formDate = await AsyncStorage.getItem(async_key + 'u_formDate');
			if (u_formDate !== null) { setFormDate(u_formDate); }

			const u_formCpf = await AsyncStorage.getItem(async_key + 'u_formCpf');
			if (u_formCpf !== null) { setFormCpf(u_formCpf); }

			const u_formType = await AsyncStorage.getItem(async_key + 'u_formType');
			if (u_formType !== null) { setFormType(u_formType); }

			const u_formGener = await AsyncStorage.getItem(async_key + 'u_formGener');
			if (u_formGener !== null) { setFormGener(u_formGener); }

			const u_formCep = await AsyncStorage.getItem(async_key + 'u_formCep');
			if (u_formCep !== null) { setFormCep(u_formCep); }

			const u_formEndereco = await AsyncStorage.getItem(async_key + 'u_formEndereco');
			if (u_formEndereco !== null) { setFormEndereco(u_formEndereco); }

			const u_formNumero = await AsyncStorage.getItem(async_key + 'u_formNumero');
			if (u_formNumero !== null) { setFormNumero(u_formNumero); }

			const u_formComplemento = await AsyncStorage.getItem(async_key + 'u_formComplemento');
			if (u_formComplemento !== null) { setFormComplemento(u_formComplemento); }

			const u_formBairro = await AsyncStorage.getItem(async_key + 'u_formBairro');
			if (u_formBairro !== null) { setFormBairro(u_formBairro); }

			const u_formCidade = await AsyncStorage.getItem(async_key + 'u_formCidade');
			if (u_formCidade !== null) { setFormCidade(u_formCidade); }

			const u_formEstado = await AsyncStorage.getItem(async_key + 'u_formEstado');
			if (u_formEstado !== null) { setFormEstado(u_formEstado); }

			setFormEditable(true);
		} catch (e) {
			console.log('ERROR AsyncStorage read - ', e);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);
	return <Endform>
		<FormLine>
			<Iconline source={form_cep} />
			<TextInputMask
				style={{ width: '92%' }}
				type={'zip-code'}
				value={formCep}
				placeholder="CEP"
				placeholderTextColor="#6b6b6b"
				onChangeText={(text: React.SetStateAction<string>) => { searchAdress(text); }}
				ref={(ref: boolean | ((prevState: boolean) => boolean)) => setFormCepStatus(ref)}
			/>
		</FormLine>

		<FormTextInput
			editable={formEditable}
			icon={form_end}
			value={formEndereco}
			placeholder='Endereço'
			callback={setFormEndereco}
		/>
		<FormTextInputNumber
			editable={formEditable}
			icon={form_end}
			value={formNumero}
			placeholder='Número'
			callback={setFormNumero}
		/>
		<FormTextInput
			editable={formEditable}
			icon={form_end}
			value={formBairro}
			placeholder='Bairro'
			callback={setFormBairro}
		/>
		<FormTextInput
			editable={formEditable}
			icon={form_cep}
			value={formCidade}
			placeholder='Cidade'
			callback={setFormCidade}
		/>
		<FormDropDownPickerLabel
			label="Estado"
			icon={form_end}
			items={formDataStates}
			defaultValue={formEstado}
			placeholder="Escolha um estado"
			onChangeItem={setFormEstado}
			editable={formEditable}
		/>
		<TollS>
			<Toll>
				<ButtonAux onPress={() => navigation.goBack()} >
					<ButtonAuxLabel>Voltar</ButtonAuxLabel>
				</ButtonAux>
			</Toll>
			<Toll>
				<FormButton
					active={formEditable}
					loader={!formEditable}
					label="Prosseguir"
					navigation={navigation}
					onPress={() =>
						checkFormSave()}
				/>
			</Toll>
		</TollS>
	</Endform>;
};

export default Step2;
