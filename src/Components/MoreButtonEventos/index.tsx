import React from 'react';
import { useState } from 'react';

import {
    Container, Toll, TollIcon,
    MoreItens, MoreItem, MoreItemLabel, MoreItemLabelDelete, MoreDivider,
} from './styles';

import { MoreButtonEventosParamList } from '../../../types';
import more_icon from '../../../assets/images/more_icon.png';

const MoreButtonEventos: React.FC<MoreButtonEventosParamList> = (props: MoreButtonEventosParamList) => {
    const [moreListDisplay, setMoreListDisplay] = useState(false);

    function openClick(){
        //props.navigation.navigate('PainelEventosDetalhes', { event_id: '10' });
        setMoreListDisplay(false);
    }

    return <Container>
        <Toll onPress={() => { if (moreListDisplay == false) { setMoreListDisplay(true) } else { setMoreListDisplay(false) } }} >
            <TollIcon source={more_icon} />
        </Toll>
        { moreListDisplay == true ? (<>
        <MoreItens>
            <MoreItem onPress={() => openClick() } >
                <MoreItemLabel>Visualizar</MoreItemLabel>
            </MoreItem>
            <MoreDivider/>
            <MoreItem onPress={() => setMoreListDisplay(false) } >
                <MoreItemLabel>Editar</MoreItemLabel>
            </MoreItem>
            <MoreDivider/>
            <MoreItem onPress={() => setMoreListDisplay(false) } >
                <MoreItemLabel>Compartilhar</MoreItemLabel>
            </MoreItem>
            <MoreDivider/>
            <MoreItem onPress={() => setMoreListDisplay(false) } >
                <MoreItemLabelDelete>Excluir</MoreItemLabelDelete>
            </MoreItem>
        </MoreItens>
        </>) : (null)}
    </Container>;
}

export default MoreButtonEventos;
