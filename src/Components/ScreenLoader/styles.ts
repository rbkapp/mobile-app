import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

const deviceHeight = Dimensions.get('window').height;

export const Container = styled.View`
  width: 100%;
  minHeight: ${deviceHeight + 60}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  zIndex: 99999;
  backgroundColor: ${ColorTheme.Branco}
`;

export const Loader = styled.Image`
  width: 160px;
  height: 160px;
`;

export const LoaderInfo = styled.Text`
  width: 100%;
  padding: 15px 25px;
  color: ${ColorTheme.Gray3};
  textAlign: center;
  fontSize: 14px;
`;
