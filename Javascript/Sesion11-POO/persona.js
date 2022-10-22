class Persona {
    #nombre; //atributo privado
    edad;
    _isDeveloper //atributo protegido
    constructor(nombre,edad,isDeveloper){
        this.nombre=nombre;
        this.edad=edad;
       
    }

    saludo(){
        console.log('hola ' + this.nombre);
    }
    getNombre(){
        return this.nombre
    }
    getIsDeveloper(){
        return obtenIsDeveloper
    }
    setNombre(nombre){
        this.nombre=nombre
    }
}

const p = new Persona("Juan",23);
console.log(p);
console.log(p.saludo());
console.log(p.getNombre());
p.setNombre("Pedro");
console.log(p.getNombre());


//Herencia
class Desarrollador extends Persona {
    lenguajes;
    constructor ( nombre, edad,lenguajes){
        super(nombre,edad);
        this.lenguajes=lenguajes;
        }
    //Polimorfismo
    saludo(){
        console.log ('hola mi nombre es '+ this.nombre + " soy desarrollador en los lenguajes "+ this.lenguajes);
    }
}
const d1 = new Desarrollador("Pedro",34);
d1.lenguajes="Phyton, Java, Javascript";
console.log(d1.lenguajes);
const d2= new Desarrollador("Juan",45,"SQL, Visual Basic");
console.log(d2);

console.log(d2.saludo());
