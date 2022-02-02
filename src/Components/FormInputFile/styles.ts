import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];


export const UrlItem = styled.View`
  width: 100%;
  flexDirection: row;
  justify-content: space-between;
  padding: 5px;
  borderColor: ${ColorTheme.Gray0};
  borderRadius: 4px;
  borderWidth: 1px;
  align-items: center;
`;
export const UrlItemValue = styled.Text`
  width: 80%;
  color: ${ColorTheme.Gray3};
  fontSize: 14px;
  padding: 0 10px ;
`;
export const UrlItemBtn = styled.TouchableOpacity`
  width: 20%;
  padding: 10px 25px ;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 4px;
`;
export const UrlItemBtnIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
