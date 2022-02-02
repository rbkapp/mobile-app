import React from 'react';

import {
	Loader
} from './styles';

import {
	Button, ButtonLabel
} from '../../Styles';

import { FormButtonParamList } from '../../../types';

import preloader from '../../../assets/images/preloader_pinkBG.gif';

const FormButton: React.FC<FormButtonParamList> = (props: FormButtonParamList) => {
	return <Button onPress={props.active ? props.onPress : null}>
		{
			props.loader ? (<>
				<Loader source={preloader} />
			</>) : (<>
				<ButtonLabel>
					{props.label}
				</ButtonLabel>
			</>)
		}
	</Button>;
};

export default FormButton;
