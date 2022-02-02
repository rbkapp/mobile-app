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
	SendMessageFileBtn,SendMessageFileBtnLabel,
} from './styles';

import HeaderIntPainel from '../../../../Components/HeaderIntPainel';

import message_send from '../../../../../assets/images/message_send.png';
import arrow_back_icon from '../../../../../assets/images/arrow_back_icon.png';
import new_type_car_color from '../../../../../assets/images/new_type_car_color.png';

import { RootStackParamList } from '../../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'CotacoesDetalhesOfertas'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const PerfilIngressos = ({ navigation, route }: Props) => {
	const [budgetData, setBudgetData] = useState(route.params.budgetData);
	const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
      console.log('route.params.budgetData:' + JSON.stringify(route.params.budgetData));
	}, []);

	return <SafeAreaView>
		<ScrollView>
			<Container>
				<BudGetHead>
					<BudGetHeadIconInfos>
						<BudGetHeadIcon source={{ uri: budgetData.image}} />
						<BudGetHeadInfos>
							<BudGetHeadInfosTitle>{budgetData.detalhes}</BudGetHeadInfosTitle>
							<BudGetHeadInfosLabel>{budgetData.marca} - {budgetData.modelo}</BudGetHeadInfosLabel>
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
					<BudGetHeadMessageLabel>{budgetData.parceiro}</BudGetHeadMessageLabel>
				</BudGetHeadMessage>

				<FinanceiroCont>
					<Message>
						<OfertaItemInfos>
							<OfertaItemInfosTitle>{budgetData.parceiro}</OfertaItemInfosTitle>
							<OfertaItemInfosLabel>Olá temos essa peça em estoque!</OfertaItemInfosLabel>
							<ViewFullRowSpaceBetween>
								<View45>
									<OfertaItemInfosLabel>Valor:</OfertaItemInfosLabel>
								</View45>
								<View45>
									<OfertaItemInfosValue>R$ 00,00</OfertaItemInfosValue>
								</View45>
							</ViewFullRowSpaceBetween>
							<ViewFullRowSpaceBetween>
								<View45>
									<OfertaItemInfosLabel>Entrega:</OfertaItemInfosLabel>
								</View45>
								<View45>
									<OfertaItemInfosStatusGreen>Grátis</OfertaItemInfosStatusGreen>
								</View45>
							</ViewFullRowSpaceBetween>
							<ViewFullRowSpaceBetween>
								<View45>
									<OfertaItemInfosLabel>Pode retirar:</OfertaItemInfosLabel>
								</View45>
								<View45>
									<OfertaItemInfosValue>Não</OfertaItemInfosValue>
								</View45>
							</ViewFullRowSpaceBetween>
							<ViewFullRowSpaceBetween>
								<View45>
									<OfertaItemInfosLabel>Tempo de entrega:</OfertaItemInfosLabel>
								</View45>
								<View45>
									<OfertaItemInfosValue>2 horas</OfertaItemInfosValue>
								</View45>
							</ViewFullRowSpaceBetween>
						</OfertaItemInfos>
					</Message>

					<MessageMe>
						<MessageMeLabel>Poderia me enviar uma foto?</MessageMeLabel>
					</MessageMe>

					<Message>
						<OfertaItemInfosLabel>Não to a fim não!</OfertaItemInfosLabel>
					</Message>

					<MessageMe>
						<MessageMeLabel>Tá bom então</MessageMeLabel>
					</MessageMe>
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
					style={{paddingVertical: 10}}
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
