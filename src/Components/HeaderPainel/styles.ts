import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  paddingTop: 20px;
  backgroundColor: ${ColorTheme.Rosa};
  flexDirection: row;

  shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
  position: absolute;
`;

export const Headdrawer = styled.View`
  width: 33%;
  flexDirection: row;
`;
export const Drawerbtn = styled.TouchableOpacity`
  width: 38px;
  padding: 24px 28px 20px 28px;
`;
export const Drawericon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Headlogo = styled.View`
  width: 34%;
  align-items: center;
  justify-content: center;
`;
export const LogoHead = styled.Image`
  width: 105px;
  height: 12px;
`;

export const Headhelp = styled.View`
  width: 33%;
  align-items: flex-end;
`;
export const Helpbtn = styled.TouchableOpacity`
padding: 24px 28px 20px 28px;
`;
export const Helpicon = styled.Image`
  width: 30px;
  height: 30px;
  borderRadius: 15px;
`;
