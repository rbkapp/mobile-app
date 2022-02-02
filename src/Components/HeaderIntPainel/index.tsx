import React, { useState, useContext } from 'react';


import { Container,
	Headdrawer, Backbtn, Backicon, Drawerbtn, Drawericon,
	Headlogo, LogoHead,
	Headhelp, Helpbtn, Helpicon
} from './styles';

import arrow_back_icon_white from '../../../assets/images/arrow_back_icon_white.png';
import head_menu_white from '../../../assets/images/head_menu_white.png';
import head_logo from '../../../assets/images/logo_white.png';
import head_userIcon from './assets/head_user.png';

import AuthContext from '../../Contexts/auth';
import { HeadersParamList } from '../../../types';

const HeaderIntPainel = ({ navigation, route }: HeadersParamList) => {
	const { user, token, signed, signOut } = useContext(AuthContext);

	return <Container>
		<Headdrawer>
			<Backbtn onPress={() => navigation.goBack()} >
				<Backicon source={arrow_back_icon_white} />
			</Backbtn>

			<Drawerbtn onPress={() => navigation.openDrawer()} >
				<Drawericon source={head_menu_white} />
			</Drawerbtn>
		</Headdrawer>

		<Headlogo>
			<LogoHead source={head_logo} />
		</Headlogo>

		<Headhelp>
			<Helpbtn
				onPress={() => signed ? navigation.navigate('Perfil') : navigation.navigate('Login', { tab: 'login', redirect: 'Perfil' }) } >
				<Helpicon source={signed && user.avatar != '' ? { uri: user.avatar } : head_userIcon } />
			</Helpbtn>
		</Headhelp>
	</Container>;
};

export default HeaderIntPainel;
