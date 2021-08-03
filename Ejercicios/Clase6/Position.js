function changeValue(){
    let contenedor = $("contenedor");    
    let direccion = $("selecDirection").value;
    let content = $("selecContent").value;
    let align = $("selecAlign").value;

    contenedor.className = direccion+" "+content+" "+align;
}

function $(id){
    return document.getElementById(id);
}