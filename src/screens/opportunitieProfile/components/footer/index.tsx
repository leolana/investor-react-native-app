import React from 'react';

import {
  RetangleContent,
  RetangleText,
  RetangleTitle,
  RetangleTinyTitle,
  ItemDefaultText,
  ItemDefaultTitle,
} from './styles';

import { Title, ContentArea, ItemInfo } from '../../styles';

import { LinkList } from '../../../../components';

import { greyE3, black, grey99, greyF3F5 } from '../../../../assets/colors';

import { formatCNPJ, formatPercent, convertScoreByColor } from '../../../../utils';

import { withNavigation } from 'react-navigation';

export const FooterComponent = (props) => {
  // Props
  const { data, navigation } = props;

  // Vars

  const companyLink = [
    {
      title: 'Dados da empresa',
      onPress: () => navigation.navigate('Company', { data }),
    },
  ];

  const linkData = [
    {
      title: 'Índices financeiros',
      onPress: () => navigation.navigate('FinancialIndicators', { data }),
      disabled: false,
    },
    // {
    //   title: 'Índices complementares',
    //   onPress: () => navigation.navigate('ComplementaryIndicators', { data }),
    //   disabled: data.Empresa.IndicesFinanceiros.length <= 0,
    // },
    {
      title: 'Informações sobre sócios',
      onPress: () => navigation.navigate('SocioInformation', { data }),
    },
  ];

  return (
    <>
      <Title>Dados da empresa</Title>

      <ContentArea>
        <ItemDefaultTitle bold={true}>
          Empresa <ItemDefaultTitle>(Razão social)</ItemDefaultTitle>
        </ItemDefaultTitle>
        <ItemDefaultText marginBottom={16}>{data.Empresa.RazaoSocial}</ItemDefaultText>

        <ItemDefaultTitle bold={true}>CPF/CNPJ</ItemDefaultTitle>
        <ItemDefaultText marginBottom={16}>{formatCNPJ(data.Documento)}</ItemDefaultText>

        <LinkList data={companyLink} />

        <RetangleContent background={convertScoreByColor(data.Score)} marginTop={16}>
          <RetangleText>Porte da empresa</RetangleText>
          <RetangleTitle>{data.Empresa.Porte ? data.Empresa.Porte : 'Outros'}</RetangleTitle>
        </RetangleContent>

        <RetangleContent background={greyE3}>
          <RetangleText color={grey99}>Setor da empresa</RetangleText>
          <RetangleTitle color={black}>{data.Empresa.SetorEmpresa}</RetangleTitle>
        </RetangleContent>

        <RetangleContent marginBottom={1} background={greyF3F5}>
          <RetangleTinyTitle>Risco de crédito do setor*</RetangleTinyTitle>
          <ItemDefaultText>
            Pontuação do setor: <ItemDefaultText bold={true}>{data.Empresa.PontuacaoSetor}</ItemDefaultText>
          </ItemDefaultText>
          <ItemDefaultText>
            Probabilidade Média de Inadimplência:{' '}
            <ItemDefaultText bold={true}>{formatPercent(data.Empresa.ProbabilidadeMediaInadimplencia)}</ItemDefaultText>
          </ItemDefaultText>
        </RetangleContent>

        <ItemInfo color={black}>
          * A probabilidade média associada a classe de risco de crédito para esse segmento é de: 40,00%. Para cada 100
          empresas situadas na mesma classe de risco de crédito desse segmento, 40 poderão apresentar um dos eventos que
          caracterizam inadimplência para o modelo.
        </ItemInfo>

        <LinkList data={linkData} />
      </ContentArea>
    </>
  );
};

export const Footer = withNavigation(FooterComponent);
