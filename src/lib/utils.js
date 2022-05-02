export const formatAsCurrency = someNumber => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(someNumber);
};
