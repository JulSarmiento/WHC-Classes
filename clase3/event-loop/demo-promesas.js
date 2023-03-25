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

myPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });