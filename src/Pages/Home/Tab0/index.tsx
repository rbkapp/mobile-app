/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useContext, useEffect } from 'react';

import { NavTabParamList } from '../../../../types';

import {
    Container,
    TitleToll, Title1, Title2, TitleTLogo, TitleAction
} from './styles';

import {
    Button, ButtonLabel,
} from '../../../Styles';

import logo_color from '../../../../assets/images/logo_color.png';

import Colors from '../../../../constants/Colors';

const ColorTheme = Colors['Theme'];

const Tab0 = ({ navigation, setTab }: NavTabParamList) => {
    return <Container>
        <TitleToll>
            <TitleTLogo source={logo_color} />
            <Title1>Seja bem vindo!</Title1>
            <Title2>Para fazer uma cotação, faça login ou cadastre-se gratuitamente :D</Title2>
        </TitleToll>
        <TitleAction>
            <Button
                onPress={() => navigation.navigate('Login', { tab: 'login', redirect: 'Home', redirect_details: '' })}
            >
                <ButtonLabel>Começar agora!</ButtonLabel>
            </Button>
        </TitleAction>
    </Container>;
};
export default Tab0;
