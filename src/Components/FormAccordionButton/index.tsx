import React from 'react';
import { Image } from 'react-native';

import {
  AccordionButton, IconLabel, Icon, Label, Arrow,
} from './styles';

import { FormAccordionButtonParamList } from '../../../types';

import arrow_right_icon from '../../../assets/images/arrow_right_icon.png';
import pink_arrow_right_icon from '../../../assets/images/pink_arrow_right_icon.png';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const FormAccordionButton: React.FC<FormAccordionButtonParamList> = (props: FormAccordionButtonParamList) => {
  return <AccordionButton onPress={props.onPress}>
    <IconLabel>
      <Icon source={props.icon} />
      <Label style={{ color: props.pink ? ColorTheme.Rosa : ColorTheme.Gray2 }}>{props.label}</Label>
    </IconLabel>

    <Arrow source={props.pink ? pink_arrow_right_icon : arrow_right_icon } />
  </AccordionButton>;
}

export default FormAccordionButton;
