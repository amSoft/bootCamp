const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll("seccion");


parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Inicio drag");
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id",parrafo.id)
    })
    parrafo.addEventListener("dragend",()=>{
        alert("Terminado de arrastrar");
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event =>{
        event.preventDefault();
        console.log("drag over");
    })
    seccion.addEventListener("drop",event =>{
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
        alert("drop");
    })
})
