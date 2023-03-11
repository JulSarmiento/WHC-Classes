// const fetchApi = async (url) => {
//   try {
//     fetch(url)
//       .then(response => response.json())
//       .then(({results}) => {
//         const data = results.map(({id, name, gender}) => ({id, name, gender}))
//         console.log("result", data);
//       });
//   } catch (error) {
//     console.log(error);
//   }+
// }

const fetchApi = async (url) => {
  const response = await fetch(url);
  const { results } = await response.json();
  return results.map(({id, name, gender}) => ({id, name, gender}))
}
module.exports = fetchApi;