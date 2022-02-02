import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
flexDirection: row;
`;

export const Icon = styled.Text`
  color: ${ColorTheme.Gray2};
`;

export const ChecklabelActive = styled.Text`
  color: ${ColorTheme.Preto};
  padding: 0 15px 0 5px;
`;
export const Checklabel = styled.Text`
  color: ${ColorTheme.Gray2};
  padding: 0 15px 0 5px;
`;
