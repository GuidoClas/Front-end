import {PeticionPostModificar} from '/js/requests.js';
import {displayForm} from '/js/form.js';
import {crearMateria} from '/js/form.js';
import {PeticionGET} from '/js/requests.js';
import { PeticionPostEliminar } from '/js/requests.js';

window.addEventListener("load", PeticionGET);

var form = document.getElementById("form");
var btnCancelar = document.getElementById("btnCancelar");
var btnGuardar = document.getElementById("btnGuardar");
var btnEliminar = document.getElementById("btnEliminar");

btnGuardar.onclick = modificarMateria;
btnCancelar.onclick = cancelarModificacion;
btnEliminar.onclick = borrarRegistro;

form.style.display = "none";

function cancelarModificacion(){
    displayForm(0, false);
}

function modificarMateria(){

    let materia = crearMateria();

    if(materia){
        
        materia.id = parseInt(materia.id);
        
        PeticionPostModificar(materia);

    }
    
}

function borrarRegistro(){
    
    let materia = crearMateria();

    if(materia){
        materia.id = parseInt(materia.id);

        PeticionPostEliminar(materia);
    }
}



