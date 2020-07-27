const PROD = {
  BASE_URL_GO: 'https://apim-investor-app-prod.azure-api.net/wallet/',
  BASE_URL_PAY: 'https://apim-investor-app-prod.azure-api.net/pay/',
  BASE_URL_NODE: 'https://apim-investor-app-prod.azure-api.net/server/',
  BASE_URL_HUB: 'https://apim-investor-app-prod.azure-api.net/hub/',
};

const TEST = {
  BASE_URL_GO: 'https://apim-iouu-test.azure-api.net/wallet/',
  BASE_URL_PAY: 'https://apim-iouu-test.azure-api.net/pay/',
  BASE_URL_NODE: 'https://apim-iouu-test.azure-api.net/server/',
  BASE_URL_HUB: 'https://apim-iouu-test.azure-api.net/hub/',
};

const DESENV = {
  BASE_URL_GO: 'https://api-test.iouu.com.br/',
  BASE_URL_PAY: 'https://pay-test.iouu.com.br/',
  BASE_URL_NODE: 'https://server-test.iouu.com.br/',
  BASE_URL_HUB: 'https://hub-desenv.iouu.com.br/',
};

const { BASE_URL_GO, BASE_URL_PAY, BASE_URL_NODE, BASE_URL_HUB } = PROD;

export const UrlPegarFotoDocumento = (foto) => `${BASE_URL_HUB}file/${foto}`;

// NODE URL
export const UrlSenhaVerificar = `${BASE_URL_NODE}api/v1/emprestimos/verifica-senha`;

export const UrlInfoInvLista = `${BASE_URL_NODE}api/v1/investimentos/meus`;
export const UrlTomadorFatura = (id) => `${BASE_URL_NODE}api/v1/FaturaTomador/solicitacao/${id}`;

export const UrlNotificacoesPegar = (usuarioId) => `${BASE_URL_NODE}api/v1/user/notifications/${usuarioId}`;
export const UrlPerfilConfigNotificacaoSalvar = `${BASE_URL_NODE}api/v1/user/notifications`;
// FIM NODE

// Substituidas
export const UrlGetSuitability = (UserId) => `${BASE_URL_GO}api/v1/suitability/user/${UserId}`;
export const UrlSaveSuitability = (UserId, tipo) => `${BASE_URL_GO}api/v1/suitability/salvar/${UserId}/${tipo}`;
export const UrlSuitabilityProfile = (SuitabilityId) => `${BASE_URL_HUB}iouu/suitability/${SuitabilityId}`;

export const UrlCarteiraBancoPegar = (codigoBanco) => `${BASE_URL_GO}api/v1/banco/${codigoBanco}`;

export const UrlRecuperarSenha = `${BASE_URL_GO}send-reset-password-email`;
export const UrlPerfilSenhaAlterar = `${BASE_URL_GO}api/v1/usuario/atualizar/senha`;

export const UrlLocalizacaoEstadosPegar = `${BASE_URL_GO}api/v1/estados`;
export const UrlLocalizacaoCidadesPegar = (uf) => `${BASE_URL_GO}api/v1/estados/${uf}/cidades`;

export const UrlSolicitacaoReservaPegar = (reservaId) => `${BASE_URL_NODE}api/v1/reserva/solicitacao/${reservaId}`;
export const UrlSolicitacaoReservaInvPegar = (solicitacaoID) =>
  `${BASE_URL_GO}api/v1/reserva/solicitacao/${solicitacaoID}`;

export const UrlSolicitacaoPegar = (solicitacaoID) => `${BASE_URL_GO}api/v1/solicitacoes/${solicitacaoID}`;
// Fim substituidas

export const UrlContaPegar = `${BASE_URL_GO}api/v1/conta/informacoes`;

export const UrlLogin = `${BASE_URL_GO}sign_in`;
export const UrlLoginRedeSocial = (provedor, token) => `${BASE_URL_GO}oauth/${provedor}/callback/${token}`;

export const UrlListaOportunidades = (pagina, scores) => `${BASE_URL_GO}api/v1/solicitacoes/listar/${pagina}/${scores}`;

export const UrlSuitabilitySalvar = (usuarioId, passo) =>
  `${BASE_URL_GO}api/v1/suitability/salvar/${usuarioId}/${passo}`;
export const UrlSuitabilityPegar = (usuarioId) => `${BASE_URL_GO}api/v1/suitability/user/${usuarioId}`;
export const UrlSuitabilityPegarPerfil = (suitabilityId) => `${BASE_URL_HUB}iouu/suitability/${suitabilityId}`;

export const UrlCadastroUsuario = `${BASE_URL_GO}sign_up`;
export const UrlCadastroInvestidor = `${BASE_URL_GO}api/v1/investidores`;
export const UrlCadastroInvestidorAtualizar = (investidorId, passo) =>
  `${BASE_URL_GO}api/v1/investidor/atualizar/${investidorId}/${passo}`;
export const UrlCadastroInvestidorDocs = (investidorId, docTipo) =>
  `${BASE_URL_GO}api/v1/investidor/enviar/docs/b64/${investidorId}/${docTipo}`;
export const UrlPegarCpfInvestidor = (cpf) => `${BASE_URL_GO}/api/v1/investidor/cpf/${cpf}`;

export const UrlLocalizacaoCEPPegar = (cep) => `${BASE_URL_HUB}cep/${cep}`;

export const UrlBancoListaPegar = `${BASE_URL_HUB}iouu/bancos`;

export const UrlCarteiraEnviarTransferencia = `${BASE_URL_GO}api/v1/wallet/agendamento/saque`;

export const UrlCarteiraExtratoPaginado = (pagina) => `${BASE_URL_GO}api/v1/wallet/extrato/pagina/${pagina}`;
export const UrlCarteiraPegarDetalhesOperacao = (id) => `${BASE_URL_GO}api/v1/wallet/operacao/detalhe/${id}`;
export const UrlCarteiraSaldo = `${BASE_URL_GO}api/v1/wallet/saldo`;

export const UrlInvPegar = (email) => `${BASE_URL_GO}api/v1/investidor/email/${email}`;

export const UrlUsuarioPegar = (email) => `${BASE_URL_GO}api/v1/usuario/email/${email}`;

export const UrlUsuarioMudarSenha = `${BASE_URL_GO}api/v1/usuario/atualizar/senha`;

export const UrlSolicitacaoReservaInvCancelar = (solicitacaoId) =>
  `${BASE_URL_GO}api/v1/reserva/cancelar/${solicitacaoId}`;
export const UrlSolicitacaoReservaInvCriar = (solicitacaoId) =>
  `${BASE_URL_GO}api/v1/reserva/criar/solicitacao/${solicitacaoId}`;

export const UrlBoletoCriar = () => `${BASE_URL_PAY}api/v1/ABC/investidor/criar`;
export const UrlRegistroDeposito = () => `${BASE_URL_PAY}api/v1/reserva/criar/deposito`;
export const UrlRegistroDebito = () => `${BASE_URL_PAY}api/v1/reserva/criar/debito`;

export const UrlReservationCreate = (solicitacaoId) =>
  `${BASE_URL_GO}api/v1/reserva/criar/solicitacao/${solicitacaoId}`;
export const UrlReservationDelete = (reservaId) => `${BASE_URL_GO}api/v1/reserva/cancelar/${reservaId}`;
export const UrlReservationCreateBankSlip = (reservaId) => `${BASE_URL_GO}api/v1/gerarBoleto/${reservaId}`;

export const UrlEstatisticasPegar = (usuarioId) => `${BASE_URL_GO}api/v1/GetEstatisticas/${usuarioId}`;
export const UrlEstatisticasPlataformaPegar = (tipo) =>
  `${BASE_URL_GO}api/v1/GetEstatisticasPlataformaInvestidores/${tipo}`;

export const UrlPerfilInvestidorAtualizar = (investidorId) => `${BASE_URL_GO}api/v1/investidor/${investidorId}`;

export const UrlCCBAssinaturaAtualizar = (reservaId) =>
  `${BASE_URL_GO}api/v1/out/atualizaCCbsInvestidoresAssinatura/${reservaId}`;

export const UrlTaxasPegar = `${BASE_URL_HUB}calculadora/taxas`;

export const UrlLinkCCBImprimir = (codigo) =>
  `https://bmpdigital.moneyp.com.br/imprimirccb.aspx?code=${codigo}&copias=1`;

export const UrlMapaEndereco = (endereco) =>
  `https://www.google.com/maps/embed/v1/place?key=AIzaSyC9YU8ifbsf9Ta6ZmpsVwIJfcXqKj4t_M8&q=${endereco}`;

export const UrlIouuFacebook = `https://www.facebook.com/IouuBrasil/`;
export const UrlIouuInstagram = `https://www.instagram.com/iouubrasil/`;
export const UrlIouuTwitter = `https://twitter.com/iouubrasil`;
export const UrlIouuLinkedin = `https://www.linkedin.com/company/iouu`;
export const UrlIouuVimeo = `https://vimeo.com/iouubrasil`;
export const UrlIouuAjuda = `https://ajuda.iouu.com.br/`;

export const UrlTermosCondicoes = `https://iouu.com.br/termos-e-condicoes/`;
export const UrlPoliticaPrivacidade = `https://iouu.com.br/politica-de-privacidade/`;
