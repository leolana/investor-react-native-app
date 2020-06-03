import React, { useState, useEffect } from 'react';

import { SafeAreaView, Title, Divisor, Text, View, ScrollView } from './styles';

import { Document } from './components';

import { IconPdf, IconJpg } from '../../assets/icons';

import { Linking, FlatList } from 'react-native';

import { UrlTermosCondicoes, UrlPoliticaPrivacidade, Request } from '../../services';

import { formatDate } from '../../utils';
import { Text } from '../welcome/components/slider/styles';

export const DocumentsComponent = (props) => {
  const [identityDocument, setIdentityDocument] = useState('');

  const [residenceDocument, setResidenceDocument] = useState('');

  const getDocuments = async () => {
    const resp = await Request.GET({
      url: 'http://192.168.0.17:9090/api/v1/investidor/5aac0f9ca1c4b20010e4f1b0',
      header: 'bearer',
    });

    console.log('uma resposta diferente', resp.data.ArquivosIdentidade[0]);

    if (resp.status === 200) {
      setIdentityDocument(resp.data.ArquivosIdentidade[0]);

      setResidenceDocument(resp.data.ArquivosComprovanteResidencia[0]);
    } else alert('Error');
  };

  const renderItem = (item, title) => {
    // if (item === null) return item, title;
    console.log('DENTRO DO COMPONENT', item.Status);
    return (
      <Document
        title={title}
        name={`Arquivo: ${item.Nome}`}
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
    <ScrollView>
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
    </ScrollView>
  );
};

export const Documents = {
  screen: DocumentsComponent,
  navigationOptions: {
    headerTitle: 'Documentos',
  },
};
