import styled from 'styled-components/native';

import Colors from '../../constants/Colors';
const ColorTheme = Colors['Theme'];


export const FormTextInfo = styled.Text`
  width: 100%;
  color: ${ColorTheme.Preto};
  fontSize: 16px;
  textAlign: center;
  padding: 15px 0;
`;
export const FormTextLabel = styled.Text`
  width: 100%;
  color: ${ColorTheme.Preto};
  fontSize: 16px;
  padding: 5px 0;
`;
export const FormTextItalicLabel = styled.Text`
  width: 100%;
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  fontStyle: italic;
  padding: 5px 0;
`;
export const FormTextInputLabel = styled.Text`
  width: 100%;
  color: ${ColorTheme.Gray2};
  fontSize: 14px;
  padding: 5px 0;
`;
export const FormSelectLabel = styled.Text`
  width: 100%;
  color: ${ColorTheme.Gray2};
  fontSize: 14px;
  padding: 15px 0 5px 0;
`;


export const ViewFull = styled.View`
    width: 100%;
`;
export const ViewFullRow = styled.View`
    width: 100%;
    flexDirection: row;
`;
export const ViewFullRowSpaceBetween = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
`;
export const ViewFullRowFlexEnd = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: flex-end;
`;
export const ViewFullRowFlexWrap = styled.View`
    width: 100%;
    flexDirection: row;
    flex-wrap: wrap;
`;
export const View50 = styled.View`
    width: 50%;
`;
export const View45 = styled.View`
    width: 45%;
`;
export const View5 = styled.View`
    width: 5%;
`;


export const LineDivider = styled.View`
    width: 100%;
    height: 1px;
    margin: 30px 0;
    backgroundColor: ${ColorTheme.Gray0};
`;

export const Divider10 = styled.View`
    width: 100%;
    height: 10px;
`;
export const Divider15 = styled.View`
    width: 100%;
    height: 15px;
`;
export const Divider20 = styled.View`
    width: 100%;
    height: 20px;
`;
export const Divider35 = styled.View`
    width: 100%;
    height: 35px;
`;
export const Divider60 = styled.View`
    width: 100%;
    height: 60px;
`;


export const TollBtn = styled.TouchableOpacity`
    padding: 4px;
    backgroundColor: ${ColorTheme.Gray0};
    borderRadius: 14px;
    margin: 0 10px;
`;
export const TollBtnIcon = styled.Image`
    width: 22px;
    height: 22px;
`;


export const Button = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    backgroundColor: ${ColorTheme.Rosa};
    borderRadius: 32px;
`;
export const ButtonLabel = styled.Text`
    padding: 14px 25px;
    textAlign: center;
    color: ${ColorTheme.Branco};
    fontSize: 14px;
    fontWeight: bold;
`;

export const ButtonAux = styled.TouchableOpacity`
    width: 100%;
    backgroundColor: #E7E7EA;
    borderRadius: 32px;
`;
export const ButtonAuxLabel = styled.Text`
    padding: 14px 25px;
    textAlign: center;
    color: ${ColorTheme.Rosa};
    fontWeight: bold;
    fontSize: 14px;
`;

export const ButtonAux2 = styled.TouchableOpacity`
    width: 100%;
    backgroundColor: ${ColorTheme.Branco};
    borderRadius: 32px;
`;
export const ButtonAuxLabel2 = styled.Text`
    padding: 14px 25px;
    textAlign: center;
    color: ${ColorTheme.Rosa};
    fontWeight: bold;
    fontSize: 16px;
`;

export const ButtonBack = styled.TouchableOpacity`
    width: 100%;
    padding: 14px 0;
    backgroundColor: #E7E7EA;
    borderRadius: 14px;
`;
export const ButtonBackLabel = styled.Text`
    width: 100%;
    textAlign: center;
    color: #A7A8B1;

    fontSize: 14px;
`;




export const LinkButton = styled.TouchableOpacity`
    width: 100%;
    padding: 5px 0;
`;

export const LinkButtonLabel = styled.Text`
    width: 100%;
    textAlign: center;
    color: ${ColorTheme.Rosa};

    fontSize: 14px;
`;





export const LikeItem = styled.View`
  width: 100%;
  flexDirection: row;
  padding: 20px 0 0 0 ;
`;

export const LikeButton = styled.TouchableOpacity`
    padding: 12px 20px;
    margin: 0 10px;

    borderColor: ${ColorTheme.Gray0};
    borderWidth: 1px;
    borderRadius: 8px;
`;
export const LikeButtonIcon = styled.Image`
    width: 21px;
    height: 21px;
`;




export const CheckBox = styled.TouchableOpacity`
    padding: 10px 0 0 10px;;
`;


export const ViewScreen = styled.View`
  paddingTop: 120px;
  backgroundColor: ${ColorTheme.Branco};
  width: 100%;
  flex: 1;
`;
export const ViewScreenCont = styled.View`
    width: 100%;
    padding: 45px 35px;
    flex: 1;
`;
export const ViewScreenContFull = styled.View`
    width: 100%;
    padding: 45px 0;
    flex: 1;
`;
export const ViewScreenContFullCont = styled.View`
    width: 100%;
    padding: 0 45px;
`;

export const ScreenContTitleToll = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
`;

export const ScreenContTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 18px;
    fontWeight: 700;

    padding: 12px 0 0 0;
`;
export const ScreenSuportTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 15px;
    fontWeight: 600;

    padding: 50px 0 0 0;
`;
export const ScreenSuportLabel = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 15px;
    fontWeight: 600;
`;
export const ScreenSuportSubTitle = styled.Text`
    color: ${ColorTheme.Gray2};
    fontSize: 11px;

    padding: 15px 0 0 0;
`;

export const ScreenSuportLineDivider = styled.View`
    width: 100%;
    height: 1px;
    margin: 10px 0 30px 0;
    backgroundColor: ${ColorTheme.Gray0};
`;
export const ScreenSuportCont = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 14px;
    lineHeight: 22px;
`;
export const ScreenContDescription = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 14px;

    padding: 15px 0;
`;
export const ScreenContSubTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 16px;
    fontWeight: bold;

    padding: 12px 0 0 0;
`;
export const ScreenContLabel = styled.Text`
    color: #ADADAD;
    fontSize: 13px;
    fontWeight: bold;

    padding: 15px 0 5px 0;
`;
export const ScreenFormTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 15px;
`;
export const ScreenFormLabel = styled.Text`
    color: #ADADAD;
    fontSize: 12px;
    fontWeight: bold;
`;
export const ScreenContToll = styled.TouchableOpacity`
  padding: 10px;
`;
export const ScreenContTollIcon = styled.Image`
  width: 32px;
  height: 32px;
`;





export const FormDescricao = styled.View`
  width: 100%;
  padding: 40px 0 10px 0;
`;


export const FormDescricaoCount = styled.Text`
width: 100%;
color: ${ColorTheme.Gray2};
fontSize: 12px;
padding: 10px 0;
fontStyle: italic;
`;




export const SuporteCall = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    flexDirection: row;
    justify-content: space-between;
`;
export const SuporteCallLabel = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 14px;
`;
export const SuporteCallArrow = styled.Image`
    margin: 4px 0 0 0;
    width: 12px;
    height: 12px;
`;







export const SuporteCategories = styled.View`
  width: 100%;
  padding: 0 0 10px 0;
`;

export const SuporteCategoriesLine = styled.View`
  width: 100%;
  margin: 2% 0;
  flexDirection: row;
  justify-content: space-between;
`;
export const SuporteCategory = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  backgroundColor: ${ColorTheme.Branco};
  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;
export const SuporteCategoryIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
export const SuporteCategoryLabel = styled.Text`
  color: ${ColorTheme.Preto};
  padding: 5px 0 0 0;
  fontSize: 12px;
  textAlign: center;
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




export const Instructions = styled.View`
    width: 100%;
    padding: 10px 25px 35px 25px;
    margin: 35px 0;
    backgroundColor: ${ColorTheme.Branco};
    borderColor: ${ColorTheme.Gray0};
    borderWidth: 1px;
    borderRadius: 14px;
`;
export const InstructionsTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 15px;
    fontWeight: bold;

    padding: 10px 0;
`;
export const InstructionsItem = styled.View`
    width: 100%;
    flexDirection: row;
    margin: 10px 0;
`;
export const InstructionsItemAvatar = styled.View`
  width: 34px;
  height: 34px;

  marginRight: 10px;
  align-items: center;
  justify-content: center;

  backgroundColor: #FBE5ED;
  borderRadius: 16px;
`;
export const InstructionsItemIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
export const InstructionsItemInfos = styled.View`
  marginRight: 20px;
`;
export const InstructionsItemInfosTitle = styled.Text`
    color: ${ColorTheme.Roxo};
    fontSize: 14px;
    fontWeight: bold;
    padding: 3px 0;
`;
export const InstructionsItemInfosLabel = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 12px;
`;



export const ViewScreenHistory = styled.View`
    width: 100%;
    padding: 25px 35px;

    backgroundColor: #FBFBFB;
    borderTopColor: ${ColorTheme.Gray0};
    borderTopWidth: 1px;
`;

export const HistoryItem = styled.TouchableOpacity`
    width: 100%;
    flexDirection: row;
`;
export const HistoryItemStatus = styled.View`
  width: 25px;
  marginTop: 5px;
  borderLeftColor: ${ColorTheme.Gray1};
  borderLeftWidth: 1px;
  align-items: flex-start;
`;
export const HistoryItemStatusIcon = styled.Image`
  width: 14px;
  height: 14px;
  marginLeft: -8px;
  backgroundColor: ${ColorTheme.Branco};
`;
export const HistoryItemCont = styled.View`
  flexDirection: row;
  justify-content: space-between;
  margin:0 30px 0 0;
`;

export const HistoryItemInfos = styled.View`
  width: 100%;
`;
export const HistoryItemLabel = styled.Text`
  color: #888996;
  fontSize: 14px;
  fontWeight: bold;
`;
export const HistoryItemName = styled.Text`
  width: 70%;
  padding: 5px 10px 25px 0;
  color: ${ColorTheme.Preto};
  fontSize: 14px;
`;
export const HistoryItemValue = styled.Text`
  width: 30%;
  textAlign: right;
  padding: 5px 0;
  color: ${ColorTheme.Preto};
  fontSize: 16px;
`;
export const HistoryItemValueLabel = styled.Text`
  width: 30%;
  textAlign: right;
  padding:0 0 25px 0;
  color: ${ColorTheme.Gray3};
  fontSize: 14px;
`;

export const HistoryItemDate = styled.Text`
  color: #888996;
  fontSize: 12px;
  paddingTop: 3px;
`;

export const HistoryItemIcon = styled.Image`
  width: 6px;
  height: 11px;
  marginTop: 30px;
`;




export const ModalScreeenFilter = styled.View`
  width: 100%;
  height: 100%;

  flexDirection: row;
`;

export const FilterModal = styled.TouchableOpacity`
  width: 25%;
  height: 100%;
  backgroundColor: rgba(36, 16, 88, .4);
`;
export const ScreeenFilter = styled.View`
  width: 75%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-start;

  backgroundColor: ${ColorTheme.Branco};
  shadowOpacity: 2;

  elevation: 12;
`;

export const FilterTitleClose = styled.View`
  width: 100%;
  padding: 20px;
  flexDirection: row;
  justify-content: space-between;

  backgroundColor: ${ColorTheme.Branco};
  shadowOpacity: 2;

  elevation: 12;
`;
export const FilterTitle = styled.Text`
  color: ${ColorTheme.Preto};
  fontSize: 20px;
  fontWeight: bold;


`;
export const FilterClose = styled.TouchableOpacity`
  padding: 5px;
  width: 22px;
  height: 22px;
`;
export const FilterCloseIcon = styled.Image`
  width: 24px;
  height: 24px;
`;



export const FilterItensSelected = styled.View`
  width: 100%;
  flexDirection: row;
  flex-wrap: wrap;
`;



export const FilterItem = styled.View`
  width: 100%;
  flexDirection: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  margin: 5px 0;
  backgroundColor: #EDEDED;
  borderRadius: 4px;
`;
export const FilterItemSelected = styled.View`
  flexDirection: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  margin: 5px;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 4px;
`;
export const FilterItemIconLabel = styled.View`
  flexDirection: row;
`;
export const FilterItemIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const FilterItemLabel = styled.Text`
width: 90%;
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
  fontWeight: bold;
  padding: 0 5px;
`;
export const FilterItemLabelSelected = styled.Text`
  color: ${ColorTheme.Branco};
  fontSize: 12px;
  fontWeight: bold;
`;
export const FilterItemClose = styled.TouchableOpacity`
  padding: 2px;
`;
export const FilterItemCloseIcon = styled.Image`
  width: 16px;
  height: 16px;
`;


export const FilteLineDivider = styled.View`
  width: 100%;
  height: 1px;
  margin: 15px 0;

  backgroundColor: ${ColorTheme.Gray0};
`;
export const FilterCont = styled.View`
  width: 100%;
  padding: 35px 20px 100px 20px;
`;

export const FilterLabel = styled.Text`
  width: 100%;

  color: ${ColorTheme.Preto};
  fontSize: 16px;
  fontWeight: bold;

  backgroundColor: ${ColorTheme.Branco};
`;

export const FilterTolls = styled.View`
  width: 100%;
  padding: 10px 0;
  flexDirection: row;
`;




export const LeadItem = styled.View`
  width: 100%;
  margin: 10px 0;
  padding: 10px 20px 15px 20px;

  flexDirection: row;
  justify-content: space-between;

  borderRadius: 18px;
  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
`;
export const LeadItemInfos = styled.View`
`;
export const LeadItemTitle = styled.Text`
    color: ${ColorTheme.Preto};
    fontSize: 16px;
    fontWeight: bold;

    padding: 2px 0 0 0;
`;
export const LeadItemLabel = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 14px;

    padding: 2px 0;
`;
export const LeadItemSpace = styled.View`
  width: 100%;
  height: 15px;
`;
export const LeadItemTolls = styled.View`
  flexDirection: row;
  margin: 10px 0 0 0;
`;
export const LeadItemTollItem = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  marginLeft: 10px;
  align-items: center;
  justify-content: center;

  backgroundColor: #F4F3F4;
  borderRadius: 15px;
`;
export const LeadItemTollItemIcon = styled.Image`
  width: 18px;
  height: 18px;
`;




export const ArticleHead = styled.View`
    width: 100%;
    margin: 35px 0 0 0 ;
`;

export const ArticleHeadTitle = styled.Text`
    width: 100%;
    color: ${ColorTheme.Preto};
    fontSize: 16px;
`;
export const ArticleHeadLabel = styled.Text`
    width: 100%;
    padding: 10px 0;
    color: ${ColorTheme.Gray2};
    fontSize: 12px;

    borderBottomColor: ${ColorTheme.Gray0};
  borderBottomWidth: 1px;
`;
export const ArticleCont = styled.Text`
    width: 100%;
    padding: 35px 0;
    color: ${ColorTheme.Gray3};
    fontSize: 15px;

    borderBottomColor: ${ColorTheme.Gray0};
  borderBottomWidth: 1px;
`;

export const ArticleContP = styled.Text`
    width: 100%;
    padding: 0 0 10px 0;
    color: ${ColorTheme.Gray3};
    fontSize: 15px;
`;
export const ArticleContSpan = styled.Text`
    width: 100%;
    padding: 0;
    color: ${ColorTheme.Gray3};
    fontSize: 15px;
    fontWeight: bold;
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




export const NoResultLabel = styled.Text`
    width: 100%;
    textAlign: center;
    color: #636173;
    fontSize: 13px;
`;

export const NoResultoAvatar = styled.View`
  width: 100%;
  align-items: center;
  padding:60px 0;
`;

export const NoResultoAvatarImg = styled.Image`
  width: 240px;
  height: 240px;
`;






export const NavegationLabel = styled.View`
  width: 100%;
  padding:35px 0;
  flexDirection: row;
  justify-content: center;
`;
export const LabelNormal = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 14px;
`;
export const LabelBold = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 14px;
    fontWeight: bold;
`;





export const OverlayModal = styled.View`
  width: 100%;
  height: 100%;
  backgroundColor: ${ColorTheme.Branco};
`;
export const OverlayHead = styled.TouchableOpacity`
  width: 100%;
  padding: 35px 25px  15px 25px;
  flexDirection: row;

  backgroundColor: ${ColorTheme.Branco};
`;
export const OverlayHeadIcon = styled.Image`
  width: 28px;
  height: 28px;

  margin: 0 20px 0 0;
`;
export const OverlayHeadTitle = styled.Text`
    color: ${ColorTheme.Rosa};
    fontSize: 18px;
`;
export const OverlayCont = styled.View`
  width: 100%;
`;





export const GeneralDashboard = styled.View`
  width: 100%;
  padding: 15px 0;
`;


export const GeneralLine = styled.View`
  width: 100%;
  flexDirection: row;
  padding:15px 10px;
  margin: 10px 0;

  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 8px;
  shadowOpacity: .3;
  elevation: 3;
`;
export const GeneralItem = styled.TouchableOpacity`
  width: 50%;
  flexDirection: row;
  align-items: center;
`;

export const GeneralLine2 = styled.View`
  width: 100%;
  flexDirection: row;

  margin: 10px 0;

  justify-content: space-between;
`;
export const GeneralItem2 = styled.TouchableOpacity`
  width: 47.5%;
  flexDirection: row;
  align-items: center;
  padding: 15px 30px 15px 10px;

  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 8px;
  shadowOpacity: .3;
  elevation: 3;
`;


export const GeneralItem2ArrowIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const GeneralFullItem = styled.TouchableOpacity`
  width: 100%;
  flexDirection: row;
`;
export const GeneralItemIcon = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  borderRadius: 15px;
  backgroundColor: #F4F3F4;
`;
export const ItemIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
export const GeneralItemInfos = styled.View`
  width: 92.5%;
  marginLeft: 7.5%;
`;
export const GeneralItemInfos2 = styled.View`
  width: 100%;
  padding: 5px 0 0 0;
`;
export const ItemInfosTitle = styled.Text`
  width: 80%;
    color: ${ColorTheme.Preto};
    fontSize: 13px;
    fontWeight: bold;
`;
export const ItemInfosLabel = styled.Text`
  width: 80%;
  paddingTop: 2px;
  color: ${ColorTheme.Gray2};
  fontSize: 9px;
`;
export const ItemInfosButtonLabel = styled.Text`
  width: 80%;
    color: ${ColorTheme.Roxo };
    fontSize: 8px;
    fontWeight: bold;
`;








export const ValueItem = styled.TouchableOpacity`
  width: 100%;
`;
export const ValueItemCont = styled.View`
  width: 100%;

  flexDirection: row;
  align-items: center;
  justify-content: space-between;
`;
export const ValueItemInfos = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ValueItemLabel = styled.Text`
  color: ${ColorTheme.Gray2};
  fontSize: 15px;
`;
export const ValueItemValue = styled.Text`
  padding: 5px 0;
  color: ${ColorTheme.Preto};
  fontSize: 26px;
`;
export const ValueItemSubLabel = styled.Text`
  color: ${ColorTheme.Gray2};
  fontSize: 13px;
`;
export const ValueItemSubValue = styled.Text`
  padding: 5px 0;
  color: ${ColorTheme.Preto};
  fontSize: 20px;
`;
export const ValueItemInfo = styled.Text`
  width: 100%;
  padding: 5px 10px;
  marginTop: 5px;
  color: ${ColorTheme.Gray3};
  fontSize: 11px;
  textAlign: center;

  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 4px;
`;
export const ValueItemInfoNoBorder = styled.Text`
  width: 100%;
  padding: 5px 10px;
  marginTop: 5px;
  color: ${ColorTheme.Gray3};
  fontSize: 11px;
  textAlign: left;
`;
export const ValueItemInfoNoBorderCenter = styled.Text`
  width: 100%;
  padding: 25px 0;
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
  textAlign: center;
`;
export const ValueItemIcon = styled.Image`
  width: 8px;
  height: 14px;
`;




export const PieChartView = styled.View`
  width: 50%;
`;
export const PieChartPercent = styled.View`
  width: 100%;
  height: 65px;
  flexDirection: column;
  align-items: center;
  justify-content: flex-start;
`;
export const PieChartPercentQuantity = styled.Text`
  padding: 40px 0 0  0;
  color: ${ColorTheme.Preto};
  fontSize: 24px;
`;

export const PieChartPercentLabel = styled.Text`
  marginTop: -148px;
  padding: 5px 15px;
  color: ${ColorTheme.Gray2};
  fontSize: 12px;
  textAlign: center;
  backgroundColor: ${ColorTheme.Branco}
`;
export const PieChartLabel = styled.Text`
  width: 100%;
  marginTop: -40px;
  color: ${ColorTheme.Gray3};
  fontSize: 16px;
  textAlign: center;
`;





export const ModalizeButtons = styled.TouchableOpacity`
  width: 100%;
  padding: 35px;
`;
export const ModalizeButton = styled.TouchableOpacity`
  width: 100%;
  flexDirection: row;
  padding: 8px 0;
`;
export const ModalizeButtonIcon = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;

  borderRadius: 15px;
  backgroundColor: #E9E7EE;
`;
export const ModalizeButtonIconImage = styled.Image`
  width: 18px;
  height: 18px;
`;
export const ModalizeButtonLabel = styled.Text`
  padding: 5px 0 0 0 ;
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  marginLeft: 10px;
`;





export const TopTabContainer = styled.View`
  paddingTop: 25px;
  backgroundColor: #fff;
  flex: 1;
`;




export const Pagination = styled.View`
  width: 100%;
  padding: 25px 0;
  align-items: center;
  justify-content: center;
`;
export const PaginationLabels = styled.Text`
  padding: 25px 0;
  flexDirection: row;
  align-items: center;
  justify-content: center;
`;
export const PaginationLabel = styled.Text`
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
`;
export const PaginationLabelBold = styled.Text`
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
  fontWeight: bold;
`;





export const CheckTitleStatus = styled.View`
  width: 100%;
  flexDirection: row;
  justify-content: space-between;
`;


export const CheckTitle = styled.Text`
  color: ${ColorTheme.Roxo};
  fontSize: 22px;
  fontWeight: bold;
`;
export const CheckStatus = styled.Text`
  fontSize: 22px;
  fontWeight: bold;
  paddingTop: 3px;
`;

export const CheckLineDivider = styled.View`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  backgroundColor: ${ColorTheme.Gray0};
`;
export const CheckHolderName = styled.Text`
  fontSize: 18px;
  color: ${ColorTheme.Preto};
`;
export const CheckLineInfo = styled.View`
  width: 100%;
  flexDirection: row;
`;
export const CheckInfo = styled.Text`
  fontSize: 14px;
  color: #888996;
  padding: 5px 0;
`;
export const CheckInfoBold = styled.Text`
  fontSize: 16px;
  padding: 3px 0;
  color: ${ColorTheme.Preto};
`;
export const CheckInfos = styled.View`
  width: 100%;
  margin: 20px 0 0 0 ;
  padding: 10px;
  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;





export const OverlayToll = styled.View`
  width: 100%;
  padding:35px;
`;

export const OverlayTollButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 0;

  align-items: center;
  justify-content: center;

  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;

export const OverlayTollAbsolute = styled.View`
  width: 100%;
  margin:0 0 35px 35px;
  padding: 35px;
`;
export const OverlayTollAbsoluteButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 0;
  position: absolute;
  bottom: 0;

  align-items: center;
  justify-content: center;

  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;
export const OverlayTollButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`;
export const OverlayTollButtonLabel = styled.Text`
  width: 100%;
  padding: 5px 0 0 0 ;
  color: ${ColorTheme.Preto};
  fontSize: 14px;
  textAlign: center;
`;
