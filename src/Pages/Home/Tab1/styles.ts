import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
paddingTop: 35px;
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
  minWidth: 100%;
  padding: 15px 0;
`;

export const TitleToll = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    paddingTop: 120px;
`;
export const TitleTLogo = styled.Image`
  width: 260px;
  height: 30px;
`;
export const Title1 = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 20px;

    padding:  0 0 20px 0 ;
`;
export const Title2 = styled.Text`
    color: ${ColorTheme.Gray3};
    fontSize: 14px;

    padding: 20px 0 0 0;
`;

export const TitleAction = styled.View`
    width: 100%;
    padding: 50px;
`;