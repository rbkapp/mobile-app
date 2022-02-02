import styled from 'styled-components/native';

export const Container = styled.View`
  paddingTop: 120px;

  backgroundColor: #fff;
`;

export const EnderecosCont = styled.View`
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

export const EnderecosItens = styled.View`
    width: 100%;
`;


export const EnderecosItem = styled.View`
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    borderWidth: 1px;
  borderRadius: 12px;
  borderColor: #F0F0F0;
`;

export const EnderecosItemTitleTolls = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
`;

export const EnderecosItemTitle = styled.Text`
    color: #241058;
    fontSize: 16px;
    textAlign: left ;
    fontWeight: bold;
    padding: 3px 0 0 0 ;
`;


export const EnderecosItemTolls = styled.View`
flexDirection: row;
`;

export const TollsEdit = styled.TouchableOpacity`
    padding: 5px;
    backgroundColor: #F4F3F4;

    borderRadius: 12px;
`;
export const TollsEditImg = styled.Image`
    width: 16px;
    height: 16px;
`;
export const TollsDelete = styled.TouchableOpacity`
    padding: 5px;
    marginLeft: 10px;
    backgroundColor: #F4F3F4;

    borderRadius: 12px;
`;
export const EnderecosItemDetalhes = styled.Text`
    width: 80%;
    padding: 5px 0 0 0;
    color: #11142D;
    fontSize: 14px;
    textAlign: left ;
`;


export const NovoBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  margin: 35px 0;
  backgroundColor: #FBE5ED;
  borderRadius: 8px;
`;
export const NovoBtnLabel = styled.Text`
width: 100%;
  color: #D40050;
  fontSize: 14px;
  textAlign: center;
`;
