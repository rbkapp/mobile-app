import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

import {
	ViewScreen, ViewScreenCont, ScreenContTitle,
	SearchTag, SearcInput, SearchBtn, SearchBtnIcon,
	ScreenContLabel, Divider20, LineDivider,
	SuporteCall, SuporteCallLabel, SuporteCallArrow,
	SuporteCategories, SuporteCategoriesLine, SuporteCategory, SuporteCategoryIcon, SuporteCategoryLabel,
	SuporteItem, SuporteItemIconLabel, SuporteItemIcon, SuporteItemLabel, SuporteArrow,
} from '../../Styles';

import HeaderLogin from '../../Components/HeaderLogin';
import Footer from '../../Components/Footer';
import ScreenLoader from '../../Components/ScreenLoader';
import head_search_Icon from '../../../assets/images/head_search_Icon.png';
import arrow_right_icon from '../../../assets/images/arrow_right_icon.png';
import cart_pink_icon from '../../../assets/images/cart_pink_icon.png';
import card_pink_icon from '../../../assets/images/card_pink_icon.png';
import money_pink_icon from '../../../assets/images/antecipate_icon.png';
import ticket_pink_icon from '../../../assets/images/ticket_pink_icon.png';
import calendar_pink_icon from '../../../assets/images/calendar_pink_icon.png';
import user_pink_icon from '../../../assets/images/user_pink_icon.png';
import suporte_icon from '../../../assets/images/suporte_icon.png';

import AuthContext from '../../Contexts/auth';
import Colors from '../../../constants/Colors';
import Infos from '../../../constants/Infos';

import {
	RootStackParamList,
} from '../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Suporte'>;
interface Props { navigation: NavigationProp, route: any; }

const ColorTheme = Colors['Theme'];
const eventxProdApi = Infos['Url'].EventxProdApi;

const Suporte = ({ navigation, route }: Props) => {
	const { user, token, signed } = useContext(AuthContext);
	const [formLoad, setFormLoad] = useState<boolean>(true);
	const [faqData, setFaqData] = useState([]);
	const [userBusca, setUserBusca] = useState('');
	const searchSuport = () => {

	};

	async function startScreen() {
		axios.get(eventxProdApi +'/faq', {
			auth: {
				username: 'eb5f49b3d3cfeb8eb2a0bed2457c8615',
				password: '96926e5e9b9331945a9f3be377681a7f'
			}
		}).then(res => {
			setFaqData(res.data.data);
			setFormLoad(false);
			console.log('res: ' + JSON.stringify(res.data.data))
		}).catch(err => console.log(err));
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<ScreenLoader label='Carregando suporte...' active={formLoad} />
			<ViewScreen>
				<ViewScreenCont>
					<ScreenContTitle>Central de ajuda</ScreenContTitle>

					<SearchTag>
						<SearcInput
							value={userBusca}
							onChangeText={myText => setUserBusca(myText)}
							placeholder="Pesquise..."
						></SearcInput>

						<SearchBtn onPress={() => searchSuport()} >
							<SearchBtnIcon source={head_search_Icon} />
						</SearchBtn>
					</SearchTag>
					<Divider20 />
					{
						userBusca == '' ? (<>
							<ScreenContLabel>PERGUNTAS FREQUENTES</ScreenContLabel>
							{
								faqData.slice(0, 4).map((item, index) => {
									return <SuporteCall
										key={index}
										onPress={() => navigation.navigate('SuporteDetalhes', { suportData: item })}
									>
										<SuporteCallLabel>{item.title}</SuporteCallLabel>
										<SuporteCallArrow source={arrow_right_icon} />
									</SuporteCall>;
								})
							}
						</>) : (<>
							<ScreenContLabel>RESULTADOS:</ScreenContLabel>
							{
								faqData.filter(itemFilter => itemFilter.title.toLowerCase().indexOf(userBusca.toLowerCase()) !== -1 == true).map((item2, index2) => {
									return <SuporteCall
										key={index2}
										onPress={() => navigation.navigate('SuporteDetalhes', { suportData: item2 })}
									>
										<SuporteCallLabel>{item2.title}</SuporteCallLabel>
										<SuporteCallArrow source={arrow_right_icon} />
									</SuporteCall>;
								})
							}
						</>)
					}

					<ScreenContLabel>CATEGORIAS</ScreenContLabel>
					<SuporteCategories>
						<SuporteCategoriesLine>
							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '1' })}>
								<SuporteCategoryIcon source={cart_pink_icon} />
								<SuporteCategoryLabel>Compras</SuporteCategoryLabel>
							</SuporteCategory>

							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '2' })}>
								<SuporteCategoryIcon source={card_pink_icon} />
								<SuporteCategoryLabel>Pagamento</SuporteCategoryLabel>
							</SuporteCategory>

							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '3' })}>
								<SuporteCategoryIcon source={money_pink_icon} />
								<SuporteCategoryLabel>Reembolso</SuporteCategoryLabel>
							</SuporteCategory>
						</SuporteCategoriesLine>

						<SuporteCategoriesLine>
							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '4' })}>
								<SuporteCategoryIcon source={ticket_pink_icon} />
								<SuporteCategoryLabel>Ingressos</SuporteCategoryLabel>
							</SuporteCategory>

							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '5' })}>
								<SuporteCategoryIcon source={calendar_pink_icon} />
								<SuporteCategoryLabel>Eventos</SuporteCategoryLabel>
							</SuporteCategory>

							<SuporteCategory onPress={() => navigation.navigate('SuporteCategoria', { category_id: '6' })}>
								<SuporteCategoryIcon source={user_pink_icon} />
								<SuporteCategoryLabel>Minha conta</SuporteCategoryLabel>
							</SuporteCategory>
						</SuporteCategoriesLine>
					</SuporteCategories>

					<LineDivider />
					<ScreenContLabel>FALE CONOSCO</ScreenContLabel>
					<SuporteItem onPress={() => navigation.navigate('SuporteNovo')}>
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
export default Suporte;
