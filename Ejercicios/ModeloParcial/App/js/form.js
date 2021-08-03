import { PeticionGetPersonaById } from '/js/requests.js';

export function displayForm(id, display){

    var form = document.getElementById("form");
    
    if(display){
        form.style.display = "block";
        
        PeticionGetPersonaById(id);
    }
    else{
        form.style.display = "none";
    }
}

export function mapPersona(persona){

    document.getElementById("txtId").value = persona.id;
    document.getElementById("txtNombre").value = persona.nombre;
    document.getElementById("txtApellido").value = persona.apellido;
    document.getElementById("txtFecha").value = persona.fecha;
    
    if(persona.sexo === 'Male'){
        document.getElementById("M").checked = true;
    }
    else{
        document.getElementById("F").checked = true;
    }

}

export function crearPersona(){

    let obj = {};
    let inputs = document.querySelectorAll('input');
    let checked = false;

    inputs.forEach(input => {
        let value;

        if(input.type == 'submit' || input.type == 'button'){
        }
        else{
            if(input.type == 'radio'){
                if(input.checked){
                    if(input.id == 'F'){
                        value = 'Female';
                    }
                    else{
                        value = 'Male';
                    }
    
                    if(obj){
                        obj[input.name] = value;
                        checked = true;
                    }
                }
            }
            else{
                if(!isValidInput(input)){
                    obj = undefined;     
                } 
    
                if(obj){
                    obj[input.name] = input.value;
                } 
            }               
        }

    });

    return checked ? obj : undefined;
}

function isValidInput(input){

    if(input.type == 'number' && (isNaN(input.value) || input.value < 0 || input.value == ""))            
            return false;
    else if(input.type == 'text' && (input.value == "" || input.value.length < 4))
            return false;        

    return true;
}    