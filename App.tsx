import React, { useEffect, useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './src/Components/DrawerContent';
import LoginStack from './src/Pages/Login';
import LoginRecuperarStack from './src/Pages/Login/Recuperar';
import LoginRedefinirStack from './src/Pages/Login/Redefinir';
import CadastroStack from './src/Pages/Cadastro';

import HomeStack from './src/Pages/Home';

import CotacoesDetalhesStack from './src/Pages/Cotacoes/Detalhes';
import CotacoesDetalhesOfertasStack from './src/Pages/Cotacoes/Detalhes/Ofertas';
import CotacoesNovoSessaoStack from './src/Pages/Cotacoes/Novo/Sessao';
import CotacoesNovoTipoStack from './src/Pages/Cotacoes/Novo/Tipo';
import CotacoesNovoDetalhesStack from './src/Pages/Cotacoes/Novo/Detalhes';

import SuporteStack from './src/Pages/Suporte';
import SuporteNovoStack from './src/Pages/Suporte/Novo';
import SuporteCategoriaStack from './src/Pages/Suporte/Categoria';
import SuporteDetalhesStack from './src/Pages/Suporte/Detalhes';

import PerfilStack from './src/Pages/Perfil';
import PerfilDadosStack from './src/Pages/Perfil/Dados';
import PerfilAcessosStack from './src/Pages/Perfil/Acessos';
import PerfilEnderecosStack from './src/Pages/Perfil/Enderecos';
import PerfilEnderecosNovoStack from './src/Pages/Perfil/Enderecos/Novo';
import PerfilEnderecosDetalhesStack from './src/Pages/Perfil/Enderecos/Detalhes';
import PerfilOpcoesStack from './src/Pages/Perfil/Opcoes';
import useCachedResources from './hooks/useCachedResources';
import { RootStackParamList } from './types';

import Firebase from './src/config/firebase';

import { AuthenticatedUserContext } from './src/Contexts/AuthenticatedUserContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();
const auth = Firebase.auth();

const App: React.FC = () => {
	const isLoadingComplete = useCachedResources();

	const { user } = useContext(AuthenticatedUserContext);
	const [isLoading, setIsLoading] = useState(true);

	const RootStackNavigator = () => {
		return (
			<Stack.Navigator
				initialRouteName={'Home'}
			>
				<Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
					<Stack.Screen name="Home" component={HomeStack} />

					<Stack.Screen name="CotacoesDetalhes" component={CotacoesDetalhesStack} />
					<Stack.Screen name="CotacoesDetalhesOfertas" component={CotacoesDetalhesOfertasStack} />
					<Stack.Screen name="CotacoesNovoSessao" component={CotacoesNovoSessaoStack} />
					<Stack.Screen name="CotacoesNovoTipo" component={CotacoesNovoTipoStack} />
					<Stack.Screen name="CotacoesNovoDetalhes" component={CotacoesNovoDetalhesStack} />

					<Stack.Screen name="Suporte" component={SuporteStack} />
					<Stack.Screen name="SuporteNovo" component={SuporteNovoStack} />
					<Stack.Screen name="SuporteCategoria" component={SuporteCategoriaStack} />
					<Stack.Screen name="SuporteDetalhes" component={SuporteDetalhesStack} />

					<Stack.Screen name="Perfil" component={PerfilStack} />
					<Stack.Screen name="PerfilDados" component={PerfilDadosStack} />
					<Stack.Screen name="PerfilAcessos" component={PerfilAcessosStack} />
					<Stack.Screen name="PerfilEnderecos" component={PerfilEnderecosStack} />
					<Stack.Screen name="PerfilEnderecosNovo" component={PerfilEnderecosNovoStack} />
					<Stack.Screen name="PerfilEnderecosDetalhes" component={PerfilEnderecosDetalhesStack} />
					<Stack.Screen name="PerfilOpcoes" component={PerfilOpcoesStack} />

					<Stack.Screen name="Login" component={LoginStack} />
					<Stack.Screen name="LoginRecuperar" component={LoginRecuperarStack} />
					<Stack.Screen name="LoginRedefinir" component={LoginRedefinirStack} />
					<Stack.Screen name="Cadastro" component={CadastroStack} />
				</Stack.Group>
			</Stack.Navigator>
		);
	};

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<NavigationContainer>
						<Drawer.Navigator
							drawerContent={props => <DrawerContent {...props} />}
						>
							<Drawer.Screen
								name="RootStackNavigator"
								component={RootStackNavigator}
								options={{
									headerShown: false
								}}
							/>
						</Drawer.Navigator>
				</NavigationContainer>
				<StatusBar />
			</SafeAreaProvider>
		);
	}
};
export default App;
