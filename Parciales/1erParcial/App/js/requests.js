import { refreshRow } from '/js/table.js';
import { mapMateria } from '/js/form.js';
import {ConvertToTable} from '/js/table.js';

var spinner = document.getElementById("spinner");
const pathObtener = "http://localhost:3000/materias";
const pathModificar = "http://localhost:3000/editar";
const pathEliminar = "http://localhost:3000/eliminar";

function limpiarForm(){
    let inputs = document.getElementsByTagName("input");
    inputs.className="sinError";
}
export function PeticionGET(){

   var peticionHttp = new XMLHttpRequest();
   displaySpinner(true);

   peticionHttp.onreadystatechange = function(){
       if(peticionHttp.readyState == 4){
           if(peticionHttp.status == 200){            
               ConvertToTable(JSON.parse(peticionHttp.responseText));
               displaySpinner(false);
           }
       }        
   }
   peticionHttp.open("GET",pathObtener);    
   peticionHttp.send();

}

export function PeticionGetMateriaById(id){
    limpiarForm();
    var peticionHttp = new XMLHttpRequest();
    displaySpinner(true);
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){            
                let materias = JSON.parse(peticionHttp.responseText);

                if(materias){
                    let materia = materias.find(p => p.id == id);
                    mapMateria(materia);
                    displaySpinner(false);
                }
            }
        }        
    }
    
    peticionHttp.open("GET",pathObtener);    
    peticionHttp.send();

}

function displaySpinner(display){
    spinner.style.display = display ? 'block' : 'none';
}

export function PeticionPostModificar(jsonMateria){

    var peticionHttp = new XMLHttpRequest();

    displaySpinner(true);

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){    
                displaySpinner(false);
                if(JSON.parse(peticionHttp.responseText).type == "ok"){
                    refreshRow(jsonMateria);
                }
            }
        }        
    }
    peticionHttp.open("POST", pathModificar);    
    peticionHttp.setRequestHeader("Content-Type", "application/json");
    peticionHttp.send(JSON.stringify(jsonMateria));
}

export function PeticionPostEliminar(obj){

    var peticionHttp = new XMLHttpRequest();

    displaySpinner(true);

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){    
                displaySpinner(false);
                if(JSON.parse(peticionHttp.responseText).type == "ok"){
                    let tbody = document.getElementById("tbody");
                    let row = tbody.childNodes[obj.id];
                    let table = document.getElementById("table");
                    tbody.removeChild(row);
                }
            }
        }        
    }
    peticionHttp.open("POST", pathEliminar);    
    peticionHttp.setRequestHeader("Content-Type", "application/json");
    peticionHttp.send(JSON.stringify(obj));
}
