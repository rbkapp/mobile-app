import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  Logoform, Formlogo,
  Tabsform, Activetab, Inactivetab, Labeltab, Labeltabactive,
} from './styles';

/* global components*/
import HeaderLogin from "../../Components/HeaderLogin";
import Footer from "../../Components/Footer";

/* local components*/
import Formlogin from './Formlogin';
import Formcadastro from './Formcadastro';

/* assets */
import form_logo from '../../../assets/images/logo_color.png';

/* types */
import { RootStackParamList } from '../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
interface Props { navigation: NavigationProp, route: any }

const Login = ({ navigation, route }: Props) => {
  const ref: any = React.useRef(null);

  const [tab, changeTab] = useState('login');
  function setTab(item: string) {
    changeTab(item);

    ref.current?.scrollTo({ y: 0, animated: true, });
  }

  return (
    <SafeAreaView>
      <ScrollView ref={ref}>
        <Container>
          <Logoform>
            <Formlogo source={form_logo} />
          </Logoform>

          {tab == 'login' ? (<>
            <Tabsform>
              <Activetab onPress={() => setTab('login')} >
                <Labeltabactive>Login</Labeltabactive>
              </Activetab>

              <Inactivetab onPress={() => setTab('cadastro')}  >
                <Labeltab>Cadastre-se</Labeltab>
              </Inactivetab>
            </Tabsform>

            <Formlogin navigation={navigation} route={route} setTab={setTab}></Formlogin>
          </>) : (<>
            <Tabsform>
              <Inactivetab onPress={() => setTab('login')} >
                <Labeltab>Login</Labeltab>
              </Inactivetab>

              <Activetab onPress={() => setTab('cadastro')} >
                <Labeltabactive>Cadastre-se</Labeltabactive>
              </Activetab>
            </Tabsform>

            <Formcadastro navigation={navigation} route={route} setTab={setTab} />
          </>)}

          <Footer />
        </Container>
      </ScrollView>
      <HeaderLogin navigation={navigation} route={route} />

    </SafeAreaView>
  );
}

export default Login;