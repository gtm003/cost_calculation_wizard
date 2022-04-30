export const formatPrice = (price: number) => {
  const options = {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat('ru-RU', options).format(price);
};
