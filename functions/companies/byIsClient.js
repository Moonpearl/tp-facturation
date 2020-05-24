const { q, client } = require('../common/fauna');
const httpResponse = require('../common/httpResponse');

module.exports = isClient => async (event, context) => {
  const { path, httpMethod } = event;
  if (httpMethod !== 'GET') {
    return httpResponse(405, `Cannot ${httpMethod} ${path}`)
  }
  const getCompletedTodosIndexes = q.Paginate(q.Match(q.Index('companies_by_isClient'), isClient));
  const { data: refs } = await client.query(getCompletedTodosIndexes);
  const getComepletedTodos = refs.map(ref => q.Get(ref));
  return client.query(getComepletedTodos).then((ret) => {
    return httpResponse(200, ret);
  })
}
