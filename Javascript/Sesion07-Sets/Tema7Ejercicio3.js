const fechaHoy=new Date();
const fecNac=new Date("31 octubre 1967");
const masTarde=fechaHoy.getTime()>fecNac.getTime();
const fechaNacimiento=fecNac.toLocaleDateString("en-GB");
const mesNacimiento=fecNac.getMonth()+1;
const anyoNacimiento=fecNac.getFullYear();
