import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

import {
	Loginform, FormLine, Iconline, FormTextLabel, TollS, Toll
} from './styles';

import { Button, ButtonLabel, CheckBox, ButtonAux, ButtonAuxLabel, ViewFullRow, View50, Divider20 } from '../../../Styles';

import FormCheck from '../../../Components/FormCheck';

/* assets */
import form_date from '../../../../assets/images/form_date.png';
import form_cpf from '../../../../assets/images/form_cpf.png';

import { TabsParamList } from '../../../../types';

import Infos from '../../../../constants/Infos';
const async_key = Infos['Key'].AsyncStorage;

import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const Formcadastro = ({ navigation, setTab }: TabsParamList) => {
	const [formEditable, setFormEditable] = useState(true);

  interface IformDataGeners {
    label: string;
    value: string;
  }
  const [formDataGeners, setFormDataGeners] = useState<IformDataGeners[]>([
  	{ label: 'Feminino', value: '1' },
  	{ label: 'Masculino', value: '2', },
  	{ label: 'Não informar', value: '3', },
  ]);

  const [formDate, setFormDate] = useState<string>('');
  const [formCpf, setFormCpf] = useState<string>('');
  const [formType, setFormType] = useState<string>('1');
  const [formGener, setFormGener] = useState<string>('');

  async function checkFormSave() {
  	if (formDate == '') {
  		Alert.alert('Por favor, informe sua data de nascimento!');
  	} else if (formCpf == '') {
  		Alert.alert('Por favor, informe seu CPF!');
  	} else if (formGener == '') {
  		Alert.alert('Por favor, informe uma opção de gênero.');
  	} else {
  		try {
  			await AsyncStorage.setItem(async_key + 'u_formDate', formDate);
  			await AsyncStorage.setItem(async_key + 'u_formCpf', formCpf);
  			await AsyncStorage.setItem(async_key + 'u_formType', formType);
  			await AsyncStorage.setItem(async_key + 'u_formGener', formGener);

  			setTab('step2');
  		} catch (e) {
  			console.log('ERROR AsyncStorage save - ', e);
  		}
  	}
  }

  async function startScreen() {
  	try {
  		const u_formDate = await AsyncStorage.getItem(async_key + 'u_formDate');
  		if (u_formDate !== null) { setFormDate(u_formDate); }

  		const u_formCpf = await AsyncStorage.getItem(async_key + 'u_formCpf');
  		if (u_formCpf !== null) { setFormCpf(u_formCpf); }

  		const u_formType = await AsyncStorage.getItem(async_key + 'u_formType');
  		if (u_formType !== null) { setFormType(u_formType); }

  		const u_formGener = await AsyncStorage.getItem(async_key + 'u_formGener');
  		if (u_formGener !== null) { setFormGener(u_formGener); }

  		setFormEditable(true);
  	} catch (e) {
  		console.log('ERROR AsyncStorage read - ', e);
  	}
  }

  useEffect(() => {
  	startScreen();
  }, []);

  return <Loginform>
  	<FormLine>
  		<Iconline source={form_date} />
  		<TextInputMask
  			type={'custom'}
  			options={{ mask: '99/99/9999' }}
  			value={formDate}
  			placeholder="Data de nascimento"
  			placeholderTextColor="#6b6b6b"
  			onChangeText={(text: React.SetStateAction<string>) => { setFormDate(text); }}
  		/>
  	</FormLine>

  	<Divider20 />
  	<FormTextLabel>Escolha um tipo de identificação</FormTextLabel>

  	<ViewFullRow>
  		<View50>
  			<CheckBox onPress={() => setFormType('1')}>
  				<FormCheck active={formType == '1' ? true : false} value='CPF'></FormCheck>
  			</CheckBox>
  		</View50>
  		<View50>
  			<CheckBox onPress={() => setFormType('2')}>
  				<FormCheck active={formType == '2' ? true : false} value='CNPJ'></FormCheck>
  			</CheckBox>
  		</View50>
  	</ViewFullRow>
  	{formType == '1' ? (
  		<FormLine>
  			<Iconline source={form_cpf} />
  			<TextInputMask
  				type={'cpf'}
  				value={formCpf}
  				placeholder="CPF"
  				placeholderTextColor="#6b6b6b"
  				onChangeText={(text: React.SetStateAction<string>) => { setFormCpf(text); }}
  			/>
  		</FormLine>
  	) : (
  		<FormLine>
  			<Iconline source={form_cpf} />
  			<TextInputMask
  				type={'cnpj'}
  				value={formCpf}
  				placeholder="CNPJ"
  				placeholderTextColor="#6b6b6b"
  				onChangeText={(text: React.SetStateAction<string>) => { setFormCpf(text); }}
  			/>
  		</FormLine>
  	)}
  	<Divider20 />
  	<DropDownPicker
  		items={formDataGeners}
  		defaultValue={formGener}
  		placeholder="Escolha um gênero"
  		containerStyle={{ height: 46 }}
  		style={{ backgroundColor: ColorTheme.Branco, borderColor: ColorTheme.Gray1, borderWidth: 2 }}
  		itemStyle={{ justifyContent: 'flex-start' }}
  		dropDownStyle={{ backgroundColor: ColorTheme.Branco }}
  		onChangeItem={item => setFormGener(item.value)}
  	/>

  	<TollS>
  		<Toll>
  			<ButtonAux onPress={() => navigation.goBack()} >
  				<ButtonAuxLabel>Voltar</ButtonAuxLabel>
  			</ButtonAux>
  		</Toll>
  		<Toll>
  			<Button onPress={() => checkFormSave()} >
  				<ButtonLabel>Prosseguir</ButtonLabel>
  			</Button>
  		</Toll>
  	</TollS>
  </Loginform>;
};

export default Formcadastro;
