import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLine, Iconline, Inputline,
} from './styles';

import { TextInputParamList } from '../../../types';

const FormTextInputCpf: React.FC<TextInputParamList> = (props: TextInputParamList) => {
	return <Container>
		<FormLine>
			<Iconline source={props.icon} />

			<TextInputMask
				type={'cpf'}
				placeholderTextColor="#6b6b6b"
				value={ props.value }
				placeholder='CPF'
				onChangeText={(text: React.SetStateAction<string>) => { props.callback(text); }}
				editable={props.editable}
			/>
		</FormLine>
	</Container>;
};

export default FormTextInputCpf;
