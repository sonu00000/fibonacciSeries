function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;

  console.log(n1);
  console.log(n2);

  let n3 = n1 + n2;

  while(n3 <= num) {
    console.log(n3);
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2
  }
}


fibonacci(100);











