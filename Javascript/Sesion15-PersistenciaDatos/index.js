
// LOCALSTORAGE //
//localStorage.setItem("nombre","Gorka"); //Definir clave
//localStorage.setItem("nombre","Aure"); //Cambiar valor a clave
console.log(localStorage.getItem("nombre")); //Obtener valor clave

// SESIONSTORAGE //
sessionStorage.setItem("nombreSesion","Aure01");


// Cookies //

document.cookie="nombreCookie=AureCookie"; //Crear cookie
document.cookie="nombreCaducidadCookie=Nombre; expires = " + new Date(2023,0,1).toUTCString();
console.log(document.cookie); //Mostrar todas las cookies.