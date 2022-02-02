import styled from 'styled-components/native';

const roza1 = 'D40050';

export const Container = styled.View`
  
`;
export const Loginform = styled.View`
  width: 100%;
  padding: 0 35px;
  flexDirection: column;
`;

export const FormLine = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: row;

  borderBottomColor: #a79fbc;
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

  color: #666;
  fontSize: 16px;
`;
export const Inputpassline = styled.TextInput`
  width: 84%;

  padding: 0 20px;

  color: #666;
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

  borderBottomColor: #F0F0F0;
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
  color: #11142D;
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

  backgroundColor: #fff;
  borderColor: #11142D;
  borderWidth: 1px;
  borderRadius: 4px;
`;
export const Checked = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0 ;

  backgroundColor: #fff;
  borderColor: #11142D;
  borderWidth: 1px;
  borderRadius: 4px;
`;
export const Checklabel = styled.Text`
  color: #11142D;
  padding: 0 30px 0 0;
`;


export const Cadastrobox = styled.View`
  width: 100%;
  padding: 30px 0 20px 0;
  flexDirection: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Cadastrolabel = styled.Text`
  color: #11142D;
  padding: 0;
`;


export const Loginaction = styled.TouchableOpacity`
  padding: 0;
`;
export const Loginactionlabel = styled.Text`
  color: #d40050;
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