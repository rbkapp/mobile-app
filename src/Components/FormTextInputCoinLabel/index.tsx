import React, { useState, useRef } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillIcon,FormLineFillLabel,InputlineFill
} from './styles';

import { TextInputCoinLabelParamList } from '../../../types';

const FormTextInputCoinLabel: React.FC<TextInputCoinLabelParamList> = (props: TextInputCoinLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>

			<TextInputMask
				style={{paddingHorizontal: 20}}
				placeholderTextColor="#6b6b6b"
				type={'money'}
				includeRawValueInChangeText
				options={{
					precision: 2,
					separator: ',',
					delimiter: '.',
					unit: 'R$ ',
					suffixUnit: ''
				}}
				value={props.value}
				onChangeText={ props.callback }
				editable={props.editable}
			/>
		</FormLineFill>
	</Container>;
};

export default FormTextInputCoinLabel;
