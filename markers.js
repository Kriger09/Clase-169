AFRAME.registerComponent("markers",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Se encontró el marcador")
            this.markerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("No se encontró el marcador")
            this.markerLost()
        })
    },
    markerFound: function(){
        var buttons=document.getElementById("botones")
        buttons.style.display="flex"
        var button1=document.getElementById("calificar")
        var button2=document.getElementById("ordenar")
        button1.addEventListener("click", function(){
            swal({
                icon:"warning",
                title:"Calificar Platillo",
                text:"Gracias por Calificar"
            })
        })
        button2.addEventListener("click", function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Ordenar Platillo",
                text:"Gracias por su Orden"
            })
        })
    },
    markerLost: function(){
        var buttons=document.getElementById("botones")
        buttons.style.display="none"
    }
})