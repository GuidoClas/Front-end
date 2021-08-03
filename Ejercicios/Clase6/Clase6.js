window.addEventListener("load",function(){
    changeValue();
    PeticionGET();
    
    // var btn= $("btnGuardar");    
    // btn.addEventListener("click",AgregarPersona);
    //Clase6();
});

function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){  
                let array = JSON.parse(peticionHttp.responseText);
                let parte = array.slice(0, 10);
                //$_Table(document.getElementById("d_tbl"), parte);
                CrearDivPersonas($("contenedor"), parte);
            }
        }        
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function CrearDivPersonas(parent, array){    
    for(i = 0; i< array.length; i++)
    {
        let divPersona = Create("div");
        divPersona.className = "persona";
        divPersona.addEventListener("click", traerPersona);

        let divImg = Create("div");
        let img = Create("img");
        img.setAttribute("src", "https://cdn.icon-icons.com/icons2/10/PNG/256/user_person_customer_man_1532.png");
        img.setAttribute("height","100px");
        img.setAttribute("width","100px");
        divImg.appendChild(img);

        let divData = Create("div");

        var arraykeys = Object.keys(array[i]);
        arraykeys.forEach(element => {
            let p = Create("p");
            p.appendChild(CreateText(array[i][element]));
            divData.appendChild(p);
        });

        divPersona.appendChild(divImg);
        divPersona.appendChild(divData);
    
        parent.appendChild(divPersona);   
    }    
}

function traerPersona(e){
    let persona = e.target;
    var nombre = persona.childNodes[0].innerHTML;
    var apellido = persona.childNodes[1].innerHTML;
    var fecha = persona.childNodes[2].innerHTML;
    var telef = persona.childNodes[3].innerHTML;

    var popUp = Create("div");
    popUp.className = "popUp";
    let divImg = Create("div");
    let img = Create("img");
    img.setAttribute("src", "https://cdn.icon-icons.com/icons2/10/PNG/256/user_person_customer_man_1532.png");
    img.setAttribute("height","100px");
    img.setAttribute("width","100px");
    divImg.appendChild(img);

    



    var body = $("body");
    body.appendChild(popUp);
}


function Create(element){
    return document.createElement(element);
}

function CreateText(text){
    return document.createTextNode(text);
}
