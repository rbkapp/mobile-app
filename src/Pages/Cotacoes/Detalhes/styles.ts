import styled from 'styled-components/native';

import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  paddingTop: 95px;

  backgroundColor: ${ColorTheme.Branco};
`;

export const BudGetHead = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
    
    backgroundColor: #F0F0F0;
`;
export const BudGetHeadIconInfos = styled.View`
    flexDirection: row;    
`;
export const BudGetHeadIcon = styled.Image`
    width: 45px;
    height: 45px;
`;
export const BudGetHeadInfos = styled.View`
    flexDirection: column;
    paddingLeft: 15px;
`;
export const BudGetHeadInfosTitle = styled.Text`
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  fontWeight: bold;
`;
export const BudGetHeadInfosLabel = styled.Text`
  color: ${ColorTheme.Gray3};
  fontSize: 13px;
`;
export const BudGetHeadToll = styled.View`
    paddingLeft: 10px
`;

export const BudGetHeadTollEnd = styled.TouchableOpacity`
    padding: 10px 20px;
    borderWidth: 1px;
    borderColor: ${ColorTheme.Rosa};
    borderRadius: 32px;
`;
export const BudGetHeadTollEndLabel = styled.Text`
  color: ${ColorTheme.Rosa};
  fontSize: 13px;
  fontWeight: bold;
`;


export const FinanceiroCont = styled.View`
    width: 100%;
    padding: 10px 35px 35px 35px;
`;

export const OfertaItem = styled.TouchableOpacity`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    margin: 15px 0;
    borderColor: ${ColorTheme.Gray0};
    borderWidth: 1px;
    borderRadius: 18px;
`;
export const OfertaItemInfos = styled.View`
  width: 97%;
`;
export const OfertaItemArrow = styled.Image`
    width: 24px;
    height: 24px;
`;

export const OfertaItemInfosTitle = styled.Text`
  color: ${ColorTheme.Rosa};
  fontSize: 15px;
  fontWeight: bold;
`;
export const OfertaItemInfosLabel = styled.Text`
  color: ${ColorTheme.Gray3};
  fontSize: 14px;
  padding: 3px 0;
`;
export const OfertaItemInfosValue = styled.Text`
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  fontWeight: bold;
  padding: 3px 0;
`;
export const OfertaItemInfosStatusGreen = styled.Text`
  color: #93C77B;
  fontWeight: bold;
  fontSize: 14px;
  padding: 3px 0;
`;