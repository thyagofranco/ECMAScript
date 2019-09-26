function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  };
  
  (async function(x) { // async function expression usada como uma IIFE
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
  })(10).then(v => {
    console.log(v);  // imprime 60 após 2 segundo.
  });

  var add = async function(x) { // async function expression atribuída a uma variável
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
  };
  
  add(10).then(v => {
    console.log(v);  // imprime 60 após 4 segundos.
  });