import React from 'react';
import { Modal } from 'react-native';

import {
  Container, AlertCont, ContIcon, ContTitle, ContMessage,
} from './styles';

import {
  ViewFullRow, View45, View5, Divider35,
  Button, ButtonLabel,
  ButtonAux, ButtonAuxLabel,
} from '../../../src/Styles';

import { AlertMessageParamList } from '../../../types';

const AlertMessage: React.FC<AlertMessageParamList> = (props: AlertMessageParamList) => {
  return <Modal
    animationType="slide"
    transparent={true}
    visible={props.active}
  >
    <Container>
      <AlertCont>
        <ContIcon source={props.icon} />

        <ContTitle>{props.title}</ContTitle>
        <ContMessage>{props.message}</ContMessage>

        <Divider35 />
        <ViewFullRow>
          <View45>
            <ButtonAux onPress={() => props.callbackCancel() }>
              <ButtonAuxLabel>{props.labelCancel}</ButtonAuxLabel>
            </ButtonAux>
          </View45>
          <View5 /><View5 />
          <View45>
            <Button onPress={() => props.callbackConfirm() }>
              <ButtonLabel>{props.labelConfirm}</ButtonLabel>
            </Button>
          </View45>
        </ViewFullRow>
      </AlertCont>
    </Container>
  </Modal>;
}

export default AlertMessage;
