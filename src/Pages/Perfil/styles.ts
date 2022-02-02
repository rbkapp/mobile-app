import styled from 'styled-components/native';

export const Container = styled.View`
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


export const HeaderPerfil = styled.View`
    width: 100%;
    flexDirection: row;
`;

export const HeaderAvatar = styled.View`

    justify-content: flex-end;
    align-items: flex-end;
`;
export const AvatarUser = styled.Image`
    width: 100px;
    height: 100px;
    backgroundColor: #e9e7ee;
    borderRadius: 50px;
`;



export const HeaderInfos = styled.View`
    padding: 15px 0 0 25px;
`;

export const HeaderInfosNome = styled.Text`
    color: #241058;
    marginRight: 25px;
    fontSize: 16px;
    textAlign: left ;
    fontWeight: bold;
`;
export const HeaderInfosEmail = styled.Text`
    color: #888996;
    marginRight: 25px;
    fontSize: 13px;
    textAlign: left ;
    padding: 5px 0;
`;

export const AvatarEdit = styled.TouchableOpacity`
    padding: 6px;
    backgroundColor: #fff;
    borderRadius: 20px;

    shadowColor: #000;
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
  position: absolute;
  bottom: 0;
`;
export const AvatarEditImg = styled.Image`
    width: 15px;
    height: 15px;
`;

export const Suporte = styled.View`
    width: 100%;
    padding: 35px 0;
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


export const SairConta = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    margin: 35px 0;
    backgroundColor: #FBE5ED;
    borderRadius: 8px;
`;
export const SairContaLabel = styled.Text`
    width: 100%;
    textAlign: center;
    color: #D40050;
    fontSize: 16px;
`;


export const AvatarTolls = styled.View`
    width: 100%;
    padding: 20px 35px 25px 35px;

    backgroundColor: #fff;
    bottom: 0;

    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
`;
export const AvatarTollsClose = styled.TouchableOpacity`
    width: 20%;
    margin:0 40%;
    padding: 10px 0;
`;
export const AvatarTollsCloseInt = styled.View`
    width: 100%;
    height: 5px;
    borderRadius: 2.5px;

    backgroundColor: #E1E1E1;
`;

export const AvatarTollsItem = styled.TouchableOpacity`
    width: 100%;
    padding: 5px 0;
    flexDirection: row;
    margin: 10px 0;
`;
export const AvatarTollsItemImg = styled.Image`
    padding: 5px;
    borderRadius: 10px;
    width: 20px;
    height: 20px;
    marginTop: 2px;
    backgroundColor: #E9E7EE;
`;
export const AvatarTollsItemLabel = styled.Text`
    color: #888996;
    fontSize: 16px;

    padding: 0 0 0 10px;
`;
