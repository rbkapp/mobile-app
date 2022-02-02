import React, { useState, useEffect } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import {
    Container,
    MessageModal, MessageModalCont, ModalContIcon, ModalContTitle, ModalContMessage, ModalContToll,
} from './styles';

import { Button, ButtonLabel } from '../../Styles'
import { ModalMessageParamList } from '../../../types';

import Infos from '../../../constants/Infos';
const async_key = Infos['Key'].AsyncStorage;

const ModalMessage: React.FC<ModalMessageParamList> = (props: ModalMessageParamList) => {
    useEffect(() => {
    });

    return (<Container>
        <MessageModal>
            <MessageModalCont>
                <ModalContIcon source={props.icon} />
                <ModalContTitle>{props.title}</ModalContTitle>
                <ModalContMessage>{props.message}</ModalContMessage>
                <ModalContToll>
                    <Button onPress={() => props.onPress }>
                        <ButtonLabel>Ok</ButtonLabel>
                    </Button>
                </ModalContToll>
            </MessageModalCont>
        </MessageModal>
    </Container>);
}

export default ModalMessage;