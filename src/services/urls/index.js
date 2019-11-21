const prod = {
    "BASE_URL_GO": "https://api.iouu.com.br/",
    "BASE_URL_NODE": "https://server-app.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-app.iouu.com.br/",
}

const test = {
    "BASE_URL_GO": "https://api-test.iouu.com.br/",
    "BASE_URL_NODE": "http://server-test.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-test.iouu.com.br/",
}

const desenv = {
    "BASE_URL_GO": "https://api-desenv.iouu.com.br/",
    "BASE_URL_NODE": "https://dashboard-desenv.iouu.com.br/",
    "BASE_URL_HUB": "https://hub-desenv.iouu.com.br/",
}

const { BASE_URL_GO, BASE_URL_NODE, BASE_URL_HUB } = test

const Urls = {
    'validarToken': `${BASE_URL_NODE}api/v1/validar-token`,

    'login': `${BASE_URL_GO}sign_in`,
    'loginRedeSocial': (provedor, token) => `${BASE_URL_GO}oauth/${provedor}/callback/${token}`,
    
    'recuperarSenha': `${BASE_URL_NODE}api/v1/send-reset-password-email`,

    'listaOportunidades': (pagina, scores) => `${BASE_URL_GO}api/v1/solicitacoes/listar/${pagina}/${scores}`,

    'suitabilitySalvar': (usuarioId, passo) => `${BASE_URL_GO}api/v1/suitability/salvar/${usuarioId}/${passo}`,
    'suitabilityPegar': usuarioId => `${BASE_URL_GO}api/v1/suitability/user/${usuarioId}`,
    'suitabilityPegarPerfil': suitabilityId => `${BASE_URL_HUB}iouu/suitability/${suitabilityId}`,

    'cadastroUsuario': `${BASE_URL_GO}sign_up`,
    'cadastroInvestidor': `${BASE_URL_GO}api/v1/investidores`,
    'cadastroInvestidorAtualizar': (investidorId, passo) => `${BASE_URL_GO}api/v1/investidor/atualizar/${investidorId}/${passo}`,
    'cadastroInvestidorDocs': (investidorId, docTipo) => `${BASE_URL_GO}api/v1/investidor/enviar/docs/b64/${investidorId}/${docTipo}`,

    'localizacaoEstadosPegar': `${BASE_URL_NODE}api/v1/estados/`,
    'localizacaoCidadesPegar': uf => `${BASE_URL_NODE}api/v1/estados/${uf}/cidades`,
    'localizacaoCEPPegar': cep => `${BASE_URL_HUB}cep/${cep}`,

    'bancoListaPegar': `${BASE_URL_HUB}iouu/bancos`,
    
    'carteiraBancoPegar': ( codigoBanco ) => `${BASE_URL_NODE}api/v1/wallet/bank/${codigoBanco}`,
    'carteiraPegar': `${BASE_URL_NODE}api/v1/investimentos/meus/money`,
    'carteiraEnviarTransferencia': `${BASE_URL_NODE}api/v1/wallet/new`,
    'carteiraEmprestimoPegar': investidorId => `${BASE_URL_NODE}api/v1/wallet/loans/${investidorId}`,
    'carteiraComprovantePegar': investidorId => `${BASE_URL_NODE}api/v1/wallet/comprovante/${investidorId}`,

    'infoInvLista': `${BASE_URL_NODE}api/v1/investimentos/meus`,
    'infoInvSolicitacao': solicitacaoId => `${BASE_URL_NODE}api/v1/investimentos/meus/solicitacoes/${solicitacaoId}`,

    'invPegar': email => `${BASE_URL_GO}api/v1/investidor/email/${email}`,

    'usuarioPegar': email => `${BASE_URL_GO}api/v1/usuario/email/${email}`,

    'tomadorFatura': id => `${BASE_URL_NODE}api/v1/FaturaTomador/solicitacao/${id}`,

    'solicitacaoPegar': id => `${BASE_URL_NODE}api/v1/solicitacoes/${id}`,
    'solicitacaoReservaPegar': reservaId => `${BASE_URL_NODE}api/v1/reserva/solicitacao/${reservaId}`,
    'solicitacaoReservaInvPegar': solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`,
    'solicitacaoReservaInvCancelar': solicitacaoId => `${BASE_URL_NODE}api/v1/reserva-investimentos-CANCEL/${solicitacaoId}`,
    'solicitacaoReservaInvCriar': solicitacaoId => `${BASE_URL_NODE}api/v1/solicitacoes/${solicitacaoId}/reserva-investimento`,

    'estatisticasPegar': usuarioId => `${BASE_URL_GO}api/v1/GetEstatisticas/${usuarioId}`,
    'estatisticasPlataformaPegar': tipo => `${BASE_URL_GO}api/v1/GetEstatisticasPlataformaInvestidores/${tipo}`,

    'notificacoesPegar': usuarioId => `${BASE_URL_NODE}api/v1/user/notifications/${usuarioId}`,
    'notificacoesStatusAtualizar': `${BASE_URL_NODE}api/v1/notifications/status/update`,

    'perfilSenhaAlterar': `${BASE_URL_NODE}api/v1/profile/alterarSenha`,
    'perfilInvestidorAtualizar': investidorId => `${BASE_URL_GO}api/v1/investidor/${investidorId}`,
    'perfilConfigNotificacaoSalvar': `${BASE_URL_NODE}api/v1/user/notifications`,

    'documentosPegar': (tipo, id) => `${BASE_URL_NODE}api/v1/documentos/${tipo}/${id}`,
    'documentosSolicitacaoPegar': id => `${BASE_URL_NODE}api/v1/doc/solicitacao/${id}`,

    'ccbAssinaturaAtualizar': reservaId => `${BASE_URL_GO}api/v1/out/atualizaCCbsInvestidoresAssinatura/${reservaId}`,

    'senhaVerificar': `${BASE_URL_NODE}api/v1/emprestimos/verifica-senha`,

    'taxasPegar': `${BASE_URL_HUB}calculadora/taxas`,

    'linkCCBImprimir': codigo => `https://bmpdigital.moneyp.com.br/imprimirccb.aspx?code=${codigo}&copias=1`,

    'mapaEndereco': (endereco) => `https://www.google.com/maps/embed/v1/place?key=AIzaSyC9YU8ifbsf9Ta6ZmpsVwIJfcXqKj4t_M8&q=${endereco}`,

    'iouuFacebook': `https://www.facebook.com/IouuBrasil/`,
    'iouuInstagram': `https://www.instagram.com/iouubrasil/`,
    'iouuTwitter': `https://twitter.com/iouubrasil`,
    'iouuLinkedin': `https://www.linkedin.com/company/iouu`,
    'iouuVimeo': `https://vimeo.com/iouubrasil`,
    'iouuAjuda': `https://ajuda.iouu.com.br/pt-br/`,

}

export default Urls



