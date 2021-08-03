function PeticionGET(){
    var peticionHttp = new XMLHttpRequest();

    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){  
                let array = JSON.parse(peticionHttp.responseText);
                let parte = array.slice(0, 15);
                $_Table(document.getElementById("d_tbl"), parte);
            }
        }        
    }
    peticionHttp.open("GET","http://localhost:3000/personas");    
    peticionHttp.send();
}

function PeticionPOST(){
    var peticionHttp = new XMLHttpRequest();
    //ACA MUESTRO EL SPINER ESE
    peticionHttp.onreadystatechange = function(){
        if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
                let array = peticionHttp.responseText;                            
                console.log(array);   
                //ACA LO APAGO
                Agregar(JSON.stringify(persona));
            }
        }        
    }
    let nombre = $("impNombre").value;
    let apellido = $("impApellido").value;
    var f = new Date();    
    let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    let telefono = $("impTel").value;
    var persona = {"nombre":nombre,"apellido":apellido,"fecha":fecha,"telefono":telefono};

    peticionHttp.open("POST","http://localhost:3000/nuevaPersona");
    peticionHttp.setRequestHeader("content-type", "application/json");
    peticionHttp.send(JSON.stringify(persona));
}

