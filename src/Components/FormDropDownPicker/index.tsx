import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  Container,
} from './styles';

import { DropDownPickerParamList } from '../../../types';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const FormTextInputCnpjLabel: React.FC<DropDownPickerParamList> = (props: DropDownPickerParamList) => {
  return <Container>
    <DropDownPicker
      items={props.items}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      containerStyle={{ height: 46 }}
      style={{ backgroundColor: ColorTheme.Branco, borderColor: ColorTheme.Gray1, borderWidth: 1, borderRadius: 32, paddingHorizontal: 20, }}
      itemStyle={{ justifyContent: 'flex-start' }}
      dropDownStyle={{ backgroundColor: ColorTheme.Branco }}
      onChangeItem={item => props.onChangeItem(item.value)}
    />
  </Container>;
}

export default FormTextInputCnpjLabel;
