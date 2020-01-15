const PROD = {
    "BASE_URL_GO": "https://api.iouu.com.br/",
    "BASE_URL_NODE": "https://server-app.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-app.iouu.com.br/",
}

const TEST = {
    "BASE_URL_GO": "https://api-test.iouu.com.br/",
    "BASE_URL_NODE": "https://server-test.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-test.iouu.com.br/",
}

const DESENV = {
    "BASE_URL_GO": "https://api-desenv.iouu.com.br/",
    "BASE_URL_NODE": "https://dashboard-desenv.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-desenv.iouu.com.br/",
}

const { BASE_URL_GO, BASE_URL_NODE, BASE_URL_HUB } = TEST


export const UrlValidarToken = `${BASE_URL_NODE}api/v1/validar-token`

export const UrlLogin = `${BASE_URL_GO}sign_in`
export const UrlLoginRedeSocial = (provedor, token) => `${BASE_URL_GO}oauth/${provedor}/callback/${token}`

export const UrlRecuperarSenha = `${BASE_URL_NODE}api/v1/send-reset-password-email`

export const UrlListaOportunidades = (pagina, scores) => `${BASE_URL_GO}api/v1/solicitacoes/listar/${pagina}/${scores}`

export const UrlSuitabilitySalvar = (usuarioId, passo) => `${BASE_URL_GO}api/v1/suitability/salvar/${usuarioId}/${passo}`
export const UrlSuitabilityPegar = usuarioId => `${BASE_URL_GO}api/v1/suitability/user/${usuarioId}`
export const UrlSuitabilityPegarPerfil = suitabilityId => `${BASE_URL_HUB}iouu/suitability/${suitabilityId}`

export const UrlCadastroUsuario =`${BASE_URL_GO}sign_up`
export const UrlCadastroInvestidor = `${BASE_URL_GO}api/v1/investidores`
export const UrlCadastroInvestidorAtualizar = (investidorId, passo) => `${BASE_URL_GO}api/v1/investidor/atualizar/${investidorId}/${passo}`
export const UrlCadastroInvestidorDocs = (investidorId, docTipo) => `${BASE_URL_GO}api/v1/investidor/enviar/docs/b64/${investidorId}/${docTipo}`

export const UrlLocalizacaoEstadosPegar = `${BASE_URL_NODE}api/v1/estados/`
export const UrlLocalizacaoCidadesPegar = uf => `${BASE_URL_NODE}api/v1/estados/${uf}/cidades`
export const UrlLocalizacaoCEPPegar = cep => `${BASE_URL_HUB}cep/${cep}`

export const UrlBancoListaPegar = `${BASE_URL_HUB}iouu/bancos`
    
export const UrlCarteiraBancoPegar = ( codigoBanco ) => `${BASE_URL_NODE}api/v1/wallet/bank/${codigoBanco}`
export const UrlCarteiraPegar = `${BASE_URL_NODE}api/v1/investimentos/meus/money`
export const UrlCarteiraEnviarTransferencia = `${BASE_URL_NODE}api/v1/wallet/new`
export const UrlCarteiraEmprestimoPegar = ( investidorId, page )=> `${BASE_URL_NODE}api/v1/wallet/loans/${investidorId}/${page}`
export const UrlCarteiraComprovantePegar = investidorId => `${BASE_URL_NODE}api/v1/wallet/comprovante/${investidorId}`

export const UrlCarteiraExtratoPaginado = pagina => `${BASE_URL_GO}api/v1/wallet/extrato/pagina/${pagina}`
export const UrlCarteiraSaldo = `${BASE_URL_GO}api/v1/wallet/saldo`




export const UrlInfoInvLista = `${BASE_URL_NODE}api/v1/investimentos/meus`
export const UrlInfoInvSolicitacao = solicitacaoId => `${BASE_URL_NODE}api/v1/investimentos/meus/solicitacoes/${solicitacaoId}`

export const UrlInvPegar = email => `${BASE_URL_GO}api/v1/investidor/email/${email}`

export const UrlUsuarioPegar = email => `${BASE_URL_GO}api/v1/usuario/email/${email}`

export const UrlTomadorFatura = id => `${BASE_URL_NODE}api/v1/FaturaTomador/solicitacao/${id}`

export const UrlSolicitacaoPegar = id => `${BASE_URL_NODE}api/v1/solicitacoes/${id}`
export const UrlSolicitacaoReservaPegar = reservaId => `${BASE_URL_NODE}api/v1/reserva/solicitacao/${reservaId}`
export const UrlSolicitacaoReservaInvPegar = solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`
export const UrlSolicitacaoReservaInvCancelar = solicitacaoId => `${BASE_URL_NODE}api/v1/reserva-investimentos-CANCEL/${solicitacaoId}`
export const UrlSolicitacaoReservaInvCriar = solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`

export const UrlEstatisticasPegar = usuarioId => `${BASE_URL_GO}api/v1/GetEstatisticas/${usuarioId}`
export const UrlEstatisticasPlataformaPegar = tipo => `${BASE_URL_GO}api/v1/GetEstatisticasPlataformaInvestidores/${tipo}`

export const UrlNotificacoesPegar = usuarioId => `${BASE_URL_NODE}api/v1/user/notifications/${usuarioId}`
export const UrlNotificacoesStatusAtualizar = `${BASE_URL_NODE}api/v1/notifications/status/update`

export const UrlPerfilSenhaAlterar = `${BASE_URL_NODE}api/v1/profile/alterarSenha`
export const UrlPerfilInvestidorAtualizar = investidorId => `${BASE_URL_GO}api/v1/investidor/${investidorId}`
export const UrlPerfilConfigNotificacaoSalvar = `${BASE_URL_NODE}api/v1/user/notifications`

export const UrlDocumentosPegar = (tipo, id) => `${BASE_URL_NODE}api/v1/documentos/${tipo}/${id}`
export const UrlDocumentosSolicitacaoPegar = id => `${BASE_URL_NODE}api/v1/doc/solicitacao/${id}`

export const UrlCCBAssinaturaAtualizar = reservaId => `${BASE_URL_GO}api/v1/out/atualizaCCbsInvestidoresAssinatura/${reservaId}`

export const UrlSenhaVerificar = `${BASE_URL_NODE}api/v1/emprestimos/verifica-senha`

export const UrlTaxasPegar = `${BASE_URL_HUB}calculadora/taxas`

export const UrlLinkCCBImprimir = codigo => `https://bmpdigital.moneyp.com.br/imprimirccb.aspx?code=${codigo}&copias=1`

export const UrlMapaEndereco = (endereco) => `https://www.google.com/maps/embed/v1/place?key=AIzaSyC9YU8ifbsf9Ta6ZmpsVwIJfcXqKj4t_M8&q=${endereco}`

export const UrlIouuFacebook = `https://www.facebook.com/IouuBrasil/`
export const UrlIouuInstagram = `https://www.instagram.com/iouubrasil/`
export const UrlIouuTwitter = `https://twitter.com/iouubrasil`
export const UrlIouuLinkedin = `https://www.linkedin.com/company/iouu`
export const UrlIouuVimeo = `https://vimeo.com/iouubrasil`
export const UrlIouuAjuda = `https://ajuda.iouu.com.br/pt-br/`



