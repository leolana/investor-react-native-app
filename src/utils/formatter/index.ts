import { format } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

export const formatCode = (code) => {
  if (typeof code !== 'string' && typeof code !== 'number') return;

  code = String(code);

  if (5 - code.length === 0) return code;

  const zeros = ['0', '00', '000', '0000', '00000'];

  const zeroIndex = 5 - code.length;

  return `${zeros[zeroIndex - 1]}${code}`;
};

export const formatMoney = (value) => {
  if (value === null || value === undefined) return;

  value = parseFloat(value)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  value = value.split('.');

  const cents = value[1];

  value = value[0].replace(',', '.');

  return `R$ ${value},${cents}`;
};

export const formatBankAccountType = (type) => {
  return type == 2 ? 'Conta Poupança' : 'Conta Corrente';
};

export const formatLoanType = (type, short = true) => {
  const typesShort = {
    'emprestimo-coletivo': 'Coletivo',
    'emprestimo-de-impacto2': 'Impacto',
    emprestimo: 'Social',
  };

  const types = {
    'emprestimo-coletivo': 'Empréstimo coletivo',
    'emprestimo-de-impacto2': 'Empréstimo de impacto',
    emprestimo: 'Empréstimo social',
  };

  return short ? typesShort[type] : types[type];
};

export const formatDate = (date, mask = 'dd/MM/yyyy') => {
  if (date === undefined || date === null || String(date).length === 0) return;

  date = new Date(date);

  return format(date, mask, { locale: ptBR });
};

export const trunc = (value) => {
  if (value === undefined) return 0;

  value = value.toString().match(/^-?\d+(?:\.\d{0,2})?/);

  if (value === null) return 0;

  return parseFloat(value[0]);
};

export const formatPercent = (value) => `${String(value).replace('.', ',')}%`;

export const formatCNPJ = (value) => String(value).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

export const formatCPF = (value) => String(value).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

export const formatCompanyName = (data) => {
  if (data.Social && data.Social.RazaoSocial) return data.Social.RazaoSocial;
  else if (data.Social && data.Social.NomeCompleto) return data.Social.NomeCompleto;
  else if (data.Impacto && data.Impacto.NomeEmpresa) return data.Impacto.NomeEmpresa;
  else if (data.Empresa && data.Empresa.NomeFantasia) return data.Empresa.NomeFantasia;

  return 'Empresa não encontrada';
};
