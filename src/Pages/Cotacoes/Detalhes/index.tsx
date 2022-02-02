import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  ScreenContTitle,
  ViewFullRowSpaceBetween, View45,
  NoResultLabel, NoResultoAvatar, NoResultoAvatarImg,
} from '../../../Styles';

import {
  Container,
  FinanceiroCont, BudGetHead, BudGetHeadIconInfos, BudGetHeadIcon, BudGetHeadInfos, BudGetHeadInfosTitle, BudGetHeadInfosLabel, BudGetHeadToll, BudGetHeadTollEnd, BudGetHeadTollEndLabel,
  OfertaItem, OfertaItemInfos, OfertaItemArrow,
  OfertaItemInfosTitle, OfertaItemInfosLabel, OfertaItemInfosValue, OfertaItemInfosStatusGreen,
} from './styles';

/* global components*/
import HeaderIntPainel from '../../../Components/HeaderIntPainel';
import ScreenLoader from '../../../Components/ScreenLoader';
import OfertasItem from './OfertasItem'
import Footer from '../../../Components/Footer';

import arrow_next_icon from '../../../../assets/images/arrow_next_icon.png';
import new_type_car_color from '../../../../assets/images/new_type_car_color.png';
import noresult_eventos from '../../../../assets/images/noresult_eventos.png';

import { RootStackParamList } from '../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'CotacoesDetalhes'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../constants/Colors';
import Datas from '../../../../constants/Datas';

import database from '../../../config/firebase';

const ColorTheme = Colors['Theme'];
const SessionsBudgets = Datas['SessionsBudgets'];

const PerfilIngressos = ({ navigation, route }: Props) => {
  const [budgetData, setBudgetData] = useState(route.params.budgetData);

  const [formLoad, setFormLoad] = useState(true);
  const [dataBudgets, setDataBudgets] = useState([]);

  const loadDataBudgetItem = () => {
    database
      .firestore()
      .collection("budgets_offers")
      .where("budget_id", '==', budgetData.id)
      .onSnapshot((snapshot: { docs: any[]; }) => {
        const listItems: any = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setDataBudgets(listItems);
        setFormLoad(false);
      })
  }

  useEffect(() => {
    //console.log('route.params.budgetData:' + JSON.stringify(route.params.budgetData));
    loadDataBudgetItem();
  }, []);

  return <SafeAreaView>
    <ScrollView>
      <Container>
        <BudGetHead>
          <BudGetHeadIconInfos>
            <BudGetHeadIcon source={{ uri: budgetData.avatar }} />
            <BudGetHeadInfos>
              <BudGetHeadInfosLabel>Busco {SessionsBudgets[budgetData.session].label}</BudGetHeadInfosLabel>
              <BudGetHeadInfosTitle>{budgetData.description}</BudGetHeadInfosTitle>
              <BudGetHeadInfosLabel>{budgetData.brand} - {budgetData.modal}</BudGetHeadInfosLabel>
              <BudGetHeadInfosLabel>{budgetData.year} - {budgetData.color}</BudGetHeadInfosLabel>
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
          {dataBudgets.length == 0 ? (<>
            <NoResultoAvatar>
              <NoResultoAvatarImg source={noresult_eventos} />
            </NoResultoAvatar>
            <NoResultLabel>Esta cotação ainda não recebeu ofertas.</NoResultLabel>
          </>) : (
            dataBudgets
              .map((item: any, index: number) => {
                return (
                  <OfertasItem
                  navigation={navigation}
                  budgetData={item}
                  />
                );
              })
          )}

        </FinanceiroCont>
        <Footer />
      </Container>
    </ScrollView>

    <HeaderIntPainel
      navigation={navigation}
      route={route}
    />
    <ScreenLoader
      label='Carregando solicitações'
      active={formLoad}
    />
  </SafeAreaView>;
};

export default PerfilIngressos;
