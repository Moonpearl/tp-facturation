const companiesByIsClient = require('./companies/byIsClient');

exports.handler = companiesByIsClient(true);
