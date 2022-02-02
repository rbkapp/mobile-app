import React, { useState, useContext } from 'react';


import {
    Container,
    Headdrawer, Backbtn, Backicon, Drawerbtn, Drawericon,
    Headlogo, LogoHead,
} from './styles';

import {
    OverlayHead, OverlayHeadIcon, OverlayHeadTitle
} from '../../Styles'

import arrow_back_icon_white from '../../../assets/images/arrow_back_icon.png';
import head_menu_white from '../../../assets/images/head_menu_white.png';
import head_logo from '../../../assets/images/logo_white.png';

import AuthContext from '../../Contexts/auth';
import { HeadersParamList } from '../../../types';

const HeaderNew = ({ navigation, route }: HeadersParamList) => {
    const { user, token, signed, signOut } = useContext(AuthContext);

    return <Container>
        <OverlayHead onPress={() => navigation.goBack()}>
            <OverlayHeadIcon source={arrow_back_icon_white} />
            <OverlayHeadTitle>Nova solicitação</OverlayHeadTitle>
        </OverlayHead>
    </Container>;
};

export default HeaderNew;
