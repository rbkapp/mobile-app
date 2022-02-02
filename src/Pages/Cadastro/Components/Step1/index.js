import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { StyleSheet } from 'react-native';


import { 
    Loginform, FormLine, Iconline, Inputline,
    FormLineFill, FormLineFillTitle, FormLineFillIcon, FormLineFillLabel, InputlineFill,
    FormSelect,    
} from './styles';


/* assets */
import form_mail from './assets/form_mail.png';
import form_phone from './assets/form_phone.png';
import form_date from './assets/form_date.png';
import form_cpf from './assets/form_cpf.png';
import form_user from './assets/form_user.png';


const Formcadastro = ( setTab ) => {
    return <Loginform>
        <FormLineFill>
            <FormLineFillTitle>
                <FormLineFillIcon source={form_user} />
                <FormLineFillLabel>Nome completo</FormLineFillLabel>
            </FormLineFillTitle>

            <InputlineFill
                value=''
                placeholder="André Romeu Marques"
            />
        </FormLineFill>

        <FormLineFill>
            <FormLineFillTitle>
                <FormLineFillIcon source={form_mail} />
                <FormLineFillLabel>E-mail</FormLineFillLabel>
            </FormLineFillTitle>

            <InputlineFill
                value=''
                placeholder="andre_romeu@gmail.com"
            />
        </FormLineFill>

        <FormLineFill>
            <FormLineFillTitle>
                <FormLineFillIcon source={form_phone} />
                <FormLineFillLabel>Telefone</FormLineFillLabel>
            </FormLineFillTitle>

            <InputlineFill
                value=''
                placeholder="(13) 99191-8921"
            />
        </FormLineFill>

        <FormLine>
            <Iconline source={form_date} />
            <Inputline
                value=''
                placeholder="Data de nascimento"
            />
        </FormLine>

        <FormLine>
            <Iconline source={form_cpf} />
            <Inputline
                value=''
                placeholder="CPF"
            />
        </FormLine>

        <FormSelect>
            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => console.log(value)}
                placeholder={{ label: 'Gênero', value: '', }}
                items={[
                    { label: 'Feminino', value: '1' },
                    { label: 'Masculino', value: '2' },
                    { label: 'Não informar', value: '3' },
                ]}
            />
        </FormSelect>
    </Loginform>;
}

export default Formcadastro;


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderWidth: 0,
      borderRadius: 4,
      color: '#A7A8B1',
      paddingRight: 10,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderWidth: 0,
      borderRadius: 8,
      color: '#A7A8B1',
      paddingRight: 10,
    },
  });