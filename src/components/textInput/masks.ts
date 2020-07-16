import { formatMoney } from '../../utils';

export const currency = (text, props) => {
  const value = parseFloat(String(text).replace(/\D/g, '')) / 100;

  if (isNaN(value)) return 0;

  const newState = {
    unMasked: value,
    masked: formatMoney(value),
  };

  if (props.onValueChange !== undefined) props.onValueChange(newState);

  return newState;
};

export const findByType = (type) => {
  const maskByType = {
    currency: currency,
  };

  return maskByType[type];
};
