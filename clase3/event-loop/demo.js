Promise.resolve().then(() => {
  console.log('Promise 1')
}).then(() => {
  console.log('Promise 2')
})

setTimeout(() => {
  console.log('Timeout 1')
} , 0);

console.log('Hola mundo');