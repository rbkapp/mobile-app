import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLine, Iconline, Inputline,
} from './styles';

import { TextInputParamList } from '../../../types';

const FormTextInput: React.FC<TextInputParamList> = (props: TextInputParamList) => {
	return <Container>
		<FormLine>
			<Iconline source={props.icon} />

			<TextInputMask
				type={ 'datetime' }
				options={{ format: 'HH:mm' }}
				placeholderTextColor="#6b6b6b"
				value={ props.value }
				placeholder={ props.placeholder }
				onChangeText={(text: React.SetStateAction<string>) => { props.callback(text); }}
				editable={props.editable}
			/>
		</FormLine>
	</Container>;
};

export default FormTextInput;
