import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  margin: 40px 0 0 0;
  flexDirection: column;
`;

export const DrawerList = styled.View`
  width: 100%;
  padding: 20px 0 ;
`;

export const DrawerItem = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 35px ;
`;
export const DrawerItemLabel = styled.Text`
  width: 100%;
  textAlign: left;
  color: ${ColorTheme.Roxo};

  fontSize: 18px;
  fontWeight: bold;
`;


export const LineDivider = styled.View`
  width: 100%;
  height: 1px;
  backgroundColor: ${ColorTheme.Gray0};
`;

export const Tolls = styled.View`
  width: 100%;
  flexDirection: row;
  margin: 40px 0;
  justify-content: space-between;
`;



export const LoginBtn = styled.TouchableOpacity`
  padding: 10px 24px;
  margin: 0 0 0 35px;
  backgroundColor: #FBE5ED;
  borderRadius: 32px;
`;
export const LoginLabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Rosa};

  fontSize: 14px;
  fontWeight: bold;
`;

export const CadastroBtn = styled.TouchableOpacity`
padding: 10px 24px;
  margin: 0 35px 0 0;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 32px;
`;
export const CadastroLabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Branco};

  fontSize: 14px;
  fontWeight: bold;
`;
