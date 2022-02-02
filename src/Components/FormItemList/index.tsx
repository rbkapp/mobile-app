import React from 'react';
import {Alert} from 'react-native';

import {
	Container, ItemList, ItemListIcon, ItemListInfos, ItemListInfosTitle, ItemListInfosDescription,
} from './styles';

import {
	Button, ButtonLabel
} from '../../Styles';

import { FormItemListParamList } from '../../../types';

const FormItemList: React.FC<FormItemListParamList> = (props: FormItemListParamList) => {
	return <Container>
		<ItemList
			onPress={ () => props.onPress() } active={props.active}>
			<ItemListIcon source={props.icon} active={props.active} />

			<ItemListInfos>
				<ItemListInfosTitle active={props.active}>{props.label}</ItemListInfosTitle>
				<ItemListInfosDescription active={props.active}>{props.description}</ItemListInfosDescription>
			</ItemListInfos>
		</ItemList>
	</Container>;
};

export default FormItemList;
