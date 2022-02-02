import React, { useState, useCallback, useRef, useContext } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import cep from 'cep-promise';

import {
	Container, PerfilCont, ScreenTitle, DadosCont,
	EnderecoPadrao, EnderecoPadraoLabel, EnderecoPadraoSwitch,
} from './styles';

import {
	Divider10, Divider35,
	ButtonAux, ButtonAuxLabel,
} from '../../../../Styles';

/* global components*/
import HeaderIntPainel from '../../../../Components/HeaderIntPainel';
import FormTextInput from '../../../../Components/FormTextInput';
import FormTextInputCep from '../../../../Components/FormTextInputCep';
import FormDropDownPickerLabel from '../../../../Components/FormDropDownPickerLabel';
import FormButton from '../../../../Components/FormButton';
import Footer from '../../../../Components/Footer';

/* assets */
import form_info from '../../../../../assets/images/form_info.png';
import form_cep from '../../../../../assets/images/form_cep.png';
import form_end from '../../../../../assets/images/form_end.png';

import api from '../../../../Services/api';
import AuthContext from '../../../../Contexts/auth';
import { RootStackParamList, DropDownParamList } from '../../../../../types';
import Datas from '../../../../../constants/Datas';
import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];
const DataStates = Datas['States'];

type NavigationProp = StackNavigationProp<RootStackParamList, 'PerfilEnderecosNovo'>;
interface Props { navigation: NavigationProp, route: any; }

const PerfilEnderecosNovo = ({ navigation, route }: Props) => {
	const { user, token } = useContext(AuthContext);

	const ref: any = React.useRef(null);

	const [formDataStates, setFormDataStates] = useState<DropDownParamList[]>(DataStates);

	const [formEditable, setFormEditable] = useState<boolean>(true);
	const [formLoad, setFormLoad] = useState<boolean>(false);

	const [formName, setFormName] = useState<string>('');
	const [formZipcode, setFormZipcode] = useState<string>('');
	const [formStreet, setFormStreet] = useState<string>('');
	const [formNumber, setFormNumber] = useState<string>('');
	const [formComplement, setFormComplement] = useState<string>('');
	const [formDistrict, setFormDistrict] = useState<string>('');
	const [formCity, setFormCity] = useState<string>('');
	const [formState, setFormState] = useState<string>('');
	const [formCountry, setFormCountry] = useState<string>('BR');

	const [formDefault, setFormDefault] = useState<boolean>(true);

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
						setFormStreet(response.street);
						setFormDistrict(response.neighborhood);
						setFormCity(response.city);
						setFormState(response.state);
					});
			} catch (e) {
				//console.log(e);
			}
		}
		setFormZipcode(text);
	}

	async function checkFormSave() {
		if (formName == '') {
			Alert.alert('Por favor, digite um nome para este endereço!');
			ref.current?.scrollTo({ y: 50, animated: true, });

		} else if (formStreet == '') {
			Alert.alert('Por favor, digite o endereço!');
			ref.current?.scrollTo({ y: 200, animated: true, });

		} else if (formNumber == '') {
			Alert.alert('Por favor, digite o número do endereço!');
			ref.current?.scrollTo({ y: 300, animated: true, });

		} else if (formDistrict == '') {
			Alert.alert('Por favor, digite o bairro do endereço!');
			ref.current?.scrollTo({ y: 500, animated: true, });

		} else if (formCity == '') {
			Alert.alert('Por favor, digite a cidade do endereço!');
			ref.current?.scrollTo({ y: 600, animated: true, });

		} else if (formState == '') {
			Alert.alert('Por favor, selecione o estado do endereço!');
			ref.current?.scrollTo({ y: 700, animated: true, });
		} else {
			/* RUM edit API */
			setFormEditable(false);
			setFormLoad(true);

			try {
				const credentials = {
					user_id: user.id,
					address_title: formName,
					address_zipcode: formZipcode,
					address_street: formStreet,
					address_country: formCountry,
					address_district: formDistrict,
					address_number: formNumber,
					address_state: formState,
					address_city: formCity,
					address_complement: formComplement,
					default: formDefault,
					//status: true,
				};
				api.defaults.headers.authorization = `Bearer ${token}`;

				const response = await api.post('/users/add-address', credentials);
				const user_response = response.data;
				//console.log(JSON.stringify(user_response));

				navigation.navigate('PerfilEnderecos');
			} catch (err) {
				console.log(err.response);
				setFormEditable(true);
				setFormLoad(false);
			}
		}
	}

	return <SafeAreaView>
		<ScrollView ref={ref}>
			<Container>
				<PerfilCont>
					<ScreenTitle>Novo endereço</ScreenTitle>
					<DadosCont>
						<FormTextInput icon={form_info} placeholder='Título do endereço' value={formName} callback={setFormName} editable={formEditable} />
						<FormTextInputCep icon={form_cep} placeholder='CEP' value={formZipcode} callback={searchAdress} editable={formEditable} />
						<FormTextInput icon={form_end} placeholder='Endereço' value={formStreet} callback={setFormStreet} editable={formEditable} />
						<FormTextInput icon={form_end} placeholder='Número' value={formNumber} callback={setFormNumber} editable={formEditable} />
						<FormTextInput icon={form_end} placeholder='Complemento' value={formComplement} callback={setFormComplement} editable={formEditable} />
						<FormTextInput icon={form_end} placeholder='Bairro' value={formDistrict} callback={setFormDistrict} editable={formEditable} />
						<FormTextInput icon={form_cep} placeholder='Cidade' value={formCity} callback={setFormCity} editable={formEditable} />
						<FormDropDownPickerLabel
							label="Estado"
							icon={form_cep}
							items={formDataStates}
							defaultValue={formState}
							placeholder="Escolha um estado"
							onChangeItem={setFormState}
							editable={formEditable}
						/>
						<EnderecoPadrao>
							<EnderecoPadraoLabel>Tornar meu endereço padrão</EnderecoPadraoLabel>
							<EnderecoPadraoSwitch
								trackColor={{ false: ColorTheme.Gray0, true: ColorTheme.Gray1 }}
								thumbColor={formDefault ? ColorTheme.Rosa : ColorTheme.Gray1}
								ios_backgroundColor={ColorTheme.Gray3}
								onValueChange={() => setFormDefault(previousState => !previousState)}
								value={formDefault}
							/>
						</EnderecoPadrao>

						{formEditable == true && formLoad == false ? (<>
							<ButtonAux onPress={() => navigation.goBack()} >
								<ButtonAuxLabel>Cancelar</ButtonAuxLabel>
							</ButtonAux>
						</>) : (null)}

						{formEditable == true || formLoad == true ? (<>
							<Divider10 /><Divider10 />
							<FormButton label="Salvar" onPress={() => checkFormSave()} active={formEditable} loader={formEditable ? false : true} navigation={navigation} />
						</>) : (null)}
					</DadosCont>
				</PerfilCont>
				<Footer></Footer>
			</Container>
		</ScrollView>

		<HeaderIntPainel navigation={navigation} route={route} />
	</SafeAreaView>;
};

export default PerfilEnderecosNovo;
