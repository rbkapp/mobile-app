import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
`;

export const Inputline = styled.TextInput`
  width: 100%;
  justifyContent: flex-start;
  padding: 10px 20px ;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
  borderColor: ${ColorTheme.Gray1};
  borderWidth: 1px;
  borderRadius: 32px;
  backgroundColor: ${ColorTheme.Branco}
`;
