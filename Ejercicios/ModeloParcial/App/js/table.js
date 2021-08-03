import {displayForm} from '/js/form.js';

    export function ConvertToTable(jsons){

        jsons.forEach(json => {
            
            let body = document.getElementById("tbody");
            let row = document.createElement("tr");
    
            let name = document.createElement("td");
            let lastName = document.createElement("td");
            let date = document.createElement("td");
            let gender = document.createElement("td");
    
            //let txtId = document.createTextNode(json.id);
            let txtName = document.createTextNode(json.nombre);
            let txtLastName = document.createTextNode(json.apellido);
            let txtDate = document.createTextNode(json.fecha);
            let txtGender = document.createTextNode(json.sexo);
    
            //id.appendChild(txtId);
            name.appendChild(txtName);
            lastName.appendChild(txtLastName);
            date.appendChild(txtDate);
            gender.appendChild(txtGender);
    
            //row.appendChild(id);
            row.appendChild(name);
            row.appendChild(lastName);
            row.appendChild(date);
            row.appendChild(gender);

            row.addEventListener("dblclick", function(e){
                displayForm(e.target.parentNode.getAttribute("data-id"), true);
            }); 

            row.setAttribute("data-id", json.id);
            
            body.appendChild(row);
        });
    }

    export function refreshRow(id){
    }

    