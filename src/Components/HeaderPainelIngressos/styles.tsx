import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  paddingTop: 54px;
  backgroundColor: #241058;
  flexDirection: row;

  shadowColor: #000;
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
  position: absolute;
`;

export const Headdrawer = styled.View`
  width: 33%;
  flexDirection: row;
`;

export const Backbtn = styled.TouchableOpacity`
  width: 38px;
  padding: 18px 22px;
`;
export const Backicon = styled.Image`
  width: 26px;
  height: 26px;
`;

export const Headlogo = styled.View`
  width: 34%;
  paddingTop: 20px;
  align-items: center;
`;
export const LogoTitle = styled.Text`
  width: 100%;
  textAlign: center;
  color: #fff;
  fontSize: 18px;
  fontWeight: bold;
`;
