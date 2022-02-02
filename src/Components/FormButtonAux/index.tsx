import React from 'react';

import {
	Loader
} from './styles';

import {
	ButtonAux, ButtonAuxLabel
} from '../../Styles';

import { FormButtonParamList } from '../../../types';

import preloader from '../../../assets/images/preloader_pinkBG.gif';

const FormButton: React.FC<FormButtonParamList> = (props: FormButtonParamList) => {
	return <ButtonAux
		onPress={props.active ? props.onPress : null}
		style={{ alignItems: 'center' }}
	>
		{props.loader ? (<>
			<Loader source={preloader} />
		</>) : (<>
			<ButtonAuxLabel>
				{props.label}
			</ButtonAuxLabel>
		</>)}
	</ButtonAux>;
};

export default FormButton;
