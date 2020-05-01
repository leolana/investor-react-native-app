import styled from 'styled-components/native';

import { grey99, white, greenTwo } from '../../../../assets/colors';

import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width}px;
  position: absolute;
  background: ${white};
  bottom: 0px;

  ${(props) => {
    if (Platform.OS === 'ios')
      return `
                box-shadow: 1px -1px 2.5px rgba(0,0,0, 0.2);
            `;
    else
      return `
                border-top-width: 1px; 
                border-top-color: #EEEEEE;
            `;
  }};
`;

export const BottomToolbar = styled.View`
    padding: 0 16px;
    width: ${width}px
    height: 73px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`;

export const ToolbarTitle = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Bold;
`;

export const ToolbarText = styled.Text`
  font-size: 18px;
  font-family: HelveticaNeue;
  color: ${grey99};
`;

export const ToolbarButtom = styled.TouchableOpacity`
    border-radius: 5px;
    background: ${(props) => props.background || greenTwo}
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 30px;
`;

export const ToolbarButtomText = styled.Text`
  font-size: 14px;
  font-family: OpenSans-Bold;
  color: ${white};
`;
