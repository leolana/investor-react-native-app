import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setAccountData } from '../../store/actions';

import { tealish, white, greenishBlue, darkDusk } from '../../assets/colors';

import { LinkList } from '../../components';

import { ScrollView } from 'react-native';

import { Background, Circle, SafeAreaView, Letter, Name, Header, CircleShadow, Email, ListArea } from './styles';

import { removeData } from '../../utils';

export const ProfileComponent = (props) => {
  // props

  const { navigation } = props;

  // states

  const [name, setName] = useState('');
  const [nameLetter, setNameLetter] = useState('');
  const [email, setEmail] = useState('');

  // vars

  const accountData = useSelector(({ accountData }) => accountData);

  const dispatch = useDispatch();

  const links = [
    {
      title: 'Alterar senha',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      title: 'Informações pessoais',
      onPress: () => null,
    },
    {
      title: 'Configurações',
      onPress: () => navigation.navigate('Configurations'),
    },
    {
      title: 'Documentos',
      onPress: () => navigation.navigate('Documents'),
    },
    {
      title: 'Formalizações',
      onPress: () => navigation.navigate('CCBsList'),
    },
    {
      title: 'Suitability',
      onPress: () => navigation.navigate('SuitabilityOne'),
    },
    {
      title: 'Cadastro',
      onPress: () => navigation.navigate('SignUpInvestorStepOne'),
    },
    {
      title: 'Sair',
      onPress: async () => {
        await removeData('Authorization');

        navigation.navigate('Welcome');

        dispatch(setAccountData(null));
      },
    },
  ];

  // effects

  useEffect(() => {
    if (accountData === undefined || accountData === null) return;

    if (accountData.Nome !== undefined) {
      setName(accountData.Nome || '');
      setNameLetter(accountData.Nome[0] || '');
    }

    if (accountData.Email !== undefined) setEmail(accountData.Email || '');
  }, [accountData]);

  // render

  return (
    <SafeAreaView>
      <ScrollView>
        <Header>
          <Background colors={[tealish, greenishBlue]} />

          <CircleShadow>
            <Circle size={158} borderSize={5} borderColor={white} background={[greenishBlue, darkDusk]}>
              <Letter>{nameLetter}</Letter>
            </Circle>
          </CircleShadow>
        </Header>

        <Name> {name} </Name>

        <Email> {email} </Email>

        <ListArea>
          <LinkList data={links} />
        </ListArea>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Profile = {
  screen: ProfileComponent,
  navigationOptions: {
    headerTitle: 'Perfil',
    headerLeft: null,
  },
};
