import styled from 'styled-components/native';

export const Container = styled.View`
  paddingTop: 120px;

  backgroundColor: #fff;
`;

export const OpcoesCont = styled.View`
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
export const OpcoesTitle = styled.Text`
    width: 100%; 
    color: #ADADAD;
    fontSize: 14px;
    textAlign: left ;
    fontWeight: bold;
    padding: 0 0 10px 0;
`;


export const Notificacoes = styled.View`
    width: 100%;
`;

export const NotificacoesItem = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
    padding: 8px 0;
`;

export const NotificacoesItemLabel = styled.Text`
    color: #11142D;
    fontSize: 14px;
    fontWeight: bold;
`;
export const NotificacoesItemRadio = styled.Switch`
    color: #11142D;
    fontSize: 16px;
    fontWeight: bold;
`;


export const Suporte = styled.View`
    width: 100%;
    padding: 20px 0;
`;
export const SuporteItem = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 15px;
    margin: 5px 0;
    flexDirection: row;
    justify-content: space-between;
    borderColor: #F0F0F0;
    borderWidth: 2px;
    borderRadius: 8px;
`;

export const SuporteItemIconLabel = styled.View`
    flexDirection: row;
`;
export const SuporteItemIcon = styled.Image`
    margin:0 15px 0 0;
    width: 20px;
    height: 20px;
`;
export const SuporteItemLabel = styled.Text`
    color: #A79FBC;
    fontSize: 14px;
`;

export const SuporteArrow = styled.Image`
    margin:3px 0 0 0;
    width: 12px;
    height: 12px;
`;

export const ExcluirConta = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    margin: 35px 0;
    backgroundColor: #FBE5ED;
    borderRadius: 8px;
`;
export const ExcluirContaLabel = styled.Text`
    width: 100%;
    textAlign: center;
    color: #D40050;
    fontSize: 16px;
`;