import React from 'react';

import {
	Container, Loader, LoaderInfo,
} from './styles';

import { ScreenLoaderParamList } from '../../../types';

import pre_loader from '../../../assets/images/preloader_big.gif';

const ScreenLoader: React.FC<ScreenLoaderParamList> = (props: ScreenLoaderParamList) => {
	return<>
		{props.active ? ( <Container>
			<Loader source={pre_loader}/>
			<LoaderInfo>{props.label}</LoaderInfo>
		</Container> ) : (null) }
	</>;
};

export default ScreenLoader;
