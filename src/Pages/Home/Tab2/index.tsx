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
import AuthContext from '../../../Contexts/auth';

import database from '../../../config/firebase';

const deviceHeight = Dimensions.get('window').height;

const Tab0 = ({ navigation, route, setTab }: NavTabParamList) => {
	const { token } = useContext(AuthContext);

	const [formLoad, setFormLoad] = useState(true);
	const [dataBudgets, setDataBudgets] = useState([]);

	const loadDataBudgets = () => {
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
	}

	useEffect(() => {
		loadDataBudgets();
	}, []);

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
						.filter((itemFilter: any) => itemFilter.status == '1')
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
						.filter((itemFilter: any) => itemFilter.status == '2')
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
		<ScreenLoader 
			label='Carregando solicitações' 
			active={formLoad} 
		/>
	</SafeAreaView>
		;
};
export default Tab0;
