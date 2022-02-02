import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const MoreItens = styled.View`
    width: 160px;
  padding: 15px;
  margin: 40px 0 0 -100px;
  zIndex: 99999;


  shadowColor: #000;
  shadowOpacity: 0.1;
  shadowRadius: 4.65px;

  elevation: 8;
  position:absolute;
  backgroundColor: #fff;
`;

export const MoreItem = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
`;

export const MoreItemLabel = styled.Text`
  width: 100%;

  color: #11142D;
  fontSize: 16px;
`;
export const MoreItemLabelDelete = styled.Text`
  width: 100%;

  color: #E91A44;
  fontSize: 16px;
`;
export const MoreDivider = styled.View`
  width: 100%;
  height: 1px;
  backgroundColor: #F0F0F0;
`;


export const Toll = styled.TouchableOpacity`
  padding: 10px;
`;
export const TollIcon = styled.Image`
  width: 32px;
  height: 32px;
`;
