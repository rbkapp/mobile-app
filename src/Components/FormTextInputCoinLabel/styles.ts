import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
`;

export const FormLineFill = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: column;

  borderBottomColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;
export const FormLineFillTitle = styled.View`
  width: 100%;
  padding: 0 0 10px 0 ;
  margin: 0;
  flexDirection: row;
`;
export const FormLineFillIcon = styled.Image`
  width: 14px;
  height: 14px;
`;
export const FormLineFillLabel = styled.Text`
    padding: 0 0 0 10px;
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
`;
export const InputlineFill = styled.TextInput`
  width: 100%;

  padding: 0 20px;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;
