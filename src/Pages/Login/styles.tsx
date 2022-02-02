import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  align-items: center;
  backgroundColor: ${ColorTheme.Branco};

  paddingTop: 120px;
`;


export const Logoform = styled.View`
  flexDirection: column;
  align-items: center;
  padding: 50px 0;
`;
export const Formlogo = styled.Image`
  maxWidth: 220px;
  height: 25px;
`;


export const Tabsform = styled.View`
  padding: 0px 50px 20px 50px;
  flexDirection: row;  
`;
export const Activetab = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: center;
  borderTopColor: ${ColorTheme.Rosa};
  borderWidth: 0px;
  borderTopWidth: 3px;
`;
export const Inactivetab = styled.TouchableOpacity`
  padding: 5px 0;
  align-items: center;
  borderTopColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderTopWidth: 3px; 
`;
export const Labeltabactive = styled.Text`
  padding: 0 25px;
  align-items: center;
  color: ${ColorTheme.Rosa};
  fontSize: 16px;
`;
export const Labeltab = styled.Text`
  padding: 0 25px;
  align-items: center;
  color: ${ColorTheme.Preto};
  fontSize: 16px;
`;