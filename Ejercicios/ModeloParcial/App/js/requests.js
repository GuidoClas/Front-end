import { refreshRow } from '/js/table.js';
import { mapPersona } from '/js/form.js';
import {ConvertToTable} from '/js/table.js';

var spinner = document.getElementById("spinner");

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
   peticionHttp.open("GET","http://localhost:3000/personas");    
   peticionHttp.send();

   

}

export function PeticionGetPersonaById(id){
    
    var peticionHttp = new XMLHttpRequest();
    displaySpinner(true);
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){            
                let personas = JSON.parse(peticionHttp.responseText);

                if(personas){
                    let persona = personas.find(p => p.id == id);
                    mapPersona(persona);
                    displaySpinner(false);
                }
            }
        }        
    }
    
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();

}

function displaySpinner(display){
    spinner.style.display = display ? 'block' : 'none';
}

export function PeticionPostModificar(jsonPersona){

    var peticionHttp = new XMLHttpRequest();

    displaySpinner(true);

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){    
                displaySpinner(false);
                if(JSON.parse(peticionHttp.responseText).type == undefined){
                    refreshRow(jsonPersona.id);
                }
                else{
                    
                }
            }
        }        
    }
    peticionHttp.open("POST", "http://localhost:3000/editar");    
    peticionHttp.setRequestHeader("Content-Type", "application/json");
    peticionHttp.send(JSON.stringify(jsonPersona));
}
