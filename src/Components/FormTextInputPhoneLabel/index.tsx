import React, { useState, useRef } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillIcon,FormLineFillLabel,InputlineFill
} from './styles';

import { TextInputLabelParamList } from '../../../types';

const FormTextInputCpfLabel: React.FC<TextInputLabelParamList> = (props: TextInputLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>

			<TextInputMask
				style={{paddingHorizontal: 20}}
				type={'cel-phone'}
				placeholderTextColor="#6b6b6b"
				options={{
					maskType: 'BRL',
					withDDD: true,
					dddMask: '(99) '
				}}
				value={props.value}
				onChangeText={ props.callback }
				editable={props.editable}
				placeholder='Telefone'
			/>
		</FormLineFill>
	</Container>;
};

export default FormTextInputCpfLabel;
