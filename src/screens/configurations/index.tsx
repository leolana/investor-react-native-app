import React, { useState, useEffect } from 'react';

import { SafeAreaView, ScrollView, Content, Text } from './styles';

import { Card, Item } from './components';

import { useSelector, useDispatch } from 'react-redux';

import { setAccountData } from '../../store/actions';

import { Request, UrlPerfilConfigNotificacaoSalvar } from '../../services';
import { Alert } from 'react-native';

export const ConfigurationsComponent = () => {
  // states

  const dispatch = useDispatch();

  const accountData = useSelector((store) => store.account.accountData);

  const notifications = accountData.NotificacoesInvestidor;

  const [config, setConfig] = useState({
    EmailNewsletter: notifications.EmailNewsletter,
    EmailOportunidades: notifications.EmailOportunidades,
    EmailRepagamento: notifications.EmailRepagamento,
    SmsOportunidades: notifications.SmsOportunidades,
    SmsRepagamento: notifications.SmsRepagamento,
    WhatsOportunidates: notifications.WhatsOportunidates,
    WhatsRepagamento: notifications.WhatsRepagamento,
    SaqueAutomatico: notifications.SaqueAutomatico,
  });

  // methods

  const saveConfig = async () => {
    const data = {
      id: accountData.UsuarioId,
      options: config,
    };

    const resp = await Request.POST({ url: UrlPerfilConfigNotificacaoSalvar, data });

    if (resp.status === 200) {
      accountData.NotificacoesInvestidor = config;

      dispatch(setAccountData(accountData));
    } else Alert.alert('Não foi possível salvar as configurações. Tente novamente mais terde.');
  };

  const onValueChange = (key, value) => {
    const obj = { ...config };

    obj[key] = value;

    setConfig(obj);

    saveConfig();
  };

  // effects
  useEffect(() => {
    saveConfig();
  });

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <Card title="Saques">
          <Content>
            <Text>
              Caso habilite essa opção, toda vez que você receber um repagamento, será feito uma transfêrencia
              automática para a conta bancária cadastrada.
            </Text>
          </Content>

          <Item
            title="Saque automático"
            value={config.SaqueAutomatico}
            onValueChange={(value) => onValueChange('SaqueAutomatico', value)}
          />
        </Card>

        <Card title="Notificações por e-mail">
          <Item
            title="Aviso de novas oportunidades"
            value={config.EmailOportunidades}
            onValueChange={(value) => onValueChange('EmailOportunidades', value)}
          />

          <Item
            title="Repagamentos do investidor"
            value={config.EmailRepagamento}
            onValueChange={(value) => onValueChange('EmailRepagamento', value)}
          />

          <Item
            title="Resumo mensal de novidades e notícias"
            value={config.EmailNewsletter}
            onValueChange={(value) => onValueChange('EmailNewsletter', value)}
          />
        </Card>

        <Card title="Notificações por SMS">
          <Item
            title="Aviso de novas oportunidades"
            value={config.SmsOportunidades}
            onValueChange={(value) => onValueChange('SmsOportunidades', value)}
          />

          <Item
            title="Repagamento dos investimentos"
            value={config.SmsRepagamento}
            onValueChange={(value) => onValueChange('SmsRepagamento', value)}
          />
        </Card>

        <Card title="Notificações por WhatsApp" marginBottom="32">
          <Item
            title="Aviso de novas oportunidades"
            value={config.WhatsOportunidates}
            onValueChange={(value) => onValueChange('WhatsOportunidates', value)}
          />

          <Item
            title="Repagamento dos investimentos"
            value={config.WhatsRepagamento}
            onValueChange={(value) => onValueChange('WhatsRepagamento', value)}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Configurations = {
  screen: ConfigurationsComponent,
  navigationOptions: {
    headerTitle: 'Configurações',
  },
};
