window.addEventListener("load",function(){
    //PeticionGET();
    // var btn= $("btnGuardar");    
    // btn.addEventListener("click",AgregarPersona);
    //Clase6();
});

function AgregarPersona(){
    let nombre = $("impNombre");
    let apellido = $("impApellido");
    let telefono = $("impTel");
    let sinError = true;
    if(nombre.value != ""){
        nombre.className = "sinError";
    }
    else{
        nombre.className = "conError";
        sinError = false;
    }

    if(apellido.value != ""){
        apellido.className = "sinError";
    }
    else{
        apellido.className = "conError";
        sinError = false;
    }

    if(telefono.value != ""){
        telefono.className = "sinError";
    }
    else{
        telefono.className = "conError";
        sinError = false;
    }
    
    if(sinError)
    {
        let cuerpo = $("tbody");

        let tdNombre = $_Td(nombre.value);
        tdNombre.addEventListener("click", TraerDatos);

        let tdApellido = $_Td(apellido.value);
        tdApellido.addEventListener("click", TraerDatos);
           
        let tdAccion = Create("td");
        let a = Create("a");
        a.appendChild(CreateText("Borrar"));
        a.setAttribute("href","#");
        a.addEventListener("click",Borrar);
        tdAccion.appendChild(a);
        
        let tr = Create("tr")
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdAccion);

        tr.id = "tr"+cuerpo.childNodes.length;
        
        cuerpo.appendChild(tr);

        $("impNombre").value = "";
        $("impApellido").value = "";
    }    
}

function $(id){
    return document.getElementById(id);
}

function Borrar(ev){
    let tr = ev.target.parentNode.parentNode;
    let body = tr.parentNode;
    body.removeChild(tr);
}

function TraerDatos(ev){
    let tr = ev.target.parentNode;    
    $("impNombre").value = tr.childNodes[0].innerHTML;
    $("impApellido").value = tr.childNodes[1].innerHTML;    
    let btn = $("btnGuardar");
    btn.setAttribute("i",tr.id);
    btn.removeEventListener("click", AgregarPersona);
    btn.addEventListener("click", ModificarPersona);
}

function ModificarPersona(ev){
    let btn = ev.target;
    btn.removeEventListener("click", ModificarPersona);
    btn.addEventListener("click", AgregarPersona);

    let i = btn.attributes.i.value;

    let cuerpo = $("tbody");
    let tr = "";
    cuerpo.childNodes.forEach(element => {
        if(element.id == i)
        {
            tr = element;
        }
    });    

    if(tr != "")
    {
        tr.childNodes[0].innerHTML = $("impNombre").value;
        tr.childNodes[1].innerHTML = $("impApellido").value;
    }
    else{
        alert("usuario inexistente");
    }
    $("impNombre").value = "";
    $("impApellido").value = "";
}