import React from 'react';

import { Content, Text, Title, Line, Info, Divisor } from '../../styles';

import { formatDate, formatMoney, formatCNPJ } from '../../../../utils';

export const ReceiptPayment = (props) => {
  const { id, Data, Detalhes, Valor } = props.data;

  const { NomeEmpresa, IndiceParcela, Prazo, ValorBruto, Ipmt, Multa, Ir, DocumentoEmpresa } = Detalhes.Pagamento;

  return (
    <Content>
      <Text marginBottom={16}>COMPROVANTE {id}</Text>

      <Line withoutBorder={true}>
        <Text>RECEBIDO EM: </Text>
        <Text>{formatDate(Data)}</Text>
      </Line>

      <Line>
        <Text>De: </Text>
        <Title>{NomeEmpresa}</Title>
      </Line>

      <Line>
        <Text>Parcela: </Text>
        <Text>
          {IndiceParcela} / {Prazo}
        </Text>
      </Line>

      <Line>
        <Text>Principal: </Text>
        <Text>{formatMoney(ValorBruto - Ipmt)}</Text>
      </Line>

      <Line>
        <Text>Juros: </Text>
        <Text>{formatMoney(Ipmt)}</Text>
      </Line>

      {Multa !== undefined ? (
        <Line>
          <Text>Multa por atraso: </Text>
          <Text>{formatMoney(Multa)}</Text>
        </Line>
      ) : null}

      <Line>
        <Text>Valor bruto pago: </Text>
        <Text>{formatMoney(ValorBruto)}</Text>
      </Line>

      <Line>
        <Text>Valor líquido: </Text>
        <Text>{formatMoney(Valor)}</Text>
      </Line>

      <Line>
        <Text>IR: </Text>
        <Text>{formatMoney(Ir)}</Text>
      </Line>

      <Line>
        <Text>CNPJ: </Text>
        <Text>{formatCNPJ(DocumentoEmpresa)}</Text>
      </Line>
    </Content>
  );
};
