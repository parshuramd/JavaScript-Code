function outer(params) {
  let a = 10;
  function inner(params) {
    console.log(a);
  }
  inner();
}
outer();
