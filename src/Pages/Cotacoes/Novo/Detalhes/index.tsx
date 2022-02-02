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
import FormButton from '../../../../Components/FormButton';
import FormButtonAux from '../../../../Components/FormButtonAux';
import FormButtonAux2 from '../../../../Components/FormButtonAux2';

import new_busca_logo from '../../../../../assets/images/new_busca_logo.png';
import new_session from '../../../../../assets/images/new_session.png';
import arrow_right_icon_white from '../../../../../assets/images/arrow_right_icon_white.png';
import new_session_color from '../../../../../assets/images/new_session_color.png';
import arrow_back_icon from '../../../../../assets/images/arrow_back_icon.png';
import new_bg from '../../../../../assets/images/new_bg.png';

import AuthContext from '../../../../Contexts/auth';
import { RootStackParamList } from '../../../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../../../constants/Colors';
import Datas from '../../../../../constants/Datas';
const ColorTheme = Colors['Theme'];

const SessionsBudgets = Datas['SessionsBudgets'];
const TypesBudgets = Datas['TypesBudgets'];
const MarcasBudgets = Datas['MarcasBudgets'];

const Tab = createBottomTabNavigator();

const SolicitacoesNovoOpcoes = ({ navigation, route }: Props) => {
    const ref: any = React.useRef(null);
    const [formSession, setFormSession] = useState('');
    const [formType, setFormType] = useState('');
    const [formMarca, setFormMarca] = useState('');
    const [formModelo, setFormModelo] = useState('');
    const [formAno, setFormAno] = useState('');
    const [formCor, setFormCor] = useState('');
    const [formDetalhes, setFormDetalhes] = useState('');
    const [budgetData, setBudgetData] = useState(route.params.budgetData);

    const checkSave = () => {
        let newBudget: any = budgetData;
            newBudget.marca = formMarca;
            newBudget.modelo = formModelo;
            newBudget.ano = formAno;
            newBudget.cor = formCor;
            newBudget.detalhes = formDetalhes;

        navigation.navigate('CotacoesDetalhes', {budgetData: budgetData});
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

                <LabelNew>SESSÂO:</LabelNew>
                <ButtomNewSelect
                    onPress={() => navigation.navigate('CotacoesNovoSessao', {budgetData: budgetData})}
                >
                    <ButtomNewIconLabelSelect>
                        <ButtomNewSelectIcon source={new_session_color} />
                        <ButtomNewSelectTitle>{SessionsBudgets[budgetData.session].label}</ButtomNewSelectTitle>
                    </ButtomNewIconLabelSelect>
                    <ButtomNewSelectArrow source={arrow_back_icon} />
                </ButtomNewSelect>

                <LabelNew>TIPO:</LabelNew>
                <ButtomNewSelect
                    onPress={() => navigation.navigate('CotacoesNovoTipo', {budgetData: budgetData})}
                >
                    <ButtomNewIconLabelSelect>
                        <ButtomNewSelectIcon source={new_session_color} />
                        <ButtomNewSelectTitle>{TypesBudgets[budgetData.session].label}</ButtomNewSelectTitle>
                    </ButtomNewIconLabelSelect>
                    <ButtomNewSelectArrow source={arrow_back_icon} />
                </ButtomNewSelect>

                <LabelNew>DETALHES:</LabelNew>
                <NewDetails>
                    <ViewFull>
                    <FormTextInput
                            editable={true}
                            icon={null}
                            value={formMarca}
                            placeholder='Informe a marca'
                            callback={setFormMarca}
                        />
                    </ViewFull>
                    <ViewFull>
                    <FormTextInput
                            editable={true}
                            icon={null}
                            value={formModelo}
                            placeholder='Informe o modelo'
                            callback={setFormModelo}
                        />
                    </ViewFull>
                    <ViewFullRowSpaceBetween>
                        <View45>
                        <FormTextInput
                            editable={true}
                            icon={null}
                            value={formAno}
                            placeholder='Ano'
                            callback={setFormAno}
                        />
                        </View45>
                        <View45>
                        <FormTextInput
                            editable={true}
                            icon={null}
                            value={formCor}
                            placeholder='Cor'
                            callback={setFormCor}
                        />
                        </View45>
                    </ViewFullRowSpaceBetween>
                    <ViewFull>
                        <FormTextArea
                            placeholder='O que você procura?'
                            value={formDetalhes}
                            editable={true}
                            callback={setFormDetalhes}
                        ></FormTextArea>
                    </ViewFull>
                    <Divider15/>
                    <ViewFull style={{ paddingHorizontal: 45}}>
                        <FormButtonAux2
                            label='+Adcionar imagem'
                            active={true}
                            loader={false}
                            navigation={navigation}
                            onPress={() => null}
                        />
                    </ViewFull>
                </NewDetails>
                <TollsNew>
                    <FormButtonAux2
                        label='Buscar orçamento'
                        active={true}
                        loader={false}
                        navigation={navigation}
                        onPress={() => checkSave()}
                    />
                    <Divider20/>
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