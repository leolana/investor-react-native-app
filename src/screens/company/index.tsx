import React from 'react';

import {
  SafeAreaView,
  ContentArea,
  Title,
  ScrollView,
  ItemDefaultTitle,
  ItemDefaultText,
  SocialMedia,
  Touchable,
} from './styles';

import HTML from 'react-native-render-html';

import { formatCNPJ, formatDate } from '../../utils';

import { IconFacebook, IconInstagram, IconLinkedin, IconTwitter, IconVimeo } from '../../assets/icons';

import { Linking } from 'react-native';

export const CompanyComponent = (props) => {
  // props

  const { navigation } = props;

  // vars

  const data = navigation.getParam('data', null);

  // methods

  const formatAddress = (address) => {
    const { Bairro, Cep, Cidade, Complemento, Logradouro, Numero, Uf } = address;

    return `${Logradouro}, ${Numero} - ${Complemento ? Complemento + ',' : ''} ${Bairro}, ${Cidade}, ${Uf}, ${Cep}`;
  };

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>Sobre a empresa</Title>

        <ContentArea>
          <HTML html={data.Empresa.InformacaoInstitucional} />
        </ContentArea>

        <Title>Dados da empresa</Title>

        <ContentArea>
          <ItemDefaultTitle bold={true}>
            Empresa <ItemDefaultTitle>(Razão social)</ItemDefaultTitle>
          </ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{data.Empresa.RazaoSocial}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>CPF/CNPJ</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{formatCNPJ(data.Documento)}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Nome fantasia</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{data.Empresa.NomeFantasia}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Data de fundação</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{formatDate(data.Empresa.DataFundacao)}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Número de funcionários</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{data.Empresa.QuantidadeEmpregados}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Endereço</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{formatAddress(data.Empresa.Endereco)}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Site</ItemDefaultTitle>
          <ItemDefaultText marginBottom={16}>{data.Empresa.Site}</ItemDefaultText>

          <ItemDefaultTitle bold={true}>Redes sociais</ItemDefaultTitle>

          <SocialMedia>
            <Touchable onPress={() => Linking.openURL(data.Empresa.Facebook)} disabled={!data.Empresa.Facebook}>
              <IconFacebook />
            </Touchable>

            <Touchable onPress={() => Linking.openURL(data.Empresa.Instagram)} disabled={!data.Empresa.Instagram}>
              <IconInstagram />
            </Touchable>

            <Touchable onPress={() => Linking.openURL(data.Empresa.Twitter)} disabled={!data.Empresa.Twitter}>
              <IconTwitter />
            </Touchable>

            <Touchable onPress={() => Linking.openURL(data.Empresa.Linkedin)} disabled={!data.Empresa.Linkedin}>
              <IconLinkedin />
            </Touchable>

            <Touchable onPress={() => Linking.openURL(data.Empresa.Vimeo)} disabled={!data.Empresa.Vimeo}>
              <IconVimeo />
            </Touchable>
          </SocialMedia>
        </ContentArea>

        <Title>Motivo da solicitação do empréstimo</Title>

        <ContentArea>
          <HTML html={data.Motivo} />
        </ContentArea>

        <Title>Análise sobre a empresa</Title>

        <ContentArea>
          <HTML html={data.AnaliseEmpresa} />
        </ContentArea>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Company = {
  screen: CompanyComponent,
  navigationOptions: {
    headerTitle: 'Dados da empresa',
  },
};
