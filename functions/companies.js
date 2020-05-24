const crud = require('./common/crud');

exports.handler = crud(
  'companies',
  {
    name: { type: 'string' },
    isClient: { type: 'boolean' },
    siren: { type: 'string' },
    iban: { type: 'string' },
  }
);
