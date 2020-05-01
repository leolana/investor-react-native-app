import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  padding: 16px;
  flex: 1;
`;

export const ItemText = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 15px;
`;
export const InfoText = styled.Text`
  font-size: 10px;
  font-family: ${(props) => (props.bold ? 'OpenSans-Bold' : 'HelveticaNeue')};
  margin-bottom: 32px;
`;
