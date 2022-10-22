//Strings
let str="Hola soy un texto"
let str2="Hola soy un texto con comillas simples"
console.log(str)
console.log(str2)

//Introducir comillas dentro de una cadena
let frase= "El otro día me dijo \"literalmente\" que..."
console.log(frase)
let frase2= "El otro día me dijo 'literalmente' que..."
console.log(frase2)


//comillas invertidas backticks
let nombre="Iñigo"
let saludo = `Hola ${nombre}`
console.log(saludo)

//Plantilla HTML
let plantilla=`
    <html>
    <h1>Esta es la página de ${nombre}</h1>
    </html>
`
console.log(plantilla)

//Introducción de variables en html
let libros=["El nombre de la rosa","origen","Reina roja"]


//Longitud de un string
str="Hola como estás"
console.log(str.length)

//Parte de una cadena
let slice_str=str.slice(0,10)
console.log(slice_str)
let substring_str=str.substring(0,10)
console.log(slice_str)


//Reemplazar texto cadena
let texto_largo="Tito no es un mono cualquiera"
console.log(texto_largo.replace("Tito","Teto"))
//Reemplazar todas las coincidencias de una cadena utilizando la expresión regular /g
console.log(texto_largo.replace(/o /g,"i"))
