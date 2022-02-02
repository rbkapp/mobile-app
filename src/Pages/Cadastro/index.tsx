import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  Container, DViewRow,
  FormTitle, Formsteps, Stepsline, StepslineActive, Formstep1, Formstep2, Formstep3, MarkerOk, Marker, MarkerActive, MarkerInactive, Steplabel1, Steplabel2, Steplabel3,
  TollS, Backbtn, Backlabel, Nextbtn, Nextlabel, 
} from './styles';

/* global component s*/
import HeaderLogin from "../../Components/HeaderLogin";
import Footer from "../../Components/Footer";

/* screen components */
import Step1 from './Step1';
import Step2 from './Step2';

/* assets */
import step_markerok from './assets/form_step_markerok.png';

/* types */
import { RootStackParamList } from '../../../types';
type NavigationProp = StackNavigationProp<RootStackParamList, 'EventosDetalhes'>;
interface Props { navigation: NavigationProp, route: any }

const Cadastro =  ( { navigation, route }: Props ) => {
  const ref: any = React.useRef(null);

  const [tab, changeTab] = useState('step1');
  function setTab(item: string) {
    changeTab(item);

    ref.current?.scrollTo({ y: 0, animated: true, });
  }

  return <SafeAreaView>
    <ScrollView ref={ref}>
      <Container>
        <FormTitle>Complete seu cadastro para finalizar sua compra</FormTitle>
        {tab == 'step1' ? (<>
          <Formsteps>
            <DViewRow>
              <StepslineActive></StepslineActive>
              <Stepsline></Stepsline>
            </DViewRow>
            <DViewRow>
              <Formstep1>
                <MarkerOk><Marker source={step_markerok} /></MarkerOk>
              </Formstep1>
              <Formstep2>
                <MarkerActive></MarkerActive>
              </Formstep2>
              <Formstep3>
                <MarkerInactive></MarkerInactive>
              </Formstep3>
            </DViewRow>
            <DViewRow>
              <Formstep1>
                <Steplabel1>Dados de Acesso</Steplabel1>
              </Formstep1>
              <Formstep2>
                <Steplabel2>Dados Pessoais</Steplabel2>
              </Formstep2>
              <Formstep3>
                <Steplabel3>Endereço</Steplabel3>
              </Formstep3>
            </DViewRow>
          </Formsteps>

          <Step1 navigation={navigation} route={route} setTab={setTab}></Step1>

        </>) : (null)}

        {tab == 'step2' ? (<>
          <Formsteps>
            <DViewRow>
              <StepslineActive></StepslineActive>
              <Stepsline></Stepsline>
            </DViewRow>
            <DViewRow>
              <Formstep1>
                <MarkerOk><Marker source={step_markerok} /></MarkerOk>
              </Formstep1>
              <Formstep2>
              <MarkerOk><Marker source={step_markerok} /></MarkerOk>
              </Formstep2>
              <Formstep3>
              <MarkerActive></MarkerActive>
              </Formstep3>
            </DViewRow>
            <DViewRow>
              <Formstep1>
                <Steplabel1>Dados de Acesso</Steplabel1>
              </Formstep1>
              <Formstep2>
                <Steplabel2>Dados Pessoais</Steplabel2>
              </Formstep2>
              <Formstep3>
                <Steplabel3>Endereço</Steplabel3>
              </Formstep3>
            </DViewRow>
          </Formsteps>

          <Step2 navigation={navigation} route={route} setTab={setTab}></Step2>
        </>) : (null)}

        <Footer></Footer>
      </Container>
    </ScrollView>

    <HeaderLogin navigation={navigation} route={route} />
  </SafeAreaView>
    ;
}

export default Cadastro;