import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;

  margin: 0;  
  backgroundColor: ${ColorTheme.Branco};
  position: absolute;
`;

export const Head = styled.View`
  width: 100%;
  backgroundColor: ${ColorTheme.Branco};
  flexDirection: row;

  shadowColor: ${ColorTheme.Preto};
  shadowOpacity: 0.29;
  shadowRadius: 4.65px;

  elevation: 7;
`;

export const Headdrawer = styled.View`
  width: 33%;
  flexDirection: row; 
`;
export const Drawerbtn = styled.TouchableOpacity`
  padding: 24px 24px;
`;
export const Drawericon = styled.Image`
  width: 28px;
  height: 28px;
`;

export const Headlogo = styled.View`
  width: 34%;
  align-items: center;
  justify-content: center;
`;
export const LogoHead = styled.Image`
  width: 105px;
  height: 12px;
`;

export const Headbusca = styled.View`
  width: 33%;
  align-items: flex-end;
`;

export const Buscabtn = styled.TouchableOpacity`
  padding: 24px 28px;
`;
export const Buscaicon = styled.Image`
  width: 24px;
  height: 24px;
`;




export const HeadSearch = styled.View`
  width: 100%;
  margin: 0;

  padding: 25px  30px 40px 30px;
`;
export const HeadSearchInt = styled.View`
  width: 100%;
`;

export const SearchLocal = styled.View`

  width: 100%;
  justify-content: space-around;
  padding: 8px 16px;

  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;

export const SearchLocalClose = styled.TouchableOpacity`
  width: 100%;
  flexDirection: row;

`;
export const LocalCloseIconBtn = styled.View`
  width: 100%;
  flexDirection: row;

`;
export const LocalCloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const LocalCloseLabel = styled.Text`
  color: ${ColorTheme.Rosa};
  fontSize: 14px;
  padding: 3px 0 0 10px;
`;


export const LocalCloseBtn = styled.View`
  padding: 7px 10px 5px 10px;
  marginLeft: -25px;

`;
export const LocalCloseBtnIcon = styled.Image`
  width: 10px;
  height: 10px;
`;


export const SearchTag = styled.View`
  width: 100%;
  flexDirection: row;
  margin: 20px 0 0 0 ;

  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;

export const SearcInput = styled.TextInput`
  width: 85%;
  padding: 6px 20px;
`;
export const SearchBtn = styled.TouchableOpacity`
  width: 15%;
  padding: 10px 0;
  align-items: center;
  borderLeftColor: ${ColorTheme.Gray0};
  borderWidth: 0px;
  borderLeftWidth: 1px;
  borderTopRightRadius: 8px;
  borderBottomRightRadius: 8px;
`;
export const SearchBtnIcon = styled.Image`
  width: 18px;
  height: 18px;
`;





export const HeadSearchLocal = styled.View`
  width: 100%;
  flexDirection: column;

  borderColor: ${ColorTheme.Gray0};
`;

export const SearchLocalTitle = styled.Text`
  width: 100%;

  color:${ColorTheme.Rosa};
  fontSize: 14px;
  fontWeight: bold;
`;

export const SearchLocalInput = styled.TextInput`
  width: 100%;
  padding: 6px 20px;
  margin: 10px 0 15px 0;
  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;

export const SearchLocalLine = styled.View`
  width: 100%;
  height: 1px;

  backgroundColor: ${ColorTheme.Gray0};
`;



export const SearchLocalItem = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 0;
  flexDirection: row;

  borderBottomColor: ${ColorTheme.Gray0};
  borderBottomWidth: 1px;
`;

export const SearchLocalItemIcon = styled.View`
  padding: 3px 10px 0 0 ;
`;
export const SearchLocalItemIconImg = styled.Image`
  width: 15px;
  height: 15px;
`;


export const SearchLocalItemInfos = styled.View`
  flexDirection: column;
`;
export const SearchLocalItemTitle = styled.Text`
  width: 100%;

  color: #241058;
  fontSize: 14px;
  fontWeight: bold;
`;
export const SearchLocalItemLabel = styled.Text`
  width: 100%;

  color: ${ColorTheme.Gray2};
  fontSize: 11px;
`;


export const SearchLocalVoltar = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  margin: 20px 0 0 0 ;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 8px;
`;
export const SearchLocalVoltarLabel = styled.Text`
  width: 100%;
  color: ${ColorTheme.Branco};
  textAlign: center;
  fontSize: 14px;
`;
