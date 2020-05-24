const { q, client } = require('../common/fauna');
const httpResponse = require('../common/httpResponse');
const getId = require('../common/getId');

module.exports = (index) => async (event, context) => {
  const { path, httpMethod } = event;
  if (httpMethod !== 'GET') {
    return httpResponse(405, `Cannot ${httpMethod} ${path}`)
  }
  const id = getId(path);
  if (id === null) {
    return httpResponse(400, `Invalid ID passed to ${path}`)
  }
  const getCompletedTodosIndexes = q.Paginate(q.Match(q.Index(index), id));
  const { data: refs } = await client.query(getCompletedTodosIndexes);
  const getComepletedTodos = refs.map(ref => q.Get(ref));
  return client.query(getComepletedTodos).then((ret) => {
    return httpResponse(200, ret);
  })
}
