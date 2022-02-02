import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { Container,
    Headdrawer, Backbtn, Backicon, Drawerbtn, Drawericon,
    Headlogo, LogoHead,
    Headhelp, Helpbtn, Helpicon
} from './styles';

import head_back_icon from './assets/head_back.png';
import head_menu_icon from '../../../assets/images/head_menu.png';
import head_logo from '../../../assets/images/logo_color.png';
import head_help_icon from './assets/head_help.png';

import { HeadersParamList } from '../../../types';

const HeaderLogin = ({ navigation, route }: HeadersParamList) => {
  return <Container>
            <Headdrawer>
                <Backbtn onPress={() => navigation.goBack()} >
                    <Backicon source={head_back_icon} />
                </Backbtn>

                <Drawerbtn onPress={() => navigation.openDrawer()} >
                    <Drawericon source={head_menu_icon} />
                </Drawerbtn>
            </Headdrawer>

            <Headlogo>
                <LogoHead source={head_logo} />
            </Headlogo>

            <Headhelp>
                <Helpbtn onPress={() => navigation.navigate("Suporte")}>
                    <Helpicon source={head_help_icon} />
                </Helpbtn>
            </Headhelp>
        </Container>;
}

export default HeaderLogin;
