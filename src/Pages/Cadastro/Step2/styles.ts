import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  
`;

export const Endform = styled.View`
  width: 100%;
  padding: 0 35px;
  flexDirection: column;
`;

export const FormLine = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: row;

  borderBottomColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;

export const Iconline = styled.Image`
  width: 8%;
  height: 28px;
  marginRight: 20px;
  
`;
export const Inputline = styled.TextInput`
  width: 92%;

  padding: 0 20px 0 0;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;

export const TollS = styled.View`
  width: 100%;
  margin: 40px 0;
  flexDirection: row;
  justify-content: space-between;
`;
export const Toll = styled.View`
  width: 45%;
`;