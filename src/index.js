document.getElementById("Codificar").addEventListener("click", Cifrar);
    let msg = document.getElementById("msg");
    let fator = parseInt(document.getElementById("fator"));
    let result;
    function Cifrar() {
        event.preventDefault();
        window.cipher.Encode(msg.value, fator.value);
        return document.getElementById("msgcifrada").innerHTML = "result";
    }

document.getElementById("formulario").addEventListener("submit", function(event) {event.preventDefault()});  
