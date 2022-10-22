//$("li").hide() Oculta elementos


//Trabajar cuando se ha cargado toda la página
$(document).ready( ()=>{
    //$("#el-1").hide(); //para acceder por id se utiliza #
    $(".hide-btn").click(()=>{ //Para acceder por class se utiliza el .
        $("h1").hide(); //Ocultar titulo
        $("h1").fadeOut(); //Otra forma de ocultar
    })
    $(".show-btn").click(()=>{ //Para acceder por class se utiliza el .
        $("h1").show();
    })

    $("li").click(()=>{
        $("h1").css({color:"red"})
    })
    $("li").dblclick(()=>{
        $("h1").css({color:"green"})
    })
    $(".new-element").click(()=>{
        $("ul").append("<li> New Element</li>")
    })
})