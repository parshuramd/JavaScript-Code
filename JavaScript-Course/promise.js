const promise = new Promise((resolve, reject) => {
  let x = 4;
  let y = 1;
  if (x > y) {
    resolve(() => {
      for (let index = 0; index < 5; index++) {
        console.log(index);
      }
    });
  } else {
    reject(y);
  }
});
promise
  .then((data) => {
    console.log(data());
  })
  .catch((data) => {
    console.log(data);
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  });
