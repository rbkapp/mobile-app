import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  padding: 35px;
  backgroundColor: ${ColorTheme.Branco};
  width: 100%;
  flex: 1;
`;

export const EventTitle = styled.Text`
  width: 100%;
    color: ${ColorTheme.Gray2};
    fontSize: 16px;
    fontWeight: bold;
    padding: 0 0 10px 0;
`;
export const EventLabel = styled.Text`
  width: 100%;
    color: ${ColorTheme.Gray2};
    fontSize: 14px;
    padding: 35px 0;
`;

export const EventIngressos = styled.View`
  width: 100%;
  padding: 15px 0;
`;

export const TitleToll = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
`;
export const Title2 = styled.Text`
    color: ${ColorTheme.Gray2};
    fontSize: 14px;
    fontWeight: bold;

    padding: 12px 0 0 0;
`;

export const Toll = styled.TouchableOpacity`
  padding: 10px;
`;
export const TollIcon = styled.Image`
  width: 32px;
  height: 32px;
`;
