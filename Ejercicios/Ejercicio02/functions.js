window.addEventListener("load", Cargar);

function Cargar()
{
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", Sumar);
}

function Sumar()
{
    var input1 = document.getElementById("Num1").value;
    var input2 = document.getElementById("Num2").value;


    alert("El resultado de la suma es: " + (parseInt(input1) + parseInt(input2)));
}
