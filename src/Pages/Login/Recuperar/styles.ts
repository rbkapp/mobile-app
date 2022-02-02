import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  align-items: center;
  backgroundColor: ${ColorTheme.Branco};

  paddingTop: 120px;
`;


export const Logoform = styled.View`
  flexDirection: column;
  align-items: center;
  padding: 50px 0;
`;
export const Formlogo = styled.Image`
  maxWidth: 220px;
  height: 76px;
`;


export const Tabsform = styled.View`
  padding: 0px 50px 20px 50px;
  flexDirection: row;
`;
export const Activetab = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: center;
  borderTopColor: ${ColorTheme.Rosa};
  borderWidth: 0px;
  borderTopWidth: 3px;
`;
export const Inactivetab = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: center;
  borderTopColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderTopWidth: 3px;
`;
export const Labeltabactive = styled.Text`
  padding: 0 25px;
  align-items: center;
  color: ${ColorTheme.Rosa};
  fontSize: 16px;
`;
export const Labeltab = styled.Text`
  padding: 0 25px;
  align-items: center;
  color: ${ColorTheme.Preto};
  fontSize: 16px;
`;

export const Loginform = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 0 35px;
  flexDirection: column;
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

export const FormTools = styled.View`
  width: 100%;
  padding: 25px 0;
  flexDirection: row;
`;
export const Remebertoll = styled.View`
  width: 50%;
`;

export const Forgottoll = styled.View`
  width: 50%;
  paddingTop: 10px;
`;
export const ForgotPass = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const ForgotText = styled.Text`
  color: #d40050;
`;

export const Cadastrobox = styled.View`
  width: 100%;
  padding: 40px 0 30px 0;
`;
export const Cadastrolabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: #11142D;
  padding: 0 35px 15px 35px;
`;





export const Actionbtn = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  backgroundColor: #d40050;
  borderRadius: 14px;
`;
export const Actionlabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: #fff;

  fontSize: 20px;
  fontWeight: bold;
`;

export const Actionsecbtn = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  backgroundColor: #fbe5ed;
  borderRadius: 14px;
`;

export const Actionseclabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: #d40050;

  fontSize: 20px;
  fontWeight: bold;
`;


export const Divider = styled.Text`
  width: 100%;
  textAlign: center;
  color: #a79fbc;
`;

export const Glogin = styled.TouchableOpacity`
  flexDirection: row;
  padding: 20px 0;
  margin: 20px 0 50px 0;
  backgroundColor: #fff;
  borderRadius: 14px;
  justify-content: center;

  shadowColor: #000;
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
`;
export const Gicon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const Glabel = styled.Text`
  color: #11142D;
  margin: 0 0 0 10px;
`;
