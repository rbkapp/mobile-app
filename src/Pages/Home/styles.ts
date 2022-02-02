import styled from 'styled-components/native';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const NewButtomContent = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
`;
export const NewButtom = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  margin:-125px 25px 0 0;  
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 35px;
  justify-content: center;
  align-items: center;
`;
export const NewButtomLabel = styled.Image`
  width: 28px;
  height: 28px;
`;