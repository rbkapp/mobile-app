import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { 
  ScreenContTitle,
  ViewFullRowSpaceBetween, View45, 
} from '../../../Styles';

import {
  Container,
  FinanceiroCont, BudGetHead, BudGetHeadIconInfos, BudGetHeadIcon, BudGetHeadInfos, BudGetHeadInfosTitle, BudGetHeadInfosLabel, BudGetHeadToll, BudGetHeadTollEnd, BudGetHeadTollEndLabel,
  OfertaItem, OfertaItemInfos, OfertaItemArrow,
  OfertaItemInfosTitle, OfertaItemInfosLabel, OfertaItemInfosValue, OfertaItemInfosStatusGreen,
} from './styles';

/* global components*/
import HeaderIntPainel from '../../../Components/HeaderIntPainel';
import Footer from '../../../Components/Footer';

import arrow_next_icon from '../../../../assets/images/arrow_next_icon.png';
import new_type_car_color from '../../../../assets/images/new_type_car_color.png';

import { RootStackParamList } from '../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'CotacoesDetalhes'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';
const ColorTheme = Colors['Theme'];

const SessionsBudgets = Datas['SessionsBudgets'];

const PerfilIngressos = ({ navigation, route }: Props) => {
  const [budgetData, setBudgetData] = useState(route.params.budgetData);

  const openMessage = (item:string) => {
    let newBudget: any = budgetData;
        newBudget.parceiro = item;

    navigation.navigate('CotacoesDetalhesOfertas', { budgetData: newBudget })
  }

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
              <BudGetHeadInfosLabel>Busco {SessionsBudgets[budgetData.session].label}</BudGetHeadInfosLabel>
              <BudGetHeadInfosTitle>{budgetData.detalhes}</BudGetHeadInfosTitle>
              <BudGetHeadInfosLabel>{budgetData.marca} - {budgetData.modelo}</BudGetHeadInfosLabel>
              <BudGetHeadInfosLabel>{budgetData.ano} - {budgetData.cor}</BudGetHeadInfosLabel>
            </BudGetHeadInfos>
          </BudGetHeadIconInfos>

          <BudGetHeadToll>
            <BudGetHeadTollEnd>
              <BudGetHeadTollEndLabel>Encerrar</BudGetHeadTollEndLabel>
            </BudGetHeadTollEnd>
          </BudGetHeadToll>
        </BudGetHead>
        <FinanceiroCont>
          <ScreenContTitle>Ofertas</ScreenContTitle>

          <OfertaItem
            onPress={() => openMessage('Rondobras')}
          >
            <OfertaItemInfos>
              <OfertaItemInfosTitle>Rondobras</OfertaItemInfosTitle>
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

            <OfertaItemArrow source={arrow_next_icon} />
          </OfertaItem>

          <OfertaItem
            onPress={() => openMessage('Oficina do Tião')}
          >
            <OfertaItemInfos>
              <OfertaItemInfosTitle>Oficina do Tião</OfertaItemInfosTitle>
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

            <OfertaItemArrow source={arrow_next_icon} />
          </OfertaItem>
        </FinanceiroCont>
        <Footer />
      </Container>
    </ScrollView>

    <HeaderIntPainel navigation={navigation} route={route} />
  </SafeAreaView>;
};

export default PerfilIngressos;
