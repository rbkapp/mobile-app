import React from 'react';

import {
	Container,
	FormLine, Iconline, Inputline,
} from './styles';

import { TextInputParamList } from '../../../types';

const FormTextInput: React.FC<TextInputParamList> = (props: TextInputParamList) => {
	return <Container>
		<FormLine>
			{
				props.icon ? (<Iconline source={props.icon} />) : null
			}			
			<Inputline
				value={props.value}
				placeholderTextColor="#6b6b6b"
				onChangeText={(myText: string) => props.callback(myText)}
				placeholder={props.placeholder}
				editable={props.editable}
			/>
		</FormLine>
	</Container>;
};

export default FormTextInput;
