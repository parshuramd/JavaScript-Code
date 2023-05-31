let a = 1;
if (a % 5 == 0 && a % 2 == 0) {
  for (i = 0; i < 1000; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 8 === 0)
      console.log(i);
  }
} else {
  console.log(a);
}
