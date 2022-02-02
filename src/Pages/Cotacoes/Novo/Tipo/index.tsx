import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
    ViewFull,
    ViewFullRowSpaceBetween, 
    View45,
    Divider15, Divider20,
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
    ButtomNewSelect,
    ButtomNewIconLabelSelect,
    ButtomNewSelectIcon,
    ButtomNewSelectTitle,
    ButtomNewSelectArrow,
    TollsNew,
    NewDetails,
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
import new_session_color from '../../../../../assets/images/new_session_color.png';
import arrow_back_icon from '../../../../../assets/images/arrow_back_icon.png';
import new_type_moto from '../../../../../assets/images/new_type_moto.png';
import new_type_car from '../../../../../assets/images/new_type_car.png';
import new_type_pesado from '../../../../../assets/images/new_type_pesado.png';
import new_bg from '../../../../../assets/images/new_bg.png';

import AuthContext from '../../../../Contexts/auth';
import { RootStackParamList } from '../../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../../constants/Colors';
import Datas from '../../../../../constants/Datas';
const ColorTheme = Colors['Theme'];

const SessionsBudgets = Datas['SessionsBudgets'];

const Tab = createBottomTabNavigator();

const SolicitacoesNovoOpcoes = ({ navigation, route }: Props) => {
    const ref: any = React.useRef(null);
    const [formSession, setFormSession] = useState('');
    const [formType, setFormType] = useState('');
    const [budgetData, setBudgetData] = useState(route.params.budgetData);

    const changeFormType = (item:string) => {
        setFormType(item);

        let newBudget: any = budgetData;
            newBudget.type = item;
        navigation.navigate('CotacoesNovoDetalhes', { budgetData: newBudget});
    }

    useEffect(() => {
		ref.current?.scrollTo({ y: 140, animated: true, });
        console.log('route.params.budgetData:' + JSON.stringify(route.params.budgetData));
	}, []);

    return <SafeAreaView>
        <ScrollView ref={ref}>
        <ContentNew source={new_bg}>
                <LogoNew>
                    <LogoNewImg source={new_busca_logo} />
                </LogoNew>

                <ButtomNewSelect
                    onPress={() => navigation.navigate('CotacoesNovoSessao', {budgetData: budgetData})}
                >
                    <ButtomNewIconLabelSelect>
                        <ButtomNewSelectIcon source={new_session_color} />
                        <ButtomNewSelectTitle>{SessionsBudgets[budgetData.session].label}</ButtomNewSelectTitle>
                    </ButtomNewIconLabelSelect>

                    <ButtomNewSelectArrow source={arrow_back_icon} />
                </ButtomNewSelect>

                <LabelNew>ESCOLHA UM TIPO:</LabelNew>
                <ButtomNew
                    onPress={() => changeFormType('1')}
                >
                    <ButtomNewIconLabel>
                        <ButtomNewIcon source={new_type_moto} />
                        <ButtomNewLabels>
                            <ButtomNewTitle>MOTOS</ButtomNewTitle>
                            <ButtomNewLabel>MOTOCICLETAS E TRICICLOS</ButtomNewLabel>
                        </ButtomNewLabels>
                    </ButtomNewIconLabel>
                    <ButtomNewArrow source={arrow_right_icon_white} />
                </ButtomNew>

                <ButtomNew
                    onPress={() => changeFormType('2')}
                >
                    <ButtomNewIconLabel>
                        <ButtomNewIcon source={new_type_car} />
                        <ButtomNewLabels>
                            <ButtomNewTitle>VEÍCULOS LEVES</ButtomNewTitle>
                            <ButtomNewLabel>CARROS, PICK-UPS, CAMINHONETES, ETC</ButtomNewLabel>
                        </ButtomNewLabels>
                    </ButtomNewIconLabel>
                    <ButtomNewArrow source={arrow_right_icon_white} />
                </ButtomNew>

                <ButtomNew
                    onPress={() => changeFormType('3')}
                >
                    <ButtomNewIconLabel>
                        <ButtomNewIcon source={new_type_pesado} />
                        <ButtomNewLabels>
                            <ButtomNewTitle>VEÍCULOS PESADOS</ButtomNewTitle>
                            <ButtomNewLabel>CAMINHÕES, CARRETAS, ETC.</ButtomNewLabel>
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
                        onPress={() => navigation.navigate('Home')}
                    />
                </TollsNew>
            </ContentNew>
            </ScrollView>
        </SafeAreaView>;
};

export default SolicitacoesNovoOpcoes;