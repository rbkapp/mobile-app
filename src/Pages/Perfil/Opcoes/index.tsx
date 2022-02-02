import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useContext, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props { navigation: NavigationProp, route: any; }

import {
	Container,
	OpcoesCont, ScreenTitle, OpcoesTitle, Notificacoes, NotificacoesItem, NotificacoesItemLabel, NotificacoesItemRadio,
	Suporte, SuporteItem, SuporteItemIconLabel, SuporteItemIcon, SuporteItemLabel, SuporteArrow,
	ExcluirConta, ExcluirContaLabel,
} from './styles';

/* global components*/
import HeaderIntPainel from '../../../Components/HeaderIntPainel';
import ScreenLoader from '../../../Components/ScreenLoader';
import Footer from '../../../Components/Footer';

import opcoes_ajuda from '../../../../assets/images/opcoes_ajuda.png';
import opcoes_arrow from '../../../../assets/images/opcoes_arrow.png';
import opcoes_atualizacoes from '../../../../assets/images/opcoes_atualizacoes.png';
import opcoes_convidar from '../../../../assets/images/opcoes_convidar.png';
import opcoes_termos from '../../../../assets/images/opcoes_termos.png';

import api from '../../../Services/api';
import AuthContext from '../../../Contexts/auth';
import Colors from '../../../../constants/Colors';

const ColorTheme = Colors['Theme'];

const Opcoes = ({ navigation, route }: Props) => {
	const [formLoad, setFormLoad] = useState<boolean>(true);

	const { user, token } = useContext(AuthContext);

	const [settingId, setSettingId] = useState<string>('');
	const [settingToken, setSettingToken] = useState<string>('');
	const [formLives, setFormLives] = useState<boolean>(false);
	const [formBuys, setFormBuys] = useState<boolean>(false);
	const [formNews, setFormNews] = useState<boolean>(false);

	async function updateLives(lives: boolean, buys: boolean, news: boolean) {
		setFormLives( lives );
		setFormBuys( buys );
		setFormNews( news );

		try {
			const credentials = {
				notification_token: settingToken,
				notification_lives: lives,
				notification_buys: buys,
				notification_news: news
			};

			api.defaults.headers.authorization = `Bearer ${token}`;
			const response = await api.put(`/users/edit-settings/${settingId}`, credentials);
			const userSettings = response;

			console.log( JSON.stringify(response.data) );

		} catch (err: any) {
			console.log(err.response);
		}
	}

	async function startScreen() {
		console.log('PerfilOpcoes -> startScreen');
		try {
			const credentials = {};

			api.defaults.headers.authorization = `Bearer ${token}`;
			const response = await api.get('/users/setting', credentials);
			const userSettings = response;
			console.log('PerfilOpcoes -> startScreen -> response: '+JSON.stringify(userSettings));

			const settingId = JSON.stringify(userSettings.data.id);
			const settingToken = JSON.stringify(userSettings.data.notification_token);
			const settingLives = JSON.stringify(userSettings.data.notification_lives);
			const settingBuys = JSON.stringify(userSettings.data.notification_buys);
			const settingNews = JSON.stringify(userSettings.data.notification_news);

			setSettingId( JSON.parse( settingId ) );
			setSettingToken( JSON.parse( settingToken ) );
			setFormLives( JSON.parse( settingLives ) );
			setFormBuys( JSON.parse( settingBuys ) );
			setFormNews( JSON.parse( settingNews ) );

			setFormLoad(false);

		} catch (err) {
			console.log(err.response);
		}
	}

	useEffect(() => {
		startScreen();
	}, []);

	return <SafeAreaView>
		<ScreenLoader active={formLoad} />

		<ScrollView>
			<Container>
				<OpcoesCont>
					<ScreenTitle>Configurações</ScreenTitle>

					<Notificacoes>
						<OpcoesTitle>NOTIFICAÇÕES</OpcoesTitle>

						<NotificacoesItem>
							<NotificacoesItemLabel>Notificações de orçamentos</NotificacoesItemLabel>
							<NotificacoesItemRadio
								trackColor={{ false: ColorTheme.Gray0, true: ColorTheme.Gray1 }}
								thumbColor={formLives ? ColorTheme.Rosa : ColorTheme.Gray1}
								ios_backgroundColor={ColorTheme.Gray3}
								onValueChange={() => updateLives(formLives ? false : true, formBuys, formNews)}
								value={formLives}
							/>
						</NotificacoesItem>

						<NotificacoesItem>
							<NotificacoesItemLabel>Notificações de ofertas especiais</NotificacoesItemLabel>
							<NotificacoesItemRadio
								trackColor={{ false: ColorTheme.Gray0, true: ColorTheme.Gray1 }}
								thumbColor={formNews ? ColorTheme.Rosa : ColorTheme.Gray1}
								ios_backgroundColor={ColorTheme.Gray3}
								onValueChange={() => updateLives(formLives, formBuys, formNews ? false : true)}
								value={formNews}
							/>
						</NotificacoesItem>
					</Notificacoes>

					<Suporte>
						<OpcoesTitle>SUPORTE</OpcoesTitle>

						<SuporteItem onPress={() => navigation.navigate('Suporte')}>
							<SuporteItemIconLabel>
								<SuporteItemIcon source={opcoes_ajuda} />
								<SuporteItemLabel>Central de ajuda</SuporteItemLabel>
							</SuporteItemIconLabel>
							<SuporteArrow source={opcoes_arrow} />
						</SuporteItem>

						<SuporteItem>
							<SuporteItemIconLabel>
								<SuporteItemIcon source={opcoes_atualizacoes} />
								<SuporteItemLabel>Atualizações</SuporteItemLabel>
							</SuporteItemIconLabel>
							<SuporteArrow source={opcoes_arrow} />
						</SuporteItem>

						<SuporteItem>
							<SuporteItemIconLabel>
								<SuporteItemIcon source={opcoes_termos} />
								<SuporteItemLabel>Termos de serviço</SuporteItemLabel>
							</SuporteItemIconLabel>
							<SuporteArrow source={opcoes_arrow} />
						</SuporteItem>

						<SuporteItem>
							<SuporteItemIconLabel>
								<SuporteItemIcon source={opcoes_convidar} />
								<SuporteItemLabel>Convidar um amigo</SuporteItemLabel>
							</SuporteItemIconLabel>
							<SuporteArrow source={opcoes_arrow} />
						</SuporteItem>
					</Suporte>

					<ExcluirConta>
						<ExcluirContaLabel>Excluir minha conta</ExcluirContaLabel>
					</ExcluirConta>
				</OpcoesCont>

				<Footer></Footer>
			</Container>
		</ScrollView>

		<HeaderIntPainel navigation={navigation} route={route} />
	</SafeAreaView>;
};

export default Opcoes;
