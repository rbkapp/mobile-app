import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
} from '../../../../Styles';
import {
    ContentNew,
    LogoNew,
    LogoNewImg,
    LabelNew,
    ButtomNew,
    ButtomNewIconLabel,
    ButtomNewIcon,
    ButtomNewLabels,
    ButtomNewTitle,
    ButtomNewLabel,
    ButtomNewArrow,
    TollsNew,
} from './styles';

import HeaderNew from '../../../../Components/HeaderNew';
import FormTextInput from '../../../../Components/FormTextInput';
import FormTextArea from '../../../../Components/FormTextArea';
import FormDropDownPicker from '../../../../Components/FormDropDownPicker';
import FormButtonAux from '../../../../Components/FormButtonAux';
import FormButtonAux2 from '../../../../Components/FormButtonAux2';

import new_busca_logo from '../../../../../assets/images/new_busca_logo.png';
import new_session from '../../../../../assets/images/new_session.png';
import arrow_right_icon_white from '../../../../../assets/images/arrow_right_icon_white.png';
import new_services from '../../../../../assets/images/new_services.png';
import new_type from '../../../../../assets/images/new_type.png';
import new_bg from '../../../../../assets/images/new_bg.png';

import AuthContext from '../../../../Contexts/auth';
import { RootStackParamList } from '../../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const Tab = createBottomTabNavigator();

const SolicitacoesNovoOpcoes = ({ navigation, route }: Props) => {
    const [formSession, setFormSession] = useState('');
    const [budgetData, setBudgetData] = useState(route.params.budgetData);

    const changeformSession = (item:string) => {
        setFormSession(item);

        let newBudget: any = budgetData;
            newBudget.session = item;
        navigation.navigate('CotacoesNovoTipo', { budgetData: newBudget});
    }

    useEffect(() => {
		console.log('route.params.budgetData:' + JSON.stringify(route.params.budgetData));
	}, []);

    return <SafeAreaView>
        <ScrollView>
        <ContentNew source={new_bg}>
            <LogoNew>
                <LogoNewImg source={new_busca_logo} />
            </LogoNew>

            <LabelNew>ESCOLHA UMA SESSÃO:</LabelNew>
            <ButtomNew
                onPress={() => changeformSession('1')}
            >
                <ButtomNewIconLabel>
                    <ButtomNewIcon source={new_session} />
                    <ButtomNewLabels>
                        <ButtomNewTitle>TUDO NOVO</ButtomNewTitle>
                        <ButtomNewLabel>PEÇAS E ACESSÓRIOS NOVOS</ButtomNewLabel>
                    </ButtomNewLabels>
                </ButtomNewIconLabel>
                <ButtomNewArrow source={arrow_right_icon_white} />
            </ButtomNew>

            <ButtomNew
                onPress={() => changeformSession('2')}
            >
                <ButtomNewIconLabel>
                    <ButtomNewIcon source={new_services} />
                    <ButtomNewLabels>
                        <ButtomNewTitle>USADOS</ButtomNewTitle>
                        <ButtomNewLabel>PEÇAS E ACESSÓRIOS USADOS EM BOM ESTADO</ButtomNewLabel>
                    </ButtomNewLabels>
                </ButtomNewIconLabel>
                <ButtomNewArrow source={arrow_right_icon_white} />
            </ButtomNew>

            <ButtomNew
                onPress={() => changeformSession('3')}
            >
                <ButtomNewIconLabel>
                    <ButtomNewIcon source={new_type} />
                    <ButtomNewLabels>
                        <ButtomNewTitle>SERVIÇOS</ButtomNewTitle>
                        <ButtomNewLabel>SERVIÇOS VARIADOS PARA VEÍCULOS E MÁQUINAS</ButtomNewLabel>
                    </ButtomNewLabels>
                </ButtomNewIconLabel>
                <ButtomNewArrow source={arrow_right_icon_white} />
            </ButtomNew>
            <TollsNew>
                <FormButtonAux
                    label='Cancelar'
                    active={true}
                    loader={false}
                    navigation={navigation}
                    onPress={() => navigation.navigate('Home', { tab : '' })}
                />
            </TollsNew>
        </ContentNew>
        </ScrollView>
        </SafeAreaView>;
};

export default SolicitacoesNovoOpcoes;