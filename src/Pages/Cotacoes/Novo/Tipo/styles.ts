import styled from 'styled-components/native';
import Colors from '../../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const ContentNew = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 20px 55px 60px 55px;
  align-items: center;
`;
export const LogoNew = styled.View`
  width: 100%;
  padding: 40px 0;
  align-items: center;
`;
export const LogoNewImg = styled.Image`
  width: 220px;
  height: 70px;
`;

export const LabelNew = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Branco};
  fontSize: 14px;
  paddingTop: 10px;
`;


export const ButtomNewSelect = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  backgroundColor: ${ColorTheme.Branco};
  padding: 10px 15px;
  borderRadius: 32px
`;
export const ButtomNewIconLabelSelect = styled.View`
  flex-direction: row;
  align-items: center;
  minWidth: 100%;
`;

export const ButtomNewSelectIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
export const ButtomNewSelectTitle = styled.Text`
  padding: 0 50px 0 25px;
  color: ${ColorTheme.Rosa};
  fontSize: 18px;
  fontWeight: bold;
`;

export const ButtomNewSelectArrow = styled.Image`
  width: 18px;
  height: 18px;
`;




export const ButtomNew = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  backgroundColor: ${ColorTheme.Magenta};
  padding: 25px 35px;
  borderRadius: 32px;
  borderColor: ${ColorTheme.Branco};
  borderWidth: 1px;
`;
export const ButtomNewIconLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtomNewIcon = styled.Image`
  width: 60px;
  height: 60px;
`;
export const ButtomNewLabels = styled.View`
`;


export const ButtomNewTitle = styled.Text`
  padding: 0 50px 0 25px;
  color: ${ColorTheme.Branco};
  fontSize: 28px;
  fontWeight: bold;
`;
export const ButtomNewLabel = styled.Text`
  padding: 0 50px 0 25px;
  color: ${ColorTheme.Branco};
  fontSize: 14px;
`;

export const ButtomNewArrow = styled.Image`
  width: 18px;
  height: 18px;
`;


export const NewDetails = styled.View`
  width: 120%;
  backgroundColor: #AE446D;
  padding: 15px 25px 25px 25px;
  borderRadius: 32px;
`;

export const TollsNew = styled.View`
  width: 80%;
  padding: 35px 0;
`;