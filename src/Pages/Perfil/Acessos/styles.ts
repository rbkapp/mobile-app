import styled from 'styled-components/native';

export const Container = styled.View`
  paddingTop: 120px;

  backgroundColor: #fff;
`;

export const PerfilCont = styled.View`
    width: 100%;
    padding: 45px 35px;
`;


export const ScreenTitle = styled.Text`
    width: 100%;
    color: #11142D;
    fontSize: 18px;
    textAlign: left ;
    fontWeight: bold;

    padding: 0 0 30px 0;
`;


export const DadosCont = styled.View`
    width: 100%;

`;

export const FormLineFill = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: column;

  borderBottomColor: #a79fbc;
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
  color: #A79FBC;
  fontSize: 12px;
`;
export const InputlineFill = styled.TextInput`
  width: 100%;

  padding: 0 20px;

  color: #666;
  fontSize: 16px;
`;

export const FormSelect = styled.View`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  flexDirection: column;

  borderColor: #a79fbc;
  borderWidth: 2px;
  borderRadius: 8px;
`;

export const EditarBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  margin: 15px 0;
  backgroundColor: #FBE5ED;
  borderRadius: 8px;
`;
export const EditarBtnLabel = styled.Text`
width: 100%;
  color: #D40050;
  fontSize: 16px;
  textAlign: center;
`;

export const SalvarBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  margin: 15px 0;
  backgroundColor: #D40050;
  borderRadius: 8px;
`;
export const SalvarBtnLabel = styled.Text`
width: 100%;
  color: #fff;
  fontSize: 16px;
  textAlign: center;
`;

