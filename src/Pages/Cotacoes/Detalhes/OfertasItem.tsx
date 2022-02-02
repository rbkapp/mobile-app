import React, { useEffect, useState } from 'react';

import {
    OfertaItem, OfertaItemInfos, OfertaItemArrow,
    OfertaItemInfosTitle, OfertaItemInfosLabel, OfertaItemInfosValue, OfertaItemInfosStatusGreen,
} from './styles';

import {
    ViewFullRowSpaceBetween, View45,
} from '../../../Styles';

import arrow_next_icon from '../../../../assets/images/arrow_next_icon.png';

import { ItemBudGetOfferParamList } from '../../../../types';

import database from '../../../config/firebase';

const ItemIngresso: React.FC<ItemBudGetOfferParamList> = (props: ItemBudGetOfferParamList) => {
    const [budgetOferData, setBudgetOferData] = useState(props.budgetData);
    const [dataPartner, setDataPartner] = useState<any>([]);
    const [dataBudgetOfers, setDataBudgetOfers] = useState<any>([]);

    const openMessage = () => {
        let newBudget: any = props.budgetData;
        newBudget.parceiro = dataPartner?.name;

        props.navigation.navigate('CotacoesDetalhesOfertas', { budgetData: newBudget })
    }

    function loadDataPartner() {
        database
            .firestore()
            .collection("partners")
            .doc(budgetOferData.partner_id)
            .onSnapshot((doc: { data: () => any; }) => {
                if (doc) {
                    setDataPartner(doc.data());
                }
            });
    }

    function loadDataBudgetOferChats() {
        database
            .firestore()
            .collection("budgets_offers_chats")
            .where("budgets_offer_id", '==', 'EVi5l4Ul8JUf4m1YOxRh')
			.orderBy("create_at", "asc")
            .limit(1)
            .onSnapshot((snapshot: { docs: any[]; }) => {
                const listItems: any = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setDataBudgetOfers(listItems);
            });
    }

    useEffect(() => {
        console.log('props.budgetOferData:' + JSON.stringify(props.budgetData));
        loadDataPartner();
        loadDataBudgetOferChats();
    }, []);

    return <OfertaItem
        onPress={() => openMessage()}
    >
        <OfertaItemInfos>
            <OfertaItemInfosTitle>{dataPartner?.name}</OfertaItemInfosTitle>
            {
                dataBudgetOfers[0]?.type == 1 ? (<>
                    <OfertaItemInfosLabel>{dataBudgetOfers[0]?.description}</OfertaItemInfosLabel>
                    <ViewFullRowSpaceBetween>
                        <View45>
                            <OfertaItemInfosLabel>Valor:</OfertaItemInfosLabel>
                        </View45>
                        <View45>
                            <OfertaItemInfosValue>R$ {dataBudgetOfers[0]?.value}</OfertaItemInfosValue>
                        </View45>
                    </ViewFullRowSpaceBetween>
                    <ViewFullRowSpaceBetween>
                        <View45>
                            <OfertaItemInfosLabel>Entrega:</OfertaItemInfosLabel>
                        </View45>
                        <View45>
                            {
                                dataBudgetOfers[0]?.delivery ? (
                                    <OfertaItemInfosStatusGreen>{dataBudgetOfers[0]?.delivery_value == 0 ? 'GRATIS' : 'R$ '+dataBudgetOfers[0]?.delivery_value}</OfertaItemInfosStatusGreen>
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
                                dataBudgetOfers[0]?.withdrawal ? (
                                    <OfertaItemInfosStatusGreen>SIM</OfertaItemInfosStatusGreen>
                                ) : (
                                    <OfertaItemInfos>NÃO</OfertaItemInfos>
                                )
                            }
                        </View45>
                    </ViewFullRowSpaceBetween>
                    {
                        dataBudgetOfers[0]?.delivery ? (
                            <ViewFullRowSpaceBetween>
                                <View45>
                                    <OfertaItemInfosLabel>Tempo de entrega:</OfertaItemInfosLabel>
                                </View45>
                                <View45>
                                    <OfertaItemInfosValue>{dataBudgetOfers[0]?.delivery_time} horas</OfertaItemInfosValue>
                                </View45>
                            </ViewFullRowSpaceBetween>
                        ) : null
                    }
                </>) : null
            }
        </OfertaItemInfos>

        <OfertaItemArrow source={arrow_next_icon} />
    </OfertaItem>;
};

export default ItemIngresso;
