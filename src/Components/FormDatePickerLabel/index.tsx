import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillLabel, FormLineFillIcon,
} from './styles';

import { TextInputLabelParamList } from '../../../types';

const FormDatePickerLabel: React.FC<TextInputLabelParamList> = (props: TextInputLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>
			<TextInputMask
				style={{paddingHorizontal: 20}}
				type={'datetime'}
				placeholderTextColor="#6b6b6b"
				options={{ format: 'DD/MM/YYYY' }}
				value={props.value}
				placeholder={props.placeholder}
				onChangeText={(text: React.SetStateAction<string>) => { props.callback(text); }}
				editable={props.editable}
			/>
		</FormLineFill>
	</Container>;
};

export default FormDatePickerLabel;
