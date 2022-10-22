function fibonacci(numero){
    let serieFibonacci="1";
    let prev2=0;
    let prev1=1;
    let fibo=0;
    for (let i=2;i<numero;i++){
        fibo=prev2+prev1;
        prev2=prev1;
        prev1=fibo;
        
        
        serieFibonacci+=", "+fibo;
    }
    return serieFibonacci;
}

const f= fibonacci(6);
console.log(f);
