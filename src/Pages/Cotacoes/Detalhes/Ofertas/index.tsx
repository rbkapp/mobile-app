import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import {
	ViewFullRowSpaceBetween, View45,
} from '../../../../Styles';

import {
	Container,
	FinanceiroCont, BudGetHead, BudGetHeadIconInfos, BudGetHeadIcon, BudGetHeadInfos, BudGetHeadInfosTitle, BudGetHeadInfosLabel, BudGetHeadToll, BudGetHeadTollEnd, BudGetHeadTollEndLabel,
	BudGetHeadMessage, BudGetHeadMessageBackBtn, BudGetHeadMessageBackBtnIcom, BudGetHeadMessageLabel,
	Message, OfertaItemInfos,
	MessageMe, MessageMeLabel,
	OfertaItemInfosTitle, OfertaItemInfosLabel, OfertaItemInfosValue, OfertaItemInfosStatusGreen,
	SendMessage, SendMessageInt, SendMessageIntSendBtn, SendMessageIntSendBtnicon,
	SendMessageFileBtn, SendMessageFileBtnLabel,
} from './styles';

import HeaderIntPainel from '../../../../Components/HeaderIntPainel';

import message_send from '../../../../../assets/images/message_send.png';
import arrow_back_icon from '../../../../../assets/images/arrow_back_icon.png';
import new_type_car_color from '../../../../../assets/images/new_type_car_color.png';

import { RootStackParamList } from '../../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'CotacoesDetalhesOfertas'>;
interface Props { navigation: NavigationProp, route: any; }

import database from '../../../../config/firebase';

const PerfilIngressos = ({ navigation, route }: Props) => {
	const [budgetData, setBudgetData] = useState(route.params.budgetData);
	const [formMessage, setFormMessage] = useState('');

	const [dataPartner, setDataPartner] = useState<any>([]);
	const [dataBudget, setDataBudget] = useState<any>([]);
	const [dataBudgetOfers, setDataBudgetOfers] = useState<any>([]);

	function loadDataPartner() {
		database
			.firestore()
			.collection("partners")
			.doc(budgetData.partner_id)
			.onSnapshot((doc: { data: () => any; }) => {
				if (doc) {
					setDataPartner(doc.data());
				}
			});
	}

	function loadDataBudget() {
		database
			.firestore()
			.collection("budgets")
			.doc(budgetData.budget_id)
			.onSnapshot((doc: { data: () => any; }) => {
				if (doc) {
					setDataBudget(doc.data());
					console.log('doc.data(): ' + doc.data())
				}
			});
	}

	function loadDataBudgetOferChats() {
		database
			.firestore()
			.collection("budgets_offers_chats")
			.where("budgets_offer_id", '==', 'EVi5l4Ul8JUf4m1YOxRh')
			.orderBy("create_at", "asc")
			.onSnapshot((snapshot: { docs: any[]; }) => {
				const listItems: any = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}))
				setDataBudgetOfers(listItems);
			});
	}

	useEffect(() => {
		console.log('route.params.budgetData:' + JSON.stringify(route.params.budgetData));
		loadDataPartner();
		loadDataBudget();
		loadDataBudgetOferChats();
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<Container>
				<BudGetHead>
					<BudGetHeadIconInfos>
						<BudGetHeadIcon source={{ uri: dataBudget?.avatar }} />
						<BudGetHeadInfos>
							<BudGetHeadInfosTitle>{dataBudget?.description}</BudGetHeadInfosTitle>
							<BudGetHeadInfosLabel>{dataBudget?.brand} - {dataBudget?.model}</BudGetHeadInfosLabel>
						</BudGetHeadInfos>
					</BudGetHeadIconInfos>

					<BudGetHeadToll>
						<BudGetHeadTollEnd>
							<BudGetHeadTollEndLabel>Encerrar</BudGetHeadTollEndLabel>
						</BudGetHeadTollEnd>
					</BudGetHeadToll>
				</BudGetHead>

				<BudGetHeadMessage>
					<BudGetHeadMessageBackBtn
						onPress={() => navigation.goBack()}
					>
						<BudGetHeadMessageBackBtnIcom source={arrow_back_icon} />
					</BudGetHeadMessageBackBtn>
					<BudGetHeadMessageLabel>{dataPartner?.name}</BudGetHeadMessageLabel>
				</BudGetHeadMessage>

				<FinanceiroCont>
					{
						dataBudgetOfers.map((dataBudgetOfer: any, index: number) => {
							if (dataBudgetOfer.type == 1) {
								return (
									<Message>
										<OfertaItemInfos>
											<OfertaItemInfosTitle>{budgetData.parceiro}</OfertaItemInfosTitle>
											<OfertaItemInfosLabel>{dataBudgetOfer?.description}</OfertaItemInfosLabel>
											<ViewFullRowSpaceBetween>
												<View45>
													<OfertaItemInfosLabel>Valor:</OfertaItemInfosLabel>
												</View45>
												<View45>
													<OfertaItemInfosValue>R$ {dataBudgetOfer?.value}</OfertaItemInfosValue>
												</View45>
											</ViewFullRowSpaceBetween>
											<ViewFullRowSpaceBetween>
												<View45>
													<OfertaItemInfosLabel>Entrega:</OfertaItemInfosLabel>
												</View45>
												<View45>
													{
														dataBudgetOfer?.delivery ? (
															<OfertaItemInfosStatusGreen>{dataBudgetOfer?.delivery_value == 0 ? 'GRATIS' : 'R$ ' + dataBudgetOfer?.delivery_value}</OfertaItemInfosStatusGreen>
														) : (
															<OfertaItemInfos>NÃO</OfertaItemInfos>
														)
													}
												</View45>
											</ViewFullRowSpaceBetween>
											<ViewFullRowSpaceBetween>
												<View45>
													<OfertaItemInfosLabel>Pode retirar:</OfertaItemInfosLabel>
												</View45>
												<View45>
													{
														dataBudgetOfer?.withdrawal ? (
															<OfertaItemInfosStatusGreen>SIM</OfertaItemInfosStatusGreen>
														) : (
															<OfertaItemInfos>NÃO</OfertaItemInfos>
														)
													}
												</View45>
											</ViewFullRowSpaceBetween>
											{
												dataBudgetOfer?.delivery ? (
													<ViewFullRowSpaceBetween>
														<View45>
															<OfertaItemInfosLabel>Tempo de entrega:</OfertaItemInfosLabel>
														</View45>
														<View45>
															<OfertaItemInfosValue>{dataBudgetOfer?.delivery_time} horas</OfertaItemInfosValue>
														</View45>
													</ViewFullRowSpaceBetween>
												) : null
											}
										</OfertaItemInfos>
									</Message>
								)
							} else if (dataBudgetOfer.type == 2) {
								return (
									<MessageMe>
										<MessageMeLabel>Poderia me enviar uma foto?</MessageMeLabel>
									</MessageMe>
								)
							} else if (dataBudgetOfer.type == 3) {
								return (
									<Message>
										<OfertaItemInfosLabel>Não to a fim não!</OfertaItemInfosLabel>
									</Message>
								)
							}
						})
					}
				</FinanceiroCont>
			</Container>
		</ScrollView>
		<SendMessage>
			<SendMessageFileBtn>
				<SendMessageFileBtnLabel>Anexar imagem</SendMessageFileBtnLabel>
			</SendMessageFileBtn>
			<SendMessageInt>
				<TextInput
					value={formMessage}
					placeholderTextColor="#6b6b6b"
					style={{ paddingVertical: 10 }}
					onChangeText={(myText: string) => setFormMessage(myText)}
					placeholder='Mensagem'
					editable={true}
				/>
				<SendMessageIntSendBtn>
					<SendMessageIntSendBtnicon source={message_send} />
				</SendMessageIntSendBtn>
			</SendMessageInt>
		</SendMessage>
		<HeaderIntPainel navigation={navigation} route={route} />
	</SafeAreaView>;
};

export default PerfilIngressos;
