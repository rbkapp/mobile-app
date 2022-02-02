import React from 'react';

import {
	Container,
	FormLine, Iconline, Inputline,
} from './styles';

import { TextInputParamList } from '../../../types';

const FormTextInputNumber: React.FC<TextInputParamList> = (props: TextInputParamList) => {
	return <Container>
		<FormLine>
			<Iconline source={props.icon} />

			<Inputline
				placeholderTextColor="#6b6b6b"
				value={props.value}
				onChangeText={(myText: string) => props.callback(myText)}
				placeholder={props.placeholder}
				editable={props.editable}
				keyboardType="numeric"
			/>
		</FormLine>
	</Container>;
};

export default FormTextInputNumber;
