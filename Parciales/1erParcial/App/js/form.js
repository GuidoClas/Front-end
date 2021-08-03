import { PeticionGetMateriaById } from '/js/requests.js';

export function displayForm(id, display){

    var form = document.getElementById("form");
    
    if(display){
        form.style.display = "block";
        
        PeticionGetMateriaById(id);
    }
    else{
        form.style.display = "none";
    }
}

export function mapMateria(materia){

    document.getElementById("txtId").value = materia.id;
    document.getElementById("txtNombre").value = materia.nombre;
    document.getElementById("selectCuatri").value = materia.cuatrimestre;

    console.log(materia.fechaFinal);

    if(materia.fechaFinal[2]=='/'){
        let fecha = materia.fechaFinal.split('/');
        document.getElementById("txtFecha").value = fecha[2] + "-" + fecha[1] + "-" + fecha[0];
    }
    /*
    else{
        let otraFecha = materia.fechaFinal.split('-');
        document.getElementById("txtFecha").value = otraFecha[2] + "-" + otraFecha[1] + "-" + otraFecha[0];
    }
    */
    if(materia.turno === 'Mañana'){
        document.getElementById("M").checked = true;
    }
    else{
        document.getElementById("N").checked = true;
    }

}

export function crearMateria(){

    let obj = {};
    let inputs = document.querySelectorAll('input');
    let checked = false;
    obj['cuatrimestre'] = document.getElementById("selectCuatri").value;
    inputs.forEach(input => {
        let value;

        if(input.type == 'submit' || input.type == 'button'){
            //No hago nada.
        }
        else{
            if(input.type == 'radio'){
                if(input.checked){
                    if(input.id == 'M'){
                        value = 'Mañana';
                    }
                    else if(input.id == 'N'){
                        value = 'Noche';
                    }
                    else{
                        alert("Debes seleccionar un input");
                    }
                    
    
                    if(obj){
                        obj[input.name] = value;
                        checked = true;
                    }
                }
            }
            else if(input.type == 'date'){
                
                let arrayDate = input.value.split("-");
                let date = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0];     
                if(date < "14-05-2021"){
                    input.className="error";
                    obj = undefined;
                }
                else{
                    input.className="sinError";
                    obj[input.name] = date;
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

    if(input.type == 'number' && (isNaN(input.value) || input.value < 0 || input.value == "")){
        input.className ="error";          
            return false;
    }
    else if(input.type == 'text' && (input.value == "" || input.value.length < 6)){
        input.className ="error";
            return false;        
    }

    return true;
}    
