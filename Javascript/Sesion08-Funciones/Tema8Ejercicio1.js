
    function siempreTrue(){
        return true;
    }
    const variable = siempreTrue();

  console.log(variable);


  function retardo(miliseg) {
    return new Promise(function(resolve) {
        setTimeout(resolve, miliseg);
        
    });
}

    

console.log("Comienza la parada");
const parada = new  retardo(5000);
retardo.Promise
    .then (()=> {console.log("Han pasado "+miliseg+" milisegundos");});

function* generaPar(){
    let numero=0;
    while (true){
        numero++;
        if (numero%2==0)
            yield numero
    }
}
const par = generaPar();
console.log(par.next());
console.log(par.next());
