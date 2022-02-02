import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  width: 100%;
  align-items: center;
  backgroundColor: ${ColorTheme.Branco};

  paddingTop: 120px;
`;

export const DViewRow = styled.View`
  width: 100%;
  flexDirection: row;
`;


export const Formsteps = styled.View`
  width: 100%;
  padding:40px 60px;
`;
export const StepslineActive = styled.View`
  width: 50%;

  borderBottomColor: ${ColorTheme.Rosa};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;
export const Stepsline = styled.View`
  width: 50%;

  borderBottomColor: ${ColorTheme.Gray0};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;

export const Formstep1 = styled.View`
  width: 33.33%;
  justify-content: flex-start;
  marginTop: -13px;
`;
export const Steplabel1 = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Preto};
  padding:10px 0;
  fontSize: 14px;
  margin: 8px 0 0 -28px;
`;

export const MarkerOk = styled.View`
  width: 24px;
  height: 24px;
  padding: 8px;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 12px;
`;

export const MarkerActive = styled.View`
  width: 32px;
  height: 32px;
  padding: 8px;
  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 16px;
  marginTop: -5px;
  borderColor: ${ColorTheme.Rosa};
  borderWidth: 3px;
`;

export const MarkerInactive = styled.View`
  width: 24px;
  height: 24px;
  padding: 8px;
  backgroundColor: ${ColorTheme.Branco};
  borderRadius: 12px;
  borderColor:${ColorTheme.Gray0};
  borderWidth: 3px;
`;

export const Marker = styled.Image`
  width: 7.5px;
  height: 5.5px;
`;

export const Formstep2 = styled.View`
  width: 33.33%;
  marginTop: -13px;
  justify-content: center;
  flexDirection: row;
`;
export const Steplabel2 = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Preto};
  padding:10px 0;
  fontSize: 14px;
  margin: 8px 0 0 0;
`;

export const Formstep3 = styled.View`
  width: 33.33%;
  marginTop: -13px;
  justify-content: flex-end;
  flexDirection: row;
`;
export const Steplabel3 = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Preto};
  padding:10px 0;
  fontSize: 14px;
  margin: 14px -30px 0 0;
`;





export const FormTitle = styled.Text`
  width: 100%;
  textAlign: left;
  color: ${ColorTheme.Preto};
  padding:25px 30px 15px 30px;
  fontSize: 16px;
  fontWeight: bold;
`;




export const TollS = styled.View`
  width: 100%;
  margin: 40px 0;
  padding: 0 35px;
  flexDirection: row;
  justify-content: space-between;
`;



export const Backbtn = styled.TouchableOpacity`
  padding: 12px 36px;
  backgroundColor: ${ColorTheme.Gray0};
  borderRadius: 8px;
`;
export const Backlabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Gray3};

  fontSize: 14px;
  fontWeight: bold;
`;

export const Nextbtn = styled.TouchableOpacity`
  padding: 12px 36px;
  backgroundColor: ${ColorTheme.Rosa};
  borderRadius: 8px;
`;
export const Nextlabel = styled.Text`
  width: 100%;
  textAlign: center;
  color: ${ColorTheme.Branco};

  fontSize: 14px;
  fontWeight: bold;
`;