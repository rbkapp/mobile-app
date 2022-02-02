import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
	Container,
	EventIngressos,
} from './styles';

import {
	ScreenContTitle,
	NoResultLabel, NoResultoAvatar, NoResultoAvatarImg, Divider35,
} from '../../../Styles';

import ScreenLoader from '../../../Components/ScreenLoader';
import noresult_eventos from '../../../../assets/images/noresult_eventos.png';
import ItemBudget from './ItemBudget';

import { NavTabParamList } from '../../../../types';
import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Colors from '../../../../constants/Colors';
import getDate from '../../../../hooks/getData';

import database from '../../../config/firebase';

const ColorTheme = Colors['Theme'];
const deviceHeight = Dimensions.get('window').height;

const Tab0 = ({ navigation, route, setTab }: NavTabParamList) => {
	const { token } = useContext(AuthContext);
	const [formEditable, setFormEditable] = useState<boolean>(true);

	const [formLoad, setFormLoad] = useState(true);

	interface IformDataBudGet {
		id: number,
		session: string,
		type: string,
		detalhes: string,
		modelo: string,
		marca: string,
		ano: string,
		cor: string,
		tipo: string,
		sessao: string,
		image: string,

		ofertas: number,
	}

	const [dataBudgets, setDataBudgets] = useState([]);

	let docs = database.firestore().collection('budgets');

	const loadDataBudgets = () => {
		database.collection['budgets'].onSnapshot((query: any[]) => {
			const list: any = [];

			query.forEach(((doc: { data: () => any; }) => {
				list.push(doc.data())
			}))

			setDataBudgets(list);
			
		})
	}

	useEffect(() => {
		database
			.firestore()
			.collection("budgets")
			.onSnapshot( ( snapshot: { docs: any[]; } ) => {
				const listItems: any = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}) )
				setDataBudgets(listItems);
				setFormLoad(false);
			})
	}, [])

	return <SafeAreaView>
		<ScrollView>
			<Container style={{ minHeight: deviceHeight - 190 }}>
				<ScreenContTitle>Cotações em aberto</ScreenContTitle>

				<EventIngressos>
					{dataBudgets.length == 0 ? (<>
						<NoResultoAvatar>
							<NoResultoAvatarImg source={noresult_eventos} />
						</NoResultoAvatar>
						<NoResultLabel>Você ainda não fez solicitações.</NoResultLabel>
					</>) : (
						dataBudgets
						.filter(itemFilter => itemFilter.status == '1')
						.map((item: any, index: number) => {
							return (
								<ItemBudget
									key={index}
									budgetData={item}
									active={false}
									navigation={navigation}
								/>
							);
						})
					)}
				</EventIngressos>

				<Divider35 />
				<ScreenContTitle>Cotações encerradas</ScreenContTitle>

				<EventIngressos>
					{dataBudgets.length == 0 ? (<>
						<NoResultoAvatar>
							<NoResultoAvatarImg source={noresult_eventos} />
						</NoResultoAvatar>
						<NoResultLabel>Você ainda não fez solicitações.</NoResultLabel>
					</>) : (
						dataBudgets
						.filter(itemFilter => itemFilter.status == '2')
						.map((item: any, index: number) => {
							return (
								<ItemBudget
									key={index + 12211221}
									budgetData={item}
									active={false}
									navigation={navigation}
								/>
							);
						})
					)}
				</EventIngressos>
			</Container>
		</ScrollView>
		<ScreenLoader label='Carregando solicitações' active={formLoad} />
	</SafeAreaView>
		;
};
export default Tab0;
