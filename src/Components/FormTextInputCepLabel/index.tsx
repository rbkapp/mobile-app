import React, { useState, useRef } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillIcon,FormLineFillLabel,InputlineFill
} from './styles';

import { TextInputLabelParamList } from '../../../types';

const FormTextInputCnpjLabel: React.FC<TextInputLabelParamList> = (props: TextInputLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>

			<TextInputMask
				style={{paddingHorizontal: 20}}
				placeholderTextColor="#6b6b6b"
				type={'zip-code'}
				value={props.value}
				onChangeText={ props.callback }
				editable={props.editable}
			/>
		</FormLineFill>
	</Container>;
};

export default FormTextInputCnpjLabel;
