import styled from 'styled-components/native';

import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`

`;

export const IngressosItem = styled.View`
    width: 100%;
    margin: 5px 0;

    borderColor: ${ColorTheme.Gray0};
    borderWidth: 2px;
    borderRadius: 8px;
`;
export const IngressosItemHead = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 24px;
    backgroundColor: ${ColorTheme.Branco};

    flexDirection: row;
    borderTopLeftRadius: 8px;
    borderTopRightRadius: 8px;

    justify-content: space-between;
`;
export const ItemHeadIconTitle = styled.View`
    flexDirection: row;
`;
export const ItemHeadIcon = styled.Image`
    width: 40px;
    height: 40px;
`;

export const ItemHeadTitles = styled.View`
  width: 80%;
    flexDirection: column;
    margin: 0 -50px 0 20px;
`;


export const ItemHeadTitlesName = styled.Text`

    color: ${ColorTheme.Preto};
    fontSize: 14px;
    fontWeight: bold;
    padding: 0 0 5px 0;
`;

export const ItemHeadTitlesValue = styled.Text`

    color: #A79FBC;
    fontSize: 12px;
    fontWeight: bold;
`;


export const ItemHeadArrow = styled.Image`
    width: 20px;
    height: 20px;
    marginTop: 10px;
`;



export const IngressosCont = styled.View`
    width: 100%;
    padding: 20px;

    borderTopColor: ${ColorTheme.Gray0};
    borderTopWidth: 2px;
`;
export const IngressosInfos = styled.View`
    width: 100%;

    flexDirection: row;
    justify-content: space-between;
`;

export const InfosList = styled.View`
    flexDirection: column;
`;
export const InfosLine0 = styled.Text`
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  fontWeight: bold
`;
export const InfosLine1 = styled.Text`
  color: ${ColorTheme.Gray2};
  fontSize: 14px;
  padding: 0 0 10px 0;
`;
export const InfosAvatar = styled.Image`
  width: 80px;
  height: 80px;
  margin: 0 0 0 20px;
  borderRadius: 6px;
`;
