import React from 'react';

import {
	Container,Inputline,
} from './styles';

import { TextAreaParamList } from '../../../types';

const FormTextInput: React.FC<TextAreaParamList> = (props: TextAreaParamList) => {
	return <Container>
		<Inputline
			value={props.value}
			placeholderTextColor="#6b6b6b"
			onChangeText={(myText: string) => props.callback(myText)}
			placeholder={props.placeholder}
			numberOfLines={3}
			multiline={true}
			editable={props.editable}
		/>
	</Container>;
};

export default FormTextInput;
