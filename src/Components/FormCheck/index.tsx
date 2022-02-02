import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container, Icon,
  Checklabel, ChecklabelActive,
} from './styles';

import { CheckParamList } from '../../../types';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const FormCheck: React.FC<CheckParamList> = (props: CheckParamList) => {
  return <><Container>
    <Icon>
      {props.active == true ? (<>
        <MaterialCommunityIcons name="checkbox-marked" color={ColorTheme.Rosa} size={20} />
      </>) : (
        <MaterialCommunityIcons name="checkbox-blank-outline" color={ColorTheme.Gray2} size={20} />
      )}
    </Icon>

    {props.active == true ? (<>
      <ChecklabelActive>{props.value}</ChecklabelActive>
    </>) : (
      <Checklabel>{props.value}</Checklabel>
    )}
  </Container>
  </>;
}

export default FormCheck;
