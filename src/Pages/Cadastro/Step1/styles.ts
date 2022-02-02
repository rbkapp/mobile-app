import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`
  
`;
export const Loginform = styled.View`
  width: 100%;
  padding: 0 35px;
  flexDirection: column;
`;

export const FormLine = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: row;

  borderBottomColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;

export const Iconline = styled.Image`
  width: 8%;
  height: 28px;
  marginRight: 20px;
`;
export const Inputline = styled.TextInput`
  width: 92%;

  padding: 0 20px 0 0 ;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;




export const FormLineFill = styled.View`
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  flexDirection: column;

  borderBottomColor: ${ColorTheme.Gray1};
  borderWidth: 0px;
  borderBottomWidth: 2px;
`;
export const FormLineFillTitle = styled.View`
  width: 100%;
  padding: 0 0 10px 0 ;
  margin: 0;
  flexDirection: row;
`;
export const FormLineFillIcon = styled.Image`
  width: 14px;
  height: 14px;
`;
export const FormLineFillLabel = styled.Text`
    padding: 0 0 0 10px;
  color: ${ColorTheme.Gray3};
  fontSize: 12px;
`;
export const InputlineFill = styled.TextInput`
  width: 100%;

  padding: 0 20px;

  color: ${ColorTheme.Gray3};
  fontSize: 16px;
`;


export const FormSelect = styled.View`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  flexDirection: column;

  borderColor: ${ColorTheme.Gray1};
  borderWidth: 2px;
  borderRadius: 8px;
`;

export const FormTextLabel = styled.Text`
  width: 100%;
  color: #11142D;
  fontSize: 16px;
  padding: 5px 0;
`;


export const TollS = styled.View`
  width: 100%;
  margin: 40px 0;
  flexDirection: row;
  justify-content: space-between;
`;
export const Toll = styled.View`
  width: 45%;
`;
