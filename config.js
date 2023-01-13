/*a --> ai
e --> enter
i --> imes
o --> ober
u --> ufat*/

function encriptar(){
    var texto = document.getElementById("areaTexto").value.toLowerCase();

    var txtEncriptado = texto.replace(/a/igm, "ai"); 
    var txtEncriptado = txtEncriptado.replace(/e/igm, "enter");
    var txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
    var txtEncriptado = txtEncriptado.replace(/o/igm, "ober");  
    var txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

    document.getElementById("munheco").style.display = "none";  
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("areaTexto").value.toLowerCase();

    var txtEncriptado = texto.replace(/ai/igm, "a");
    var txtEncriptado = txtEncriptado.replace(/enter/igm, "e");
    var txtEncriptado = txtEncriptado.replace(/imes/igm, "i");
    var txtEncriptado = txtEncriptado.replace(/ober/igm, "o");
    var txtEncriptado = txtEncriptado.replace(/ufat/igm, "u");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiado(){
    var resultado = document.querySelector("#mensaje"); resultado.select();
    document.execCommand("copy");
    alert("Se copio!");
}
