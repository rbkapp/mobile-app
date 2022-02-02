import React, {useState} from 'react';

import {
	Container,
	FormLine, Iconline, Inputpassline,Btnpass,Iconpass
} from './styles';

import { TextInputLabelParamList } from '../../../types';

import form_view from '../../../assets/images/form_view.png';

const FormTextInputLabel: React.FC<TextInputLabelParamList> = (props: TextInputLabelParamList) => {
	const [passView, setPassView] = useState<boolean>(false);

	return <Container>
		<FormLine>
			<Iconline source={props.icon} />
			<Inputpassline
				value={props.value}
				placeholderTextColor="#6b6b6b"
				onChangeText={(myText: any) => props.callback(myText)}
				placeholder={props.placeholder}
				secureTextEntry={passView}
				editable={props.editable}
			/>
			<Btnpass onPress={() => { passView ? setPassView(false) : setPassView(true); }} >
				<Iconpass source={ form_view } />
			</Btnpass>
		</FormLine>
	</Container>;
};

export default FormTextInputLabel;
