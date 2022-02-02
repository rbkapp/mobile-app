import styled from 'styled-components/native';

import Colors from '../../../../../constants/Colors';
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

export const BudGetHeadMessage = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    background-color: ${ColorTheme.Branco};
    borderBottomWidth: 0.6px;
    borderColor: ${ColorTheme.Gray1};
`;
export const BudGetHeadMessageBackBtn = styled.TouchableOpacity`
    padding: 5px 10px;
`;
export const BudGetHeadMessageBackBtnIcom = styled.Image`
    width: 24px;
    height: 24px;
`;
export const BudGetHeadMessageLabel = styled.Text`
  color: ${ColorTheme.Rosa};
  fontSize: 15px;
  fontWeight: bold;
  paddingLeft: 10px;
`;




export const FinanceiroCont = styled.View`
    width: 100%;
    padding: 10px 25px 120px 25px;
`;

export const Message = styled.View`
    width: 90%;
    marginRight: 10%;
    flexDirection: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    margin: 15px 0;
    borderColor: ${ColorTheme.Gray0};
    borderWidth: 1px;
    borderRadius: 18px;
    backgroundColor: ${ColorTheme.Branco};
    shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 4;
`;
export const OfertaItemInfos = styled.View`
  width: 100%;
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



export const MessageMe = styled.View`
    width: 90%;
    flexDirection: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    margin: 15px 0;
    marginLeft: 10%;
    backgroundColor: ${ColorTheme.Rosa};
    borderRadius: 18px;

    shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
`;

export const MessageMeTitle = styled.Text`
  color: ${ColorTheme.Branco};
  fontSize: 15px;
  fontWeight: bold;
`;
export const MessageMeLabel = styled.Text`
  color: ${ColorTheme.Branco};
  fontSize: 14px;
  padding: 3px 0;
`;


export const SendMessage = styled.View`
    width: 100%;
    align-items: center;
    padding: 15px 25px;
    justify-content: flex-start;
    backgroundColor: ${ColorTheme.Rosa};
    position: absolute;
    bottom: 0;
    shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;

  borderTopWidth: 0.6px;
    borderColor: ${ColorTheme.Branco};
`;
export const SendMessageInt = styled.View`
    width: 100%;    
    flexDirection: row;
    justify-content: space-between;
    align-items: center;
    backgroundColor: ${ColorTheme.Branco};
    borderRadius: 32px;
    padding: 0 5px 0 20px;
`;
export const SendMessageIntSendBtn = styled.TouchableOpacity`
    padding: 5px 10px;
`;
export const SendMessageIntSendBtnicon = styled.Image`
    width: 24px;
    height: 24px;
`;
export const SendMessageFileBtn = styled.TouchableOpacity`
    padding: 0 0 10px 0;
`;
export const SendMessageFileBtnLabel = styled.Text`
  color: ${ColorTheme.Branco};
  width: 100%;
  textAlign: left;
  fontSize: 14px;
`;