import React from 'react';

import {
	UrlItem, UrlItemValue, UrlItemBtn, UrlItemBtnIcon,
} from './styles';

import { FormInputFileParamList } from '../../../types';

const FormInputFile: React.FC<FormInputFileParamList> = (props: FormInputFileParamList) => {
	return <UrlItem>
		<UrlItemValue>{props.label}</UrlItemValue>
		<UrlItemBtn
			onPress={() => props.onPress() }
		>
			<UrlItemBtnIcon source={props.icon}/>
		</UrlItemBtn>
	</UrlItem>;
};

export default FormInputFile;
