const nom="Aure";
const ape="Magdaleno";

const persona = {
    nombre:nom,
    apellido:ape
}

//sessionStorage.setItem("datosPersona",JSON.stringify(persona));
//localStorage.setItem("datosPersona",JSON.stringify(persona));
document.cookie="datosPersona="+JSON.stringify(persona)+"; max-age=120";
