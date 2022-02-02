import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Container,
	Headdrawer, Drawerbtn, Drawericon,
	Headlogo, LogoHead,
	Headhelp, Helpbtn, Helpicon
} from './styles';

import head_menu_white from '../../../assets/images/head_menu_white.png';
import head_logo from '../../../assets/images/logo_white.png';
import head_user_icon from './assets/head_user_icon.png';

import { HeadersParamList } from '../../../types';

import AuthContext from '../../Contexts/auth';

const HeaderPainel = ({ navigation, route }: HeadersParamList) => {
	const { signed, user } = useContext(AuthContext);

	return <Container>
		<Headdrawer>
			<Drawerbtn onPress={() => navigation.openDrawer()} >
				<Drawericon source={head_menu_white} />
			</Drawerbtn>
		</Headdrawer>

		<Headlogo>
			<LogoHead source={head_logo} />
		</Headlogo>

		<Headhelp>
			<Helpbtn onPress={() => navigation.navigate('Perfil')} >
				<Helpicon source={signed && user?.avatar != '' ? { uri: user?.avatar } : head_user_icon} />
			</Helpbtn>
		</Headhelp>
	</Container>;
};

export default HeaderPainel;
