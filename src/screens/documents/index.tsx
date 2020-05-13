import React, { useState, useEffect } from 'react';

import { SafeAreaView, Title, Divisor } from './styles';

import { Document } from './components';

import { IconPdf, IconJpg } from '../../assets/icons';

import { Linking, FlatList } from 'react-native';

import { UrlTermosCondicoes, UrlPoliticaPrivacidade, Request } from '../../services';

import { formatDate } from '../../utils';

export const DocumentsComponent = (props) => {
  const [identityDocument, setIdentityDocument] = useState(null);

  const [residenceDocument, setResidenceDocument] = useState(null);

  const getDocuments = async () => {
    const resp = await Request.GET({ url: 'http://192.168.15.91:9090/api/v1/investidor/documento', header: 'bearer' });

    console.log(resp);

    if (resp.status === 200) {
      setIdentityDocument(resp.data.ArquivosIdentidade.pop());

      setResidenceDocument(resp.data.ArquivosComprovanteResidencia.pop());
    } else alert('Error');
  };

  const renderItem = (item, title) => {
    if (item === null) return;

    return (
      <Document
        title={title}
        name={`Arquivo: ${item.MetaDados.NomeArquivo}`}
        date={`Enviado em: ${formatDate(item.DataEnvio)}`}
        status={item.Status}
      >
        <IconJpg />
      </Document>
    );
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <SafeAreaView>
      <Title>Contratos</Title>
      <Divisor />

      <Document onPress={() => Linking.openURL(UrlTermosCondicoes)} title="Termos de uso e condições - Investidor">
        <IconPdf />
      </Document>

      <Document onPress={() => Linking.openURL(UrlPoliticaPrivacidade)} title="Política de privacidade">
        <IconPdf />
      </Document>

      <Title>Documentos enviados por você</Title>
      <Divisor />

      {renderItem(identityDocument, 'Documento de Identidade')}

      {renderItem(residenceDocument, 'Comprovante de residência')}
    </SafeAreaView>
  );
};

export const Documents = {
  screen: DocumentsComponent,
  navigationOptions: {
    headerTitle: 'Documentos',
  },
};
