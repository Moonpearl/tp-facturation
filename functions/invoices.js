const crud = require('./common/crud');

exports.handler = crud(
  'invoices',
  {
    createdAt: { type: 'string' },
    due: { type: 'string' },
    time: { type: 'number' },
    unit: { type: 'string' },
    rate: { type: 'number' },
    accountant: { type: 'string' },
    client: { type: 'string' },
  }
);
