import styled from 'styled-components/native';

import { greyDD, grey99, white, tealish, black, greyF7 } from '../../assets/colors';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const ImgContainer = styled.View`
  position: relative;
`;

export const Img = styled.Image`
  flex: 1;
  margin-bottom: 32px;
  width: ${width - 32};
  resize-mode: cover;
`;

export const Message = styled.Text`
  top: 40%;
  width: ${width - 32};
  position: absolute;
  font-size: 15px;
  font-family: OpenSans-Bold;
  text-align: center;
  padding: 0 16px;
`;

export const ScrollView = styled.ScrollView`
  padding: 16px;
`;

export const SafeAreaView = styled.SafeAreaView`
  margin-bottom: ${(props) => props.marginBottom || 76}px;
`;

export const Retangle = styled.TouchableOpacity`
  border: 1px solid ${greyDD};
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const IconArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

export const TinyTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
`;

export const TinyText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${grey99};
`;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 16px;
`;

export const ContentArea = styled.View`
  border-color: ${greyDD};
  border-top-width: 1px;
  padding: 10px 0;
  margin: 10px 0;
`;

export const Text = styled.Text`
  font-family: OpenSans;
  font-size: 16px;
`;

export const Card = styled.View`
    border: 1px solid ${greyDD}
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 16px;
    padding-bottom: 16px;

`;

export const CardHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${greyDD};
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
  justify-content: space-between;
`;

export const HeaderData = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const ItemDate = styled.View`
  margin-left: 10px;
`;

export const ItemTitleDate = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 10px;
  color: ${grey99};
`;

export const ItemTextDate = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: ${black};
`;

export const ItemTitleValue = styled.Text`
  margin-top: 16px;
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: ${grey99};
  text-align: center;
`;

export const ItemTextValue = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 24px;
  color: ${black};
  text-align: center;
  margin-bottom: 16px;
`;

export const CardBody = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${greyDD};
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Item = styled.View`
  flex: 1;

  ${(props) => {
    if (props.horizontal)
      return `
            
                flex-direction: row;
                justify-content: center;
                align-items: center;
            
            
            `;
  }}
`;

export const Divisor = styled.View`
  border-left-width: 1px;
  border-color: ${greyDD};
`;

export const ItemTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${grey99};
  text-align: center;
`;

export const ItemText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 22px;
  color: ${black};
  text-align: center;
`;

export const ItemInfo = styled.Text`
  font-family: OpenSans;
  font-size: 10px;
  color: ${(props) => props.color || grey99};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  margin: 16px 0;
`;

export const ItemTextTime = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 18px;
  color: ${black};
  text-align: center;
  margin-left: 10px;
`;

export const ProgressArea = styled.View`
  margin: 16px 0;
`;

export const ProgressTitle = styled.Text`
  font-family: OpenSans;
  font-size: 14px;
  color: ${grey99};
`;

export const ProgressText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 14px;
  color: ${black};
`;

export const ProgressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProgressBar = styled.View`
  position: relative;
  background: ${greyF7};
  height: 20px;
  border-radius: 100px;
  overflow: hidden;
`;

export const ProgressIndicator = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 11px;
  color: ${black};
  position: absolute;
  left: 49%;
  top: 4px;
`;

export const Progress = styled.View`
  background: ${(props) => props.background || tealish};
  height: 20px;
  border-radius: 100px;
  width: ${(props) => props.completed || 0}%;
`;

export const ItemTitleInvestor = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 18px;
  color: ${black};
  text-align: center;
  margin-left: 10px;
`;

export const ItemTextInvestor = styled.Text`
  font-family: OpenSans;
  font-size: 18px;
  color: ${black};
`;

export const RetangleContent = styled.View`
  border-radius: 5px;
  padding: 16px;
  background: ${(props) => props.background || tealish};
  margin-bottom: ${(props) => props.marginBottom || 16}px;
  margin-top: ${(props) => props.marginTop || 0}px;
`;

export const RetangleTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 17px;
  color: ${(props) => props.color || white};
`;

export const RetangleText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${(props) => props.color || white};
`;

export const RetangleTinyTitle = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 12px;
  color: ${grey99};
`;

export const ItemDefaultText = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans')};
  font-size: 15px;
  color: ${black};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const ItemDefaultTitle = styled.Text`
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'OpenSans')};
  font-size: 12px;
  color: ${grey99};
`;
