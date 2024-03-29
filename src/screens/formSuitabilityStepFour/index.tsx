import React, { useEffect, useState } from 'react';

import { Request, UrlSuitabilityProfile, UrlGetSuitability } from '../../services';

import { SafeAreaView, ScrollView, Button, ButtonText, Title, Info, Gratters, Bold, Name, Faixa } from './styles';

import { useSelector } from 'react-redux';

import { Loading } from '../../components';

import onInit from '../../store/actions/getAccountData';

export const FormSuitabilityFour = (props) => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  const userId = useSelector((store) => store.account.accountData.UsuarioId);

  const getText = (tipo) => {
    if (tipo === 'Conservador') {
      setText(`
			Verificamos que você busca rendimentos modestos, o investidor conservador possui a segurança como referência para as suas aplicações, assumindo os menores riscos possíveis. Em razão da sua baixa tolerância ao risco, mantém em sua carteira percentual reduzido de produtos de renda variável, dando preferência aos produtos de renda fixa.

			Dessa forma, esteja ciente dos riscos e benefícios de investir através do empréstimo coletivo (peer-to-peer lending).

			Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    } else if (tipo === 'Moderado') {
      setText(`
			Você procura equilibrar rentabilidade com risco. É um investidor que prefere a segurança da renda fixa, mas também aplica parte de seus recursos em renda variável, visando retornos acima da média do mercado. 

			Por isso, ficamos felizes em informar que você já pode começar seus investimentos conosco. 

			Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    } else if (tipo === 'Arrojado') {
      setText(`
			Você busca sempre alta rentabilidade, mesmo que corra riscos de perder parte do patrimônio. Assume posições mais concentradas e especulativas como forma de alcançar um maior retorno.

			Você tem ciência dos riscos e benefícios de investir atráves do empréstimo coletivo (peer-to-peer lending).

			Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    } else if (tipo === 'Super Agressivo' || tipo === 'Agressivo') {
      setText(`
			Você possui total conhecimento e amplo domínio dos produtos de investimento. Você busca retornos muito expressivos no curto prazo, suportando quaisquer riscos.

			Você tem ciência dos riscos e benefícios de investir atráves do empréstimo coletivo (peer-to-peer lending).

			Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    }
  };

  const avancarTelaInicial = async () => {
    setLoading(true);
    const success = await onInit();
    if (success) {
      props.navigation.navigate('Opportunities', { authenticated: true });
    }
    setLoading(false);

    // else alert('Ocorreu um erro. Por favor tente mais tarde.');
  };

  const getInfos = async () => {
    const suitability = await Request.GET({
      url: UrlGetSuitability(userId),
      header: "bearer",
    });
    const resp = await Request.GET({
      url: UrlSuitabilityProfile(suitability.data.id),
      header: "bearer",
    });

    setName(resp.data.Nome);
    setType(resp.data.Tipo);
    getText(resp.data.Tipo);

    setLoading(false);
  };

  useEffect(() => {
    getInfos();
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Loading loading={loading}>
          <Title>
            Seu perfil de investimento é: <Bold>{type}</Bold>{' '}
          </Title>
          <Faixa />
          <Name>
            Parabéns, <Bold>{name}</Bold>.{' '}
          </Name>
          <Info>{text}</Info>
          <Gratters>
            Juntos vamos reinventar o sistema bancário ultrapassado e garantir um melhor negócio para todos!{' '}
          </Gratters>

          <Button onPress={avancarTelaInicial}>
            <ButtonText> OPORTUNIDADES ABERTAS </ButtonText>
          </Button>
        </Loading>
      </ScrollView>
    </SafeAreaView>
  );
};

export const SuitabilityFour = {
  screen: FormSuitabilityFour,
  navigationOptions: {
    headerTitle: 'Finalizar',
  },
};
