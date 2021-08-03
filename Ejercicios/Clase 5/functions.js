window.addEventListener("load", PeticionGET);

function agregarPersona(){

    var txtNom = $("txtNombre");
    var txtApe = $("txtApellido");

    if(txtNom.value == ""){
        txtNom.className="conError";
        return;
    }
    else{
        txtNom.className="sinError";
    }

    if(txtApe.value == ""){
        txtApe.className="conError";
        return;
    }
    else{
        txtApe.className="sinError";
    }

    var cuerpo = $("tcuerpo");

    var registro = document.createElement("tr");
    cuerpo.appendChild(registro);
    
    var tdNombre = document.createElement("td");
    registro.appendChild(tdNombre);

    var textoNombre = document.createTextNode(txtNom.value);
    tdNombre.appendChild(textoNombre);
    
    var tdApe = document.createElement("td");
    registro.appendChild(tdApe);

    var textoApe = document.createTextNode(txtApe.value);
    tdApe.appendChild(textoApe);

    var tdACcion = document.createElement("td");
    registro.appendChild(tdACcion);

    var linkBorrar = document.createElement("a");
    linkBorrar.setAttribute("href", "#");
    linkBorrar.addEventListener("click", limpiarFila);
    registro.appendChild(linkBorrar);

    var textoBorrar = document.createTextNode("Borrar");
    linkBorrar.appendChild(textoBorrar);

}

function $(id){
    return document.getElementById(id);
}

function limpiarFila(event){
    
    var elemento = event.target;
    $("tcuerpo").removeChild(elemento.parentNode);
}

function ConvertToTable(obj, arrayToTable){

    let arrayValues = Object.values(arrayToTable[0]);


}