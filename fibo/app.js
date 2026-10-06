export  function fibo(n) {
  if(n < 2 ) return n;
  return fibo(n - 1) + fibo(n -2 );
}

export  function getFiboInd(n) {
  const ind = [];
  for(let i = 0; i < n; i++) {
    ind.push(fibo(i));

  }
  return ind;
}


console.log(getFiboInd(20));