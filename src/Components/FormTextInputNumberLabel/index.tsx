import React from 'react';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillIcon,FormLineFillLabel,InputlineFill
} from './styles';

import { TextInputNumberLabelParamList } from '../../../types';

const FormTextInputLabel: React.FC<TextInputNumberLabelParamList> = (props: TextInputNumberLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>

			<InputlineFill
				value={props.value}
				placeholderTextColor="#6b6b6b"
				onChangeText={(myText: string) => props.callback(myText)}
				placeholder={props.placeholder}
				editable={props.editable}
				keyboardType="numeric"
			/>
		</FormLineFill>
	</Container>;
};

export default FormTextInputLabel;
