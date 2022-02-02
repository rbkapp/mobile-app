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


export const EnderecoPadrao = styled.View`
  width: 100%;
  flexDirection: row;
  justify-content: space-between;
  padding: 30px 0;
`;
export const EnderecoPadraoLabel = styled.Text`
    color: #11142D;
    fontSize: 14px;
    fontWeight: bold;
`;
export const EnderecoPadraoSwitch = styled.Switch`
`;
