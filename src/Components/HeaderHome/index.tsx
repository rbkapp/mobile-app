import React, { useState, useEffect } from 'react';
import Infos from '../../../constants/Infos';

import {
	Container, Head, Headdrawer, Drawerbtn, Drawericon,
	Headlogo, LogoHead,
} from './styles';

import head_menu_icon from '../../../assets/images/head_menu.png';
import head_logo from '../../../assets/images/logo_color.png';

const google_api = Infos['Key'].GoogleAPI;

import { HeadersParamList } from '../../../types';

const HeaderHome = ({ navigation, route }: HeadersParamList) => {

	return <Container>
		<Head>
			<Headdrawer>
				<Drawerbtn onPress={() => navigation.openDrawer()} >
					<Drawericon source={head_menu_icon} />
				</Drawerbtn>
			</Headdrawer>

			<Headlogo>
				<LogoHead source={head_logo} />
			</Headlogo>
		</Head>
	</Container>
	;
};

export default HeaderHome;
