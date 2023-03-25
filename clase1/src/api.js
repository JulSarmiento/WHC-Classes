/**
 * @description fetches data from an api
 * @param {string} url 
 * @returns array of objects
 */
const fetchApi = async (url) => {
  const response = await fetch(url);
  const { results } = await response.json();
  return results.map(({id, name, gender}) => ({id, name, gender}))
}
module.exports = fetchApi;