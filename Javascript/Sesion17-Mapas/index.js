function initMap(){
    console.log("Inicializando mapa");
    const posicionMarcador1 ={
        lat: -25.363,
        lng: 131.044
    }
    const posicionMarcador2 ={
        lat: 55.363,
        lng: -12.044
    }
    const posicionMarcador3 ={
        lat: -24.363,
        lng: 133.044
    }

const map = new google.maps.Map(document.getElementById("map"),{
    zoom:4,
    center:posicion
});

const marker1 = new google.maps.Marker({
    position:posicionMarcador1,
    map,
    title:"No te lo pierdas"
})
const marker2 = new google.maps.Marker({
    position:posicionMarcador2,
    map,
    title:"No te lo pierdas"
})
const marker3 = new google.maps.Marker({
    position:posicionMarcador3,
    map,
    title:"No te lo pierdas"
})

marker1.setMap(map);
marker2.setMap(map);
marker3.setMap(map);
}



