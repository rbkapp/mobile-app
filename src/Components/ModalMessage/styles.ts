import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`

`;
export const MessageModal = styled.TouchableOpacity`
width: 100%;
  height: 100%;
  padding: 35px;
  align-items: center;
  justify-content: center;
  backgroundColor: rgba(36, 16, 88, .2);
`;
export const MessageModalCont = styled.View`
  width: 100%;
  padding: 35px;
  align-items: center;
  justify-content: center;

  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 16px;
  shadowOpacity: 2;
  shadowRadius: 9px;

  elevation: 12;
`;
export const ModalContIcon = styled.Image`
width: 180px;
  height: 160px;
`;

export const ModalContTitle = styled.Text`
width: 100%;
  padding: 20px 0 10px 0;
  textAlign: center;

  fontSize: 18px;
  fontWeight: bold;
  color: ${ColorTheme.Roxo};
`;
export const ModalContMessage = styled.Text`
  width: 100%;
  textAlign: center;

  fontSize: 14px;
  color: ${ColorTheme.Preto};
`;
export const ModalContToll = styled.View`
  width: 40%;
  paddingTop: 35px;
  margin: 0 30%
`;

