import React, { useState, useEffect, useCallback } from 'react';

import { Container, Background, ReceiptArea, ReceiptBody, ReceiptBorder, SafeAreaView } from './styles';

import { tealish, greenishBlue, receiptLogoColor } from '../../assets/colors';

import { IconIouu } from '../../assets/icons';

import { ReceiptPayment } from './components';

import { UrlCarteiraPegarDetalhesOperacao, Request } from '../../services';

export const WalletReceiptPage = (props) => {
  // States

  const [operationsDetails, setOperationsDetails] = useState(null);

  // Vars

  const id = props.navigation.getParam('id', null);

  // Methods

  const getDetails = useCallback(async () => {
    const resp = await Request.GET({ url: UrlCarteiraPegarDetalhesOperacao(id), header: 'bearer' });

    console.log(resp, id);

    if (resp.status === 200) {
      setOperationsDetails(resp.data);
    }
  }, [id]);

  // Effects

  useEffect(() => {
    async function fetchData() {
      await getDetails();
    }

    fetchData();
  }, [getDetails]);

  return (
    <Container>
      <Background colors={[tealish, greenishBlue]} />

      <ReceiptArea>
        <ReceiptBorder side="up" source={require('../../assets/imgs/receipt_border.png')} />

        <ReceiptBody>
          <IconIouu fill={receiptLogoColor} width={75} height={75} />

          {operationsDetails !== null ? <ReceiptPayment data={operationsDetails} /> : null}
        </ReceiptBody>

        <ReceiptBorder source={require('../../assets/imgs/receipt_border.png')} />
      </ReceiptArea>
    </Container>
  );
};

export const WalletReceipt = {
  screen: WalletReceiptPage,
  navigationOptions: {
    headerTitle: 'Comprovante',
  },
};
