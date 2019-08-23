document.getElementById("Codificar").addEventListener("click", Cifrar);

let Msg = document.getElementById("msg").value;
let fator = parseInt(document.getElementById("fator").value);

function Cifrar() {
    document.getElementById("formulario").addEventListener("submit", function(event) {event.preventDefault()});
    document.getElementById("msgcifrada").innerHTML = window.cipher.Encode(Msg, fator);
} 
//document.getElementById("Limpar").addEventListener("click", ;


let Codigo = document.getElementById("codigo").value;
let Refator = document.getElementById("refator").value;
function Decifrar (){
    event.preventDefault();
    document.getElementById("msgdecifrada").innerHTML = window.cipher.Decode(Codigo, Refator);
}
