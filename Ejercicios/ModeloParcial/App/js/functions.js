import { PeticionPostModificar } from '/js/requests.js';
import {displayForm} from '/js/form.js';
import {crearPersona} from '/js/form.js';
import {PeticionGET} from '/js/requests.js';

window.addEventListener("load", PeticionGET);

var form = document.getElementById("form");
var btnCancelar = document.getElementById("btnCancelar");
var btnGuardar = document.getElementById("btnGuardar");

btnGuardar.onclick = modificarPersona;
btnCancelar.onclick = cancelarModificacion;

form.style.display = "none";

function cancelarModificacion(){
    displayForm(form, false);
}

function modificarPersona(){

    let persona = crearPersona();

    if(persona){
        
        persona.id = parseInt(persona.id);
        
        PeticionPostModificar(persona);
    }
}



