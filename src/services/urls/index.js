const PROD = {
    "BASE_URL_GO": "https://api.iouu.com.br/",
    "BASE_URL_NODE": "https://server-app.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-app.iouu.com.br/",
}

const TEST = {
    "BASE_URL_GO": "https://api-test.iouu.com.br/",
    "BASE_URL_NODE": "http://server-test.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-test.iouu.com.br/",
}

const DESENV = {
    "BASE_URL_GO": "https://api-desenv.iouu.com.br/",
    "BASE_URL_NODE": "https://dashboard-desenv.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-desenv.iouu.com.br/",
}

const { BASE_URL_GO, BASE_URL_NODE, BASE_URL_HUB } = TEST


export const ValidarToken = `${BASE_URL_NODE}api/v1/validar-token`

export const Login = `${BASE_URL_GO}sign_in`
export const LoginRedeSocial = (provedor, token) => `${BASE_URL_GO}oauth/${provedor}/callback/${token}`

export const RecuperarSenha = `${BASE_URL_NODE}api/v1/send-reset-password-email`

export const ListaOportunidades = (pagina, scores) => `${BASE_URL_GO}api/v1/solicitacoes/listar/${pagina}/${scores}`

export const SuitabilitySalvar = (usuarioId, passo) => `${BASE_URL_GO}api/v1/suitability/salvar/${usuarioId}/${passo}`
export const SuitabilityPegar = usuarioId => `${BASE_URL_GO}api/v1/suitability/user/${usuarioId}`
export const SuitabilityPegarPerfil = suitabilityId => `${BASE_URL_HUB}iouu/suitability/${suitabilityId}`

export const CadastroUsuario =`${BASE_URL_GO}sign_up`
export const CadastroInvestidor = `${BASE_URL_GO}api/v1/investidores`
export const CadastroInvestidorAtualizar = (investidorId, passo) => `${BASE_URL_GO}api/v1/investidor/atualizar/${investidorId}/${passo}`
export const CadastroInvestidorDocs = (investidorId, docTipo) => `${BASE_URL_GO}api/v1/investidor/enviar/docs/b64/${investidorId}/${docTipo}`

export const LocalizacaoEstadosPegar = `${BASE_URL_NODE}api/v1/estados/`
export const LocalizacaoCidadesPegar = uf => `${BASE_URL_NODE}api/v1/estados/${uf}/cidades`
export const LocalizacaoCEPPegar = cep => `${BASE_URL_HUB}cep/${cep}`

export const BancoListaPegar = `${BASE_URL_HUB}iouu/bancos`
    
export const CarteiraBancoPegar = ( codigoBanco ) => `${BASE_URL_NODE}api/v1/wallet/bank/${codigoBanco}`
export const CarteiraPegar = `${BASE_URL_NODE}api/v1/investimentos/meus/money`
export const CarteiraEnviarTransferencia = `${BASE_URL_NODE}api/v1/wallet/new`
export const CarteiraEmprestimoPegar = investidorId => `${BASE_URL_NODE}api/v1/wallet/loans/${investidorId}`
export const CarteiraComprovantePegar = investidorId => `${BASE_URL_NODE}api/v1/wallet/comprovante/${investidorId}`

export const InfoInvLista = `${BASE_URL_NODE}api/v1/investimentos/meus`
export const InfoInvSolicitacao = solicitacaoId => `${BASE_URL_NODE}api/v1/investimentos/meus/solicitacoes/${solicitacaoId}`

export const InvPegar = email => `${BASE_URL_GO}api/v1/investidor/email/${email}`

export const UsuarioPegar = email => `${BASE_URL_GO}api/v1/usuario/email/${email}`

export const TomadorFatura = id => `${BASE_URL_NODE}api/v1/FaturaTomador/solicitacao/${id}`

export const SolicitacaoPegar = id => `${BASE_URL_NODE}api/v1/solicitacoes/${id}`
export const SolicitacaoReservaPegar = reservaId => `${BASE_URL_NODE}api/v1/reserva/solicitacao/${reservaId}`
export const SolicitacaoReservaInvPegar = solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`
export const SolicitacaoReservaInvCancelar = solicitacaoId => `${BASE_URL_NODE}api/v1/reserva-investimentos-CANCEL/${solicitacaoId}`
export const SolicitacaoReservaInvCriar = solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`

export const EstatisticasPegar = usuarioId => `${BASE_URL_GO}api/v1/GetEstatisticas/${usuarioId}`
export const EstatisticasPlataformaPegar = tipo => `${BASE_URL_GO}api/v1/GetEstatisticasPlataformaInvestidores/${tipo}`

export const NotificacoesPegar = usuarioId => `${BASE_URL_NODE}api/v1/user/notifications/${usuarioId}`
export const NotificacoesStatusAtualizar = `${BASE_URL_NODE}api/v1/notifications/status/update`

export const PerfilSenhaAlterar = `${BASE_URL_NODE}api/v1/profile/alterarSenha`
export const PerfilInvestidorAtualizar = investidorId => `${BASE_URL_GO}api/v1/investidor/${investidorId}`
export const PerfilConfigNotificacaoSalvar = `${BASE_URL_NODE}api/v1/user/notifications`

export const DocumentosPegar = (tipo, id) => `${BASE_URL_NODE}api/v1/documentos/${tipo}/${id}`
export const DocumentosSolicitacaoPegar = id => `${BASE_URL_NODE}api/v1/doc/solicitacao/${id}`

export const CCBAssinaturaAtualizar = reservaId => `${BASE_URL_GO}api/v1/out/atualizaCCbsInvestidoresAssinatura/${reservaId}`

export const SenhaVerificar = `${BASE_URL_NODE}api/v1/emprestimos/verifica-senha`

export const TaxasPegar = `${BASE_URL_HUB}calculadora/taxas`

export const LinkCCBImprimir = codigo => `https://bmpdigital.moneyp.com.br/imprimirccb.aspx?code=${codigo}&copias=1`

export const MapaEndereco = (endereco) => `https://www.google.com/maps/embed/v1/place?key=AIzaSyC9YU8ifbsf9Ta6ZmpsVwIJfcXqKj4t_M8&q=${endereco}`

export const IouuFacebook = `https://www.facebook.com/IouuBrasil/`
export const IouuInstagram = `https://www.instagram.com/iouubrasil/`
export const IouuTwitter = `https://twitter.com/iouubrasil`
export const IouuLinkedin = `https://www.linkedin.com/company/iouu`
export const IouuVimeo = `https://vimeo.com/iouubrasil`
export const IouuAjuda = `https://ajuda.iouu.com.br/pt-br/`



