import React from 'react';

import { Container,
    Headdrawer, Backbtn, Backicon,
    Headlogo, LogoTitle,
} from './styles';

import head_back_icon from './assets/head_back.png';

import { HeadersParamList } from '../../../types';

const HeaderLogin = ({ navigation, route }: HeadersParamList) => {
  return <Container>
            <Headdrawer>
                <Backbtn onPress={() => navigation.goBack()} >
                    <Backicon source={head_back_icon} />
                </Backbtn>
            </Headdrawer>

            <Headlogo>
                <LogoTitle>Criar ingresso</LogoTitle>
            </Headlogo>
        </Container>;
}

export default HeaderLogin;