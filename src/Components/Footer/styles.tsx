import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  margin: 60px 0 0 0;
`;
export const Linedivider = styled.View`
  width: 100%;
  height: 1px;
  backgroundColor: ${ColorTheme.Gray0};
`;
export const FooterBtn = styled.TouchableOpacity`
  width: 100%;
`;
export const Copyfooter = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Preto};
  padding:15px 0;
  fontSize: 12px;
`;

export const FormMaster = styled.View`
  width: 100%;
  padding: 35px;
`;
export const FormLine = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: row;

  borderBottomColor: ${ColorTheme.Gray0};
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

export const Inputpassline = styled.TextInput`
  width: 84%;

  padding: 0 20px 0 0;

  color:${ColorTheme.Gray3};
  fontSize: 16px;
`;
export const Btnpass = styled.TouchableOpacity`
    width: 8%;
    marginLeft: -20px;
`;
export const Iconpass = styled.Image`
  width: 28px;
  height: 28px;
`;

