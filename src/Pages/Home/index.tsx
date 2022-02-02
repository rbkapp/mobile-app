import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    NewButtomContent,
    NewButtom,
    NewButtomLabel,
} from './styles';

import HeaderHome from '../../Components/HeaderHome';
import HeaderPainel from '../../Components/HeaderPainel';
import new_busca from '../../../assets/images/new_busca.png';

import Tab0 from './Tab0';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

import AuthContext from '../../Contexts/auth';
import { RootStackParamList } from '../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
interface Props { navigation: NavigationProp, route: any; }

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const Tab = createBottomTabNavigator();

const HomeTab1 = ({ navigation, route }: Props) => {
    const { signed } = useContext(AuthContext);

    const budgetData: any = {session:0, type: 0};

    return <>
        {
            true ? (<>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Ofertas especiais') {
                            iconName = focused
                              ? 'golf'
                              : 'golf-outline';
                          } else if (route.name === 'Meus orçamentos') {
                            iconName = focused ? 'build' : 'build-outline';
                          }
              
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: ColorTheme.Rosa,
                        tabBarInactiveTintColor: ColorTheme.Gray2,
                      })}

                    initialRouteName={'Ofertas especiais'}
                >
                    <Tab.Screen name='Ofertas especiais' component={Tab1} />
                    <Tab.Screen name='Meus orçamentos' component={Tab2} />
                </Tab.Navigator>
                <NewButtomContent>
                    <NewButtom
                        onPress={() => navigation.navigate('CotacoesNovoSessao', {budgetData})}
                    >
                        <NewButtomLabel source={new_busca}/>
                    </NewButtom>
                </NewButtomContent>
                </>
            ) :
                (
                    <Tab0 navigation={navigation} route={route} setTab='' />
                )
        }
        {
            signed ? (
                <HeaderPainel navigation={navigation} route={route} />
            ) :
                (
                    <HeaderHome navigation={navigation} route={route} />
                )
        }
    </>;
};

export default HomeTab1;