import crud from './crud';

export default {
  ...crud('invoices'),

  readByAccountant: () => {
    return fetch(`/.netlify/functions/invoices-by-accountant`)
    .then(response => response.json());
  },

  readByClient: () => {
    return fetch(`/.netlify/functions/invoices-by-client`)
    .then(response => response.json());
  },
};
