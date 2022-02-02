import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
`;

export const AccordionButton = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 20px;
  margin: 5px 0;
  flexDirection: row;
  justify-content: space-between;

  backgroundColor: ${ColorTheme.Branco}
  borderColor: ${ColorTheme.Gray0};
  borderWidth: 1px;
  borderRadius: 8px;
`;

export const IconLabel = styled.View`
  flexDirection: row;
  marginRight: 10px;
`;
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const Label = styled.Text`
  marginLeft: 15px;
  fontSize: 15px;
  color: ${ColorTheme.Gray2};
`;
export const Arrow = styled.Image`
width: 7px;
height: 12px;
marginTop: 4px;
`;
