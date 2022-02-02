import React, { useState } from 'react';

import {
	Container,
	IngressosItem, IngressosItemHead, ItemHeadIcon, ItemHeadTitles, ItemHeadTitlesName, ItemHeadTitlesValue, ItemHeadArrow,
	IngressosCont, IngressosInfos, ItemHeadIconTitle, InfosList, InfosLine0, InfosLine1, InfosAvatar,
} from './styles';

import { ItemBudGetParamList } from '../../../../../types';

import icon_ticket from '../../../../../assets/images/icon_ticket.png';
import arrow_top_icon from '../../../../../assets/images/arrow_top_icon.png';
import arrow_bottom_icon from '../../../../../assets/images/arrow_bottom_icon.png';
import budget_foto from '../../../../../assets/images/budget_foto.png';

import { Button, ButtonLabel, LineDivider } from '../../../../Styles';

import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const ItemIngresso: React.FC<ItemBudGetParamList> = (props: ItemBudGetParamList) => {
	const [tab, setTab] = useState(false);

	return <IngressosItem>
		<IngressosItemHead
			style={{ backgroundColor: tab ? ColorTheme.Gray0 : ColorTheme.Branco }}
			onPress={() => { tab ? setTab(false) : setTab(true); }}
		>
			<ItemHeadIconTitle>
				<ItemHeadIcon source={icon_ticket} />
				<ItemHeadTitles>
					<ItemHeadTitlesName>{props.budgetData.description}</ItemHeadTitlesName>
					<ItemHeadTitlesValue>{props.budgetData.model} {props.budgetData.color}</ItemHeadTitlesValue>
				</ItemHeadTitles>
			</ItemHeadIconTitle>
			<ItemHeadArrow source={tab ? arrow_top_icon : arrow_bottom_icon} />
		</IngressosItemHead>

		{tab ? (<IngressosCont>
			<IngressosInfos>
				<InfosList>
					<InfosLine0>Busco {props.budgetData.session}</InfosLine0>
					<InfosLine1>{props.budgetData.description}</InfosLine1>
					<InfosLine0>{props.budgetData.brand} - {props.budgetData.model} {props.budgetData.year}</InfosLine0>
					<InfosLine1>{props.budgetData.color}</InfosLine1>
				</InfosList>

				<InfosAvatar source={ {uri: props.budgetData.avatar} } />
			</IngressosInfos>

			<LineDivider />

			<Button onPress={() => props.navigation.navigate('CotacoesDetalhes', { budgetData: props.budgetData})}>
				<ButtonLabel>Ver ofertas </ButtonLabel>
			</Button>
		</IngressosCont>) : (null)}
	</IngressosItem>;
};

export default ItemIngresso;
