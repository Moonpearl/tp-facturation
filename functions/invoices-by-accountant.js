const invoicesByRef = require('./invoices/byRef');

exports.handler = invoicesByRef('invoices_by_accountant');
