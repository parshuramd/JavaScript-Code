const promise = new Promise((resolve, reject) => {
  const x = 4;
  const y = 1;
  if (x > y) {
    resolve(() => {
      for (let index = 0; index < 5; index += 1) {
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
    for (let index = 0; index < 5; index += 1) {
      console.log(index);
    }
  });
