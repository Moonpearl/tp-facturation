import crud from './crud';

export default {
  ...crud('companies'),

  readAccountants: () => {
    return fetch(`/.netlify/functions/companies-accountants`)
    .then(response => response.json());
  },

  readClients: () => {
    return fetch(`/.netlify/functions/companies-clients`)
    .then(response => response.json());
  },
};
