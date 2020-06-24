import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import {
  Table,
  TableRow,
  TableText,
  InfoArea,
  TableSpotlightText,
  SpotlightTitle,
  Title,
  ItemText,
  Divisor,
  Printer,
  Devices,
  Calendar,
  Lock,
  Item,
  Text,
  Skeleton,
} from './styles';

import { Buttom, ButtomText } from '../../styles';

import { formatMoney, formatCode } from '../../../../utils';

import { grey99, black } from '../../../../assets/colors';

import { Request, UrlInvPegar } from '../../../../services';

import { useSelector } from 'react-redux';

import { TouchableOpacity, Dimensions, Clipboard, Alert } from 'react-native';

const { width } = Dimensions.get('screen');

export const PaymentStepComponent = (props) => {
  // Props

  const { data } = props;

  // States

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  // Vars

  const email = useSelector((store) => store.account.accountData.Email);

  // Methods

  const getInvestorData = async () => {
    const resp = await Request.GET({ url: UrlInvPegar(email), header: 'bearer' });

    if (resp.status === 200) {
      const { NomeCompleto, Endereco } = resp.data;

      setFullName(NomeCompleto);

      const { Bairro, Cep, Cidade, Complemento, Logradouro, Numero, Uf } = Endereco;

      const aux = `${Logradouro}, ${Numero} - ${
        Complemento ? Complemento + ',' : ''
      } ${Bairro}, ${Cidade}, ${Uf}, ${Cep}`;

      setAddress(aux);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(data.boleto);
    Alert.alert('Código copiado!');
  };

  // Effects

  useEffect(() => {
    async function fetchData() {
      await getInvestorData();
    }

    fetchData();

    // props.navigation.setParams({ HeaderTitle: 'PAGAMENTO' });
  }, [props.navigation]);

  // Render

  return (
    <>
      <Table>
        <TableRow showBorder={true}>
          <TableText>ID #{formatCode(data.IdOportunidade)}</TableText>
          <TableText bold={true}>{formatMoney(data.value)}</TableText>
        </TableRow>

        <TableRow>
          <TableSpotlightText>Total à pagar</TableSpotlightText>
          <TableSpotlightText bold={true}>{formatMoney(data.value - data.reinvestmentValue)}</TableSpotlightText>
        </TableRow>
      </Table>
      {fullName ? (
        <InfoArea>
          <Title textAlign="left">Dados do investidor</Title>
          <Text>{fullName}</Text>
          <Text>{address}</Text>

          <TouchableOpacity>
            <Text underline={true}>Alterar endereço do investidor</Text>
          </TouchableOpacity>
        </InfoArea>
      ) : (
        <Skeleton height={80} width={width - 32} distance={16} />
      )}

      <Title>Forma de pagamento: BOLETO BANCÁRIO</Title>

      <Divisor>
        {/* <Printer fill="none" stroke={grey99} /> */}
        <ItemText>
          <ItemText bold={true}>Código do boleto</ItemText>
          <ItemText> {data.boleto} </ItemText>
        </ItemText>
      </Divisor>

      <Divisor>
        <Devices fill="none" stroke={grey99} />

        <ItemText width={250} bold={true}>
          Copie o código do seu boleto para efetuar o pagamento por meio digital
        </ItemText>
      </Divisor>

      <Divisor>
        <Calendar fill="none" stroke={grey99} />

        <ItemText>
          O prazo de validade do boleto é de <ItemText bold={true}>1 dia útil</ItemText>
        </ItemText>
      </Divisor>

      <SpotlightTitle>Total: {formatMoney(data.value - data.reinvestmentValue)}</SpotlightTitle>

      <Buttom onPress={() => copyToClipboard()}>
        <ButtomText>COPIAR CÓDIGO DE BARRAS</ButtomText>
      </Buttom>

      <Item>
        <ItemText>
          Pagamento seguro <ItemText bold={true}>IOUU</ItemText>
        </ItemText>

        <Lock stroke={black} />
      </Item>
    </>
  );
};

export const PaymentStep = withNavigation(PaymentStepComponent);
