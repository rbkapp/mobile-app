import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';
import Colors from '../../../constants/Colors';

const ColorTheme = Colors['Theme'];

interface ButtonParamList extends TouchableOpacityProps {
  active: boolean;
}
interface TitleParamList extends TextProps {
  active: boolean;
}
export const Container = styled.View`
`;
export const ItemList = styled.TouchableOpacity<ButtonParamList>`
  width: 100%;
  flexDirection: row;
  margin: 10px 0;
  padding: 15px;
  borderRadius: 12px;
  borderWidth: 2px;
  borderColor: ${(props) => (props.active ? '#D40050' : '#A79FBC')};
`;

export const ItemListIcon = styled.Image<TitleParamList>`
  width: 24px;
  height: 24px;
  tintColor: ${(props) => (props.active ? '#D40050' : '#A79FBC')};
`;
export const ItemListInfos = styled.View`
  padding: 0 20px 0 10px;
`;
export const ItemListInfosTitle = styled.Text<TitleParamList>`
  fontSize: 14px;
  color: ${(props) => (props.active ? '#D40050' : '#A79FBC')};
`;
export const ItemListInfosDescription = styled.Text<TitleParamList>`
  fontSize: 12px;
  paddingTop: 5px;
  color: ${(props) => (props.active ? '#D40050' : '#A79FBC')};
`;
