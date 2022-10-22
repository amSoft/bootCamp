
const listaCompra=["Leche","Huevos","Filetes","Pan","Tomates"];
listaCompra.push("Aceite de Girasol");
listaCompra.splice(listaCompra.length-1);

const listaPeliculas=[
    {titulo:"El sexto sentido",director:"M. Night Shyamalan",año:1999},
    {titulo:"Interstellar",director:"Christopher Nolan",año:2014},
    {titulo:"El protegido",director:"M. Night Shyamalan",año:2000}];

const listaPeliculasActuales= listaPeliculas.filter(valor=> valor.año>2010);
const listaDirectores= listaPeliculas.map(valor=>valor.director);
const listaTitulos= listaPeliculas.map(valor=>valor.titulo);
const listaDirectoresTitulos=listaDirectores.concat(listaTitulos);
const listaDirectoresTitulosPropagada= [...listaDirectores,...listaTitulos];
  