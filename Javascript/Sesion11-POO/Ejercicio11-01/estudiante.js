class Estudiante{
    _nombre;
    lista=["Javascript","HTML","CSS"];
    
    constructor (nombre){
    this.nombre=nombre;
    }   

    obtenNombre(){
        return this.nombre;
    }

}

const estudiante1= new Estudiante("Juan");
console.log(estudiante1.obtenNombre());
