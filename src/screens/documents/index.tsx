import React, { useState, useEffect } from 'react';

import { SafeAreaView, Title, Divisor, ScrollView } from './styles';

import { Document } from './components';

import { IconPdf, IconJpg } from '../../assets/icons';

import { Linking, FlatList, Image, Alert, Modal, TouchableOpacity, Text } from 'react-native';

import { UrlTermosCondicoes, UrlPoliticaPrivacidade, UrlInvPegar, Request } from '../../services';

import { formatDate } from '../../utils';
import { useSelector } from 'react-redux';

export const DocumentsComponent = (props) => {
  const [identityDocument, setIdentityDocument] = useState([]);

  const [residenceDocument, setResidenceDocument] = useState([]);

  const [photo, setPhoto] = useState('');

  const [open, setOpen] = useState(false);

  const email = useSelector((store) => store.account.accountData.Email);

  const getDocuments = async () => {
    const resp = await Request.GET({
      url: UrlInvPegar(email),
      header: 'bearer',
    });

    if (resp.status === 200) {
      setIdentityDocument([...resp.data.ArquivosIdentidade]);
      setResidenceDocument([...resp.data.ArquivosComprovanteResidencia]);
    } else Alert.alert('Error');
  };

  const showPhoto = (foto) => {
    setPhoto(foto);
    setOpen(true);
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

        {identityDocument.map((item, index) => (
          <TouchableOpacity onPress={() => showPhoto(item.Nome)}>
            <Document
              key={index}
              title={'Documento de identidade'}
              name={`Arquivo: ${item.Nome}`}
              date={`Enviado em: ${formatDate(item.DataEnvio)}`}
              status={item.Status}
            >
              <IconJpg />
            </Document>
          </TouchableOpacity>
        ))}

        {residenceDocument.map((item, index) => (
          <Document
            key={index}
            title={'Comprovante de residência'}
            name={`Arquivo: ${item.Nome}`}
            date={`Enviado em: ${formatDate(item.DataEnvio)}`}
            status={item.Status}
          >
            <IconJpg />
          </Document>
        ))}

        <Modal animationType="slide" transparent={false} visible={open}>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
            <Text> FECHAR </Text>
          </TouchableOpacity>
          <Image
            style={{ width: '100%', height: 300, borderRadius: 15 }}
            source={{
              uri: `https://hub-app.iouu.com.br/file/${photo}`,
            }}
          />
        </Modal>
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
