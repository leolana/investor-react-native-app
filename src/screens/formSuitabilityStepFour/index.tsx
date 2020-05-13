import React, { useEffect, useState } from 'react';

import { Request } from '../../services';

import { SafeAreaView, ScrollView, Button, ButtonText, Title, Info, Gratters, Bold, Name, Faixa } from './styles';

export const FormSuitabilityFour = (props) => {
  const [tipoPerfil, setTipoPerfil] = useState('');
  const [nome, setNome] = useState('');
  const [texto, setTexto] = useState('');

  const getTexto = (tipo) => {
    if (tipo == 'Conservador') {
      setTexto(`Verificamos que você busca rendimentos modestos, o investidor conservador possui a segurança como referência para as suas aplicações, assumindo os menores riscos possíveis. Em razão da sua baixa tolerância ao risco, mantém em sua carteira percentual reduzido de produtos de renda variável, dando preferência aos produtos de renda fixa.
Dessa forma, esteja ciente dos riscos e benefícios de investir através do empréstimo coletivo (peer-to-peer lending).
Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    }
    if (tipo == 'Moderado') {
      setTexto(`Você procura equilibrar rentabilidade com risco. É um investidor que prefere a segurança da renda fixa, mas também aplica parte de seus recursos em renda variável, visando retornos acima da média do mercado. 
Por isso, ficamos felizes em informar que você já pode começar seus investimentos conosco. 
Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    }

    if (tipo == 'Arrojado') {
      setTexto(`Você busca sempre alta rentabilidade, mesmo que corra riscos de perder parte do patrimônio. Assume posições mais concentradas e especulativas como forma de alcançar um maior retorno.
Você tem ciência dos riscos e benefícios de investir atráves do empréstimo coletivo (peer-to-peer lending).
Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    }

    if (tipo == 'Super Agressivo' || tipo == 'Agressivo') {
      setTexto(`Você possui total conhecimento e amplo domínio dos produtos de investimento. Você busca retornos muito expressivos no curto prazo, suportando quaisquer riscos.
Você tem ciência dos riscos e benefícios de investir atráves do empréstimo coletivo (peer-to-peer lending).
Esperamos que este seja o começo de uma parceria de muito sucesso entre você e a IOUU.`);
    }
  };

  const getInformacoes = async () => {
    const resp = await Request.GET({
      url: 'https://hub-test.iouu.com.br/iouu/suitability/5eb01d7c6a6d3b0010855eb5',
    });
    setNome(resp.data.Nome);
    setTipoPerfil(resp.data.Tipo);
    getTexto(resp.data.Tipo);
  };

  useEffect(() => {
    getInformacoes();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Title>
          Seu perfil de investimento é: <Bold>{tipoPerfil}</Bold>{' '}
        </Title>
        <Faixa />
        <Name>
          Parabéns, <Bold>{nome}</Bold>.{' '}
        </Name>
        <Info>{texto}</Info>
        <Gratters>
          Juntos vamos reinventar o sistema bancário ultrapassado e garantir um melhor negócio para todos!{' '}
        </Gratters>

        <Button onPress={() => props.navigation.navigate('Opportunities')}>
          <ButtonText> OPORTUNIDADES ABERTAS </ButtonText>
        </Button>
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
