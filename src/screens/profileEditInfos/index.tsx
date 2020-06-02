import React, { useEffect, useState } from 'react';

import { RadioButton } from 'react-native-paper';

import { TouchableOpacity, Linking, Text, TextInput, Alert } from 'react-native';

import { Select } from '../../components';

import Styles, { Title, ScrollView, Border, Bold, Note, Container, ContainerLine, TextLink, Label } from './styles';

import { TextInputMask } from 'react-native-masked-text';

import { Request } from '../../services';

import { Loading } from '../../components';

export const ProfileEditInfos = () => {
  const [loading, setLoading] = useState(false);
  const [PessoaPoliticamenteExposta, setPessoaPoliticamenteExposta] = useState('');
  const [email, setEmail] = useState('');
  const [Cpf, setCpf] = useState('');
  const [rendaMensal, setRendaMensal] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [Sexo, setSexo] = useState('');
  const [Nacionalidade, setNacionalidade] = useState('');
  const [Cep, setCep] = useState('');
  const [EstadoCivil, setEstadoCivil] = useState('');
  const [TelefoneFixo, setTelefoneFixo] = useState('');
  const [Celular, setCelular] = useState('');
  const [RgOrgaoEmissor, setRgOrgaoEmissor] = useState('');
  const [DataNascimento, setDataNascimento] = useState('');
  const [Naturalidade, setNaturalidade] = useState();
  const [NaturalidadeCidade, setNaturalidadeCidade] = useState('');
  const [RgEstadoEmissor, setRgEstadoEmissor] = useState('');
  const [Logradouro, setLogradouro] = useState('');
  const [Numero, setNumber] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [Uf, setUf] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Bairro, setBairro] = useState('');
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [NomeMae, setNomeMae] = useState('');
  const [NomePai, setNomePai] = useState('');

  const optionsGender = [
    { text: 'Masculino', value: 1 },
    { text: 'Feminino', value: 2 },
  ];

  const optionsMaritalStatus = [
    { text: 'Solteiro (a)', value: 1 },
    { text: 'Casado (a)', value: 2 },
    { text: 'Divorciado (a)', value: 3 },
    { text: 'Viúvo (a)', value: 4 },
  ];

  const openLinkPPE = () => {
    Linking.openURL('http://fazenda.gov.br/orgaos/coaf').catch((err) =>
      console.error('Impossível carregar página', err),
    );
  };

  const getInfos = async () => {
    if (loading) return;
    setLoading(true);
    const resp = await Request.GET({
      url: 'http://192.168.0.17:9090/api/v1/investidor/5aac0f9ca1c4b20010e4f1b0',
      header: 'bearer',
    });

    if (resp.status === 200) setInfos(resp.data);
    else Alert.alert('Encontramos um problema');
    setLoading(false);
  };

  function setInfos(el) {
    setNome(el.NomeCompleto);
    setEmail(el.Email);
    setSexo(el.Sexo);
    setEstadoCivil(el.EstadoCivil);
    setNomeMae(el.NomeMae);
    setNomePai(el.NomePai);
    setCelular(el.Celular);
    setTelefoneFixo(el.TelefoneFixo);
    setCpf(el.Cpf);
    setNacionalidade(el.Nacionalidade);
    setNaturalidade(el.Naturalidade);
    setNaturalidadeCidade(el.NaturalidadeCidade);
    setDataNascimento(el.DataNascimento);
    setRg(el.RgNumero);
    setRgOrgaoEmissor(el.RgOrgaoEmissor);
    setRgEstadoEmissor(el.RgEstadoEmissor);
    setCep(el.Endereco.Cep);
    setLogradouro(el.Endereco.Logradouro);
    setNumber(el.Endereco.Numero);
    setComplemento(el.Endereco.Complemento);
    setBairro(el.Endereco.Bairro);
    setCidade(el.Endereco.Cidade);
    setUf(el.Endereco.Uf);
    setRendaMensal(el.RendaMensal);
    setPatrimonio(el.Patrimonio);
  }

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <ScrollView>
      <Loading loading={loading}>
        <Container>
          <Title>Informações Pessoais</Title>
          <Border />

          <Label>E-mail</Label>
          <TextInput value={email} style={Styles.input} editable={false} />

          <Label>Nome Completo</Label>
          <TextInput value={nome} onChangeText={(value) => setNome(value)} style={Styles.input} editable={false} />

          <Select
            title="Sexo"
            options={optionsGender}
            onValueChange={(obj) => setSexo(obj.value)}
            value={Sexo}
            editable={false}
          />

          <Select
            title="Estado civil"
            options={optionsMaritalStatus}
            onValueChange={(obj) => setEstadoCivil(obj.value)}
            value={EstadoCivil}
          />

          <Label>Nome da mãe</Label>
          <TextInput
            value={NomeMae}
            onChangeText={(value) => setNomeMae(value)}
            style={Styles.input}
            editable={false}
          />

          <Label>Nome do pai</Label>
          <TextInput
            value={NomePai}
            onChangeText={(value) => setNomePai(value)}
            style={Styles.input}
            editable={false}
          />

          <Label>Celular</Label>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={Celular}
            onChangeText={(value) => setCelular(value)}
            style={Styles.input}
            // onBlur={() => setValidCellPhone(isValidPhone(Celular))}
          />

          <Label>Telefone</Label>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={TelefoneFixo}
            onChangeText={(value) => setTelefoneFixo(value)}
            style={Styles.input}
            // onBlur={() => setValidPhone(isValidPhone(TelefoneFixo))}
          />

          <Label>CPF</Label>
          <TextInputMask
            type={'cpf'}
            value={Cpf}
            onChangeText={(value) => setCpf(value)}
            editable={false}
            style={Styles.input}
          />

          <Label>Nacionalidade</Label>
          <TextInput value={Nacionalidade} style={Styles.input} editable={false} />

          <Label>Estado de nascimento</Label>
          <TextInput value={Naturalidade} style={Styles.input} editable={false} />

          <Label>Cidade de nascimento</Label>
          <TextInput value={NaturalidadeCidade} style={Styles.input} editable={false} />

          <Label>Data de nascimento</Label>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={DataNascimento}
            onChangeText={(value) => setDataNascimento(value)}
            style={Styles.input}
            // onBlur={validateDate}
          />

          <Label>RG</Label>
          <TextInput value={rg} style={Styles.input} editable={false} />

          <Label>Orgão emissor</Label>
          <TextInput value={RgOrgaoEmissor} style={Styles.input} editable={false} />

          <Label>Estado de emissão</Label>
          <TextInput value={RgEstadoEmissor} style={Styles.input} editable={false} />
        </Container>

        <Container>
          <Title>Endereço</Title>
          <Border />

          <Label>CEP</Label>
          <TextInputMask
            type={'zip-code'}
            value={Cep}
            onChangeText={(value) => setCep(value)}
            style={Styles.input}
            // onBlur={validaCep}
          />

          <Label>Logradouro</Label>
          <TextInput
            value={Logradouro}
            onChangeText={(value) => setLogradouro(value)}
            style={Styles.input}
            editable={false}
          />

          <Label>Número</Label>
          <TextInput value={Numero} onChangeText={(value) => setNumero(value)} style={Styles.input} editable={false} />

          <Label>Complemento</Label>
          <TextInput
            value={Complemento}
            onChangeText={(value) => setComplemento(value)}
            style={Styles.input}
            editable={false}
          />

          <Label>Bairro</Label>
          <TextInput value={Bairro} onChangeText={(value) => setBairro(value)} style={Styles.input} editable={false} />

          <Label>Cidade</Label>
          <TextInput value={Cidade} onChangeText={(value) => setCidade(value)} style={Styles.input} editable={false} />

          <Label>UF</Label>
          <TextInput value={Uf} onChangeText={(value) => setUf(value)} style={Styles.input} editable={false} />
        </Container>

        <Container>
          <Title>Outras informações</Title>
          <Border />

          <Label>Renda mensal aprox. (R$)</Label>
          <TextInputMask
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={rendaMensal}
            onChangeText={(value) => setRendaMensal(value)}
            style={Styles.input}
          />

          <Label>Patrimônio aprox. (R$)</Label>
          <TextInputMask
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={patrimonio}
            onChangeText={(value) => setPatrimonio(value)}
            style={Styles.input}
          />

          <TouchableOpacity onPress={openLinkPPE}>
            <TextLink>Você é uma Pessoa Politicamente Exposta ("PPE")?</TextLink>
          </TouchableOpacity>

          <ContainerLine>
            <RadioButton value="1" status={PessoaPoliticamenteExposta === '1' ? 'checked' : 'unchecked'} />
            <Text>Declaro ser PPE</Text>
          </ContainerLine>
        </Container>

        <Container>
          <Title>Dados bancários</Title>
          <Border />

          <Note>
            Para solicitar a troca de dados bancários, por favor entre em contato com nossa equipe através do telefone{' '}
            <Bold>(11) 4858-0862 </Bold> ou via e-mail <Bold>meajuda@iouu.com.br</Bold>.
          </Note>
        </Container>
      </Loading>
    </ScrollView>
  );
};

export const ProfileEdit = {
  screen: ProfileEditInfos,
  navigationOptions: {
    headerTitle: 'Editar perfil',
  },
};
