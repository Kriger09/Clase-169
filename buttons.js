AFRAME.registerComponent("buttons",{
    init: function(){
        var button1=document.createElement("button")
        button1.innerHTML="calificar"
        button1.setAttribute("id","calificar")
        button1.setAttribute("class", "btn btn-warning")

        var button2=document.createElement("button")
        button2.innerHTML="ordenar"
        button2.setAttribute("id","ordenar")
        button2.setAttribute("class", "btn btn-warning")

        var divButton=document.getElementById("botones")
        divButton.appendChild(button1)
        divButton.appendChild(button2)
    }
})