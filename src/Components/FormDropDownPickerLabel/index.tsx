import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
	Container,
	FormLineFill, FormLineFillTitle, FormLineFillIcon,FormLineFillLabel,
} from './styles';

import { DropDownPickerLabelParamList } from '../../../types';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const FormTextInputCnpjLabel: React.FC<DropDownPickerLabelParamList> = (props: DropDownPickerLabelParamList) => {
	return <Container>
		<FormLineFill>
			<FormLineFillTitle>
				<FormLineFillIcon source={props.icon} />
				<FormLineFillLabel>{props.label}</FormLineFillLabel>
			</FormLineFillTitle>

			<DropDownPicker
				items={props.items}
				defaultValue={props.defaultValue}
				placeholder={props.placeholder}
				containerStyle={{ height: 46 }}
				style={{ backgroundColor: ColorTheme.Branco, borderColor: ColorTheme.Gray1, borderWidth: 2, borderRadius: 32, paddingHorizontal: 20 }}
				itemStyle={{ justifyContent: 'flex-start' }}
				dropDownStyle={{ backgroundColor: ColorTheme.Branco }}
				onChangeItem={item => props.onChangeItem(item.value)}
				disabled={props.editable}
			/>
		</FormLineFill>
	</Container>;
};

export default FormTextInputCnpjLabel;
