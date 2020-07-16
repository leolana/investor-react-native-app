export const PMT = (valor, taxa, prazo) => {
  taxa = taxa / 100;

  return (valor * taxa * Math.pow(1 + taxa, prazo)) / (Math.pow(1 + taxa, prazo) - 1);
};
