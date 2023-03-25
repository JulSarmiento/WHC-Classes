const myPromise = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(value % 2 === 0){
        resolve("Exito!")

      } else[
        reject("Error!")

      ]
    }, 1000);
  });
}

async function myAsyncFunction(value) {
  try {
    const result = await myPromise(value);
    return result
  } catch (error) {
    console.log(error);
  }
}

myAsyncFunction(4);
console.log('holis fuera de la funcion asincrona')