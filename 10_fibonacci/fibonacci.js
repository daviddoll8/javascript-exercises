const fibonacci = function(n) {
  if(n === 0) return 0;
  if(n < 0) return "OOPS";
  if(n === 1 || n === 2) return 1;
  let firstPrev = 1;
  let secPrev = 1;
  let cur = 1;
  for(let i = 2; i < n; i++){
    cur = firstPrev + secPrev;
    secPrev = firstPrev;
    firstPrev = cur;
  }
  
  return cur;
}

// Do not edit below this line
module.exports = fibonacci;
