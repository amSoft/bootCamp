//Comparaciones

//== Igualdad débil (Solo compara el valor)
//===Igualdad fuerte (Compara el valor y el tipo)

let a=5;
let b=5;

console.log(typeof a);
console.log(typeof a);

if (a==b){
    console.log("a es igual a b- DÉBIL")
}


if (a===b){
    console.log("a es igual a b- DÉBIL")
}



let c=5;
let d="5";
console.log(typeof c);
console.log(typeof d);
if (c==d){
    console.log("a es igual a b- DÉBIL")
}

//===No se cumple porque son de  distinto tipo
if (c===d){
    console.log("a es igual a b- FUERTE")
}