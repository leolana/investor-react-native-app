import React from 'react';

import { View } from 'react-native';

import { formatCNPJ } from '../../../../utils';

import { Item, ItemContainer, Company, ItemTitle, ItemText, Button, Text, Header } from '../../styles';

import { withNavigation } from 'react-navigation';

import { black } from '../../../../assets/colors';

import { AntDesign } from '@expo/vector-icons';

export const ModalPaymantComponent = (props) => {
  // Props

  const { data } = props;

  const { Pagamento } = data.Detalhes;

  // Render

  return (
    <>
      <Header>
        <Item>Informações</Item>
        <AntDesign name="close" size={24} color={black} onPress={() => props.navigation.goBack()} />
      </Header>

      <ItemContainer>
        <Company>
          {Pagamento.NomeEmpresa} - {formatCNPJ(Pagamento.DocumentoEmpresa)}
        </Company>
      </ItemContainer>

      <ItemContainer>
        <View>
          <ItemTitle>ID Oportunidade </ItemTitle>
          <ItemText>{Pagamento.IdOportunidade}</ItemText>
        </View>

        <ItemTitle>
          Parcela {Pagamento.IndiceParcela}/{Pagamento.Prazo}
        </ItemTitle>
      </ItemContainer>

      <Button onPress={() => props.navigation.navigate('WalletReceipt', { id: data.id })}>
        <Text>Visualizar detalhes</Text>
      </Button>
    </>
  );
};

export const ModalPaymant = withNavigation(ModalPaymantComponent);
