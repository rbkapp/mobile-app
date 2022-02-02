import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const CadastroForm = styled.KeyboardAvoidingView`
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
`;
export const Inputline = styled.TextInput`
  width: 92%;

  padding: 0 20px;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;
export const Inputpassline = styled.TextInput`
  width: 84%;

  padding: 0 20px;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;
export const Btnpass = styled.TouchableOpacity`
    width: 8%;
`;
export const Iconpass = styled.Image`
  width: 28px;
  height: 28px;
`;

export const FormTools = styled.View`
  width: 100%;
  padding: 25px 0;
  flexDirection: column;

  borderBottomColor: ${ColorTheme.Gray0};
  borderWidth: 0px;
  borderBottomWidth: 1px;
`;
export const Formtipo = styled.View`
  width: 100%;
  flexDirection: row;
`;
export const Tipolabel = styled.Text`
    width: 100%;
    padding: 15px 0;
  color: ${ColorTheme.Preto};
  fontSize: 18px;
`;

export const Checkbox = styled.TouchableOpacity`
  align-items: flex-start;
  flexDirection: row;
`;

export const Check = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0 ;

  backgroundColor: ${ColorTheme.Branco};
  borderColor: ${ColorTheme.Preto};
  borderWidth: 1px;
  borderRadius: 4px;
`;
export const Checked = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0 ;

  backgroundColor: ${ColorTheme.Branco};
  borderColor: ${ColorTheme.Preto};
  borderWidth: 1px;
  borderRadius: 4px;
`;
export const Checklabel = styled.Text`
  color: ${ColorTheme.Preto};
  padding: 0 30px 0 0;
`;

export const MaterialCommunityIcons = styled.Text`
  color: ${ColorTheme.Gray2};
  size: 22px;
`;




export const Cadastrobox = styled.View`
  width: 100%;
  padding: 30px 0 20px 0;
  flexDirection: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Cadastrolabel = styled.Text`
  color: ${ColorTheme.Preto};
  padding: 0;
`;


export const Loginaction = styled.TouchableOpacity`
  padding: 0;
`;
export const Loginactionlabel = styled.Text`
  color: ${ColorTheme.Rosa};
`;



export const Actionbtn = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 14px;
`;
export const Actionlabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Branco};

  fontSize: 20px;
  fontWeight: bold;
`;

export const Divider = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Gray0};
`;

export const Glogin = styled.TouchableOpacity`
  flexDirection: row;
  padding: 20px 0;
  margin: 20px 0 50px 0;
  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 14px;
  justify-content: center;

  shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
`;
export const Gicon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const Glabel = styled.Text`
  color: ${ColorTheme.Preto};
  margin: 0 0 0 10px;
`;