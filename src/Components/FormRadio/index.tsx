import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Checklabel,
} from './styles';

import { CheckParamList } from '../../../types';

const FormCheck: React.FC<CheckParamList> = (props: CheckParamList) => {
  return <>
    {props.active == true ? (<>
      <Checklabel><MaterialCommunityIcons name="radiobox-marked" color={'#d40050'} size={20} /> {props.value}</Checklabel>
    </>) : ( 
      <Checklabel><MaterialCommunityIcons name="radiobox-blank" color={'#aaa'} size={20} /> {props.value}</Checklabel>
    )}
  </>;
}

export default FormCheck;