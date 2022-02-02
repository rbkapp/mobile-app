import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	ViewScreen, ViewScreenCont, ScreenContTitle,
	ScreenSuportTitle, ScreenSuportSubTitle, ScreenSuportLineDivider, ScreenSuportCont, ScreenSuportLabel,
	ScreenContLabel, LineDivider,
	SuporteItem, SuporteItemIconLabel, SuporteItemIcon, SuporteItemLabel, SuporteArrow,
	LikeItem, LikeButton, LikeButtonIcon,
} from '../../../Styles';

import HeaderLogin from '../../../Components/HeaderLogin';
import Footer from '../../../Components/Footer';
import like_icon from '../../../../assets/images/like_icon.png';
import nolike_icon from '../../../../assets/images/nolike_icon.png';
import arrow_right_icon from '../../../../assets/images/arrow_right_icon.png';
import suporte_icon from '../../../../assets/images/suporte_icon.png';

import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';
const DataSuportCategories = Datas['SuportCategories'];

import {
	RootStackParamList,
} from '../../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PainelCheck'>;
interface Props { navigation: NavigationProp, route: any; }

const ColorTheme = Colors['Theme'];

const SuporteDetalhes = ({ navigation, route }: Props) => {
	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [suportData, setSuportData] = useState(route.params.suportData);

	return <SafeAreaView>
		<ScrollView>
			<ViewScreen>
				<ViewScreenCont>
					<ScreenContTitle>Central de ajuda - {DataSuportCategories[suportData.category -1].label}</ScreenContTitle>
					<ScreenSuportTitle>{suportData.title}</ScreenSuportTitle>
					<ScreenSuportSubTitle><MaterialCommunityIcons name="clock-outline" /> 12/03/21 - Atualizado</ScreenSuportSubTitle>
					<ScreenSuportLineDivider />
					<ScreenSuportCont>{suportData.description}</ScreenSuportCont>

					<LineDivider />
					<ScreenContLabel>FALE CONOSCO</ScreenContLabel>
					<SuporteItem onPress={() =>  navigation.navigate('SuporteNovo')}>
						<SuporteItemIconLabel>
							<SuporteItemIcon source={suporte_icon} />
							<SuporteItemLabel>Suporte</SuporteItemLabel>
						</SuporteItemIconLabel>
						<SuporteArrow source={arrow_right_icon} />
					</SuporteItem>
				</ViewScreenCont>
				<Footer />
			</ViewScreen>
		</ScrollView>

		<HeaderLogin navigation={navigation} route={route} />
	</SafeAreaView>;
};
export default SuporteDetalhes;
