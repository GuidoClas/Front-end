function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){            
                ConvertToTable(document.getElementById("table"), JSON.parse(peticionHttp.responseText));
            }
        }        
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function PeticionPOST(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
                let array = peticionHttp.responseText;                            
                console.log(array);               
            }
        }        
    }
    var persona = {"nombre":"Guido","apellido":"Clas","telefono":"1165891874","fecha":"2020-04-23"};

    peticionHttp.open("POST","http://localhost:3000/nuevaPersona");
    peticionHttp.setRequestHeader("content-type", "application/json");
    peticionHttp.send(JSON.stringify(persona));
}