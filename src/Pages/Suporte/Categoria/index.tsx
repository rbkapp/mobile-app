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
	SuporteItem, SuporteItemIconLabel, SuporteItemIcon, SuporteItemLabel, SuporteArrow,
} from '../../../Styles';

import HeaderLogin from '../../../Components/HeaderLogin';
import ScreenLoader from '../../../Components/ScreenLoader';
import Footer from '../../../Components/Footer';
import FormDropDownPicker from '../../../Components/FormDropDownPicker';
import head_search_Icon from '../../../../assets/images/head_search_Icon.png';
import arrow_right_icon from '../../../../assets/images/arrow_right_icon.png';
import suporte_icon from '../../../../assets/images/suporte_icon.png';
import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';
import Infos from '../../../../constants/Infos';

import {
	RootStackParamList,
} from '../../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PainelCheck'>;
interface Props { navigation: NavigationProp, route: any; }

const DataSuportCategories = Datas['SuportCategories'];
const ColorTheme = Colors['Theme'];
const eventxProdApi = Infos['Url'].EventxProdApi;

const SuporteCategoria = ({ navigation, route }: Props) => {
	const { user, token, signed } = useContext(AuthContext);

	const [formEditable, setFormEditable] = useState<boolean>(true);
	const [formLoad, setFormLoad] = useState<boolean>(true);
	const [faqData, setFaqData] = useState([]);
	const [userBusca, setUserBusca] = useState<string>('');
	const [formCategory, setFormCategory] = useState<string>(route.params.category_id);

	const searchSuport = () => {};

	async function startScreen() {
		axios.get(eventxProdApi+'/faq', {
			auth: {
				username: 'eb5f49b3d3cfeb8eb2a0bed2457c8615',
				password: '96926e5e9b9331945a9f3be377681a7f'
			}
		}).then(res => {
			setFaqData(res.data.data);
			setFormLoad(false);
			//console.log('res: ' + JSON.stringify(res.data.data))
		}).catch(err => console.log(err));
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<ScreenLoader active={formLoad} />
			<ViewScreen>
				<ViewScreenCont>
					<ScreenContTitle>Central de ajuda - {DataSuportCategories[parseInt(formCategory) - 1].label}</ScreenContTitle>

					<LineDivider />
					<ScreenContLabel>CATEGORIA</ScreenContLabel>
					<FormDropDownPicker
						items={DataSuportCategories}
						defaultValue={route.params.category_id}
						placeholder="Escolha uma categoria"
						onChangeItem={setFormCategory}
						editable={formEditable}
					/>
					<SearchTag>
						<SearcInput
							value={userBusca}
							onChangeText={myText => setUserBusca(myText)}
							placeholder={'Pesquise em ' + DataSuportCategories[parseInt(formCategory) - 1].label + '...'}
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
								faqData.map((item, index) => {
									if (item.category == formCategory) {
										return <SuporteCall
											key={index}
											onPress={() => navigation.navigate('SuporteDetalhes', { suportData: item })}
										>
											<SuporteCallLabel>{item.title}</SuporteCallLabel>
											<SuporteCallArrow source={arrow_right_icon} />
										</SuporteCall>;
									}
								})
							}
						</>) : (<>
							<ScreenContLabel>RESULTADOS:</ScreenContLabel>
							{
								faqData.filter(itemFilter => itemFilter.title.toLowerCase().indexOf(userBusca.toLowerCase()) !== -1 == true).map((item2, index2) => {
									if (item2.category == formCategory) {
										return <SuporteCall
											key={index2}
											onPress={() => navigation.navigate('SuporteDetalhes', { suportData: item2 })}
										>
											<SuporteCallLabel>{item2.title}</SuporteCallLabel>
											<SuporteCallArrow source={arrow_right_icon} />
										</SuporteCall>;
									}
								})
							}
						</>)
					}
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
export default SuporteCategoria;
