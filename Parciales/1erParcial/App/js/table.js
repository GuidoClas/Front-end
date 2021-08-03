import {displayForm} from '/js/form.js';

    export function ConvertToTable(jsons){

        jsons.forEach(json => {
            
            //id, nombre, cuatri, fechaFinal, turno
            let body = document.getElementById("tbody");
            let row = document.createElement("tr");
    
            let nombre = document.createElement("td");
            let cuatrimestre = document.createElement("td");
            let fechaFinal = document.createElement("td");
            let turno = document.createElement("td");
    
            //let txtId = document.createTextNode(json.id);
            let txtNombre = document.createTextNode(json.nombre);
            let txtCuatrimestre = document.createTextNode(json.cuatrimestre);
            let txtFechaFinal = document.createTextNode(json.fechaFinal);
            let txtTurno = document.createTextNode(json.turno);

            //id.appendChild(txtId);
            nombre.appendChild(txtNombre);
            cuatrimestre.appendChild(txtCuatrimestre);
            fechaFinal.appendChild(txtFechaFinal);
            turno.appendChild(txtTurno);
    
            //row.appendChild(id);
            row.appendChild(nombre);
            row.appendChild(cuatrimestre);
            row.appendChild(fechaFinal);
            row.appendChild(turno);

            row.addEventListener("dblclick", function(e){
                displayForm(e.target.parentNode.getAttribute("data-id"), true);
            }); 

            row.setAttribute("data-id", json.id);
            
            body.appendChild(row);

        });
    }

    export function refreshRow(jsonMateria){
        let tbody = document.getElementById("tbody");
        let row = tbody.childNodes[jsonMateria.id];

        let otraFecha = jsonMateria.fechaFinal.split('-');
        let fecha = otraFecha[0] + "/" + otraFecha[1] + "/" + otraFecha[2];

        console.log(tbody);
        console.log(row);
        console.log(row.childNodes[2]);

        row.childNodes[0].childNodes[0].nodeValue = jsonMateria.nombre;
        row.childNodes[1].childNodes[0].nodeValue = jsonMateria.cuatrimestre;
        row.childNodes[2].childNodes[0].nodeValue = fecha;
        row.childNodes[3].childNodes[0].nodeValue = jsonMateria.turno;
    }

    