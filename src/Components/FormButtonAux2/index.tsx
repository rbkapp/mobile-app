import React from 'react';

import {
	Loader
} from './styles';

import {
	ButtonAux2, ButtonAuxLabel2
} from '../../Styles';

import { FormButtonParamList } from '../../../types';

import preloader from '../../../assets/images/preloader_pinkBG.gif';

const FormButton: React.FC<FormButtonParamList> = (props: FormButtonParamList) => {
	return <ButtonAux2
		onPress={props.active ? props.onPress : null}
		style={{ alignItems: 'center' }}
	>
		{props.loader ? (<>
			<Loader source={preloader} />
		</>) : (<>
			<ButtonAuxLabel2>
				{props.label}
			</ButtonAuxLabel2>
		</>)}
	</ButtonAux2>;
};

export default FormButton;
