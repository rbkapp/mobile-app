/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useContext, useEffect } from 'react';

import { NavTabParamList } from '../../../../types';

import {
    Container,
    TitleToll, Title1, Title2,
} from './styles';

import Colors from '../../../../constants/Colors';

const ColorTheme = Colors['Theme'];

const Tab0 = ({ navigation, setTab }: NavTabParamList) => {
    return <Container>
        <TitleToll>
            <Title1>Ofertas especiais</Title1>
            <Title2>Aqui ficarão ofertas especiais</Title2>
        </TitleToll>
    </Container>;
};
export default Tab0;
