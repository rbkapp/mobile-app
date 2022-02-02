import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
`;

export const FormLine = styled.View`
  width: 100%;
  padding: 10px 20px;
  margin: 15px 0;
  flexDirection: row;

  borderColor: ${ColorTheme.Gray1};
  borderWidth: 1px;
  borderRadius: 32px;
  backgroundColor: ${ColorTheme.Branco}
`;

export const Iconline = styled.Image`
  width: 22px;
  height: 22px;
  marginRight: 15px;
`;
export const Inputline = styled.TextInput`
  padding: 0 18px 0 0 ;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;