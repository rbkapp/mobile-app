import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';

import {
	Container,
	FormLine, Iconline, Inputline,
} from './styles';

import { DateTimePickerParamList } from '../../../types';

const FormTextInput: React.FC<DateTimePickerParamList> = (props: DateTimePickerParamList) => {
	const [formDate, setFormDate] = useState(new Date());

	const [cpPickerShow, setCPPickerShow] = useState(false);

	return <Container>
		<FormLine>
			<Iconline source={props.icon} />

			<DatePicker
				testID="dateTimePicker"
				mode="date"
				customStyles={{dateInput: { borderColor: '#fff' }}}
				showIcon={false}
				animationType={'fade'}
				date={props.date}
				format="DD/MM/YYYY"
				onDateChange={(date: any) => { props.callback(date); }}
				editable={props.editable}
			/>
		</FormLine>
	</Container>;
};

export default FormTextInput;
