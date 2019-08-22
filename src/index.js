import { Cipher } from "crypto";

function Cifrar() {
    let msg = document.getElementById("msg").Value;
    let fator = parseInt(document.getElementById("cifra").Value);
    console.log(msg,fator);
    Cipher.Encode();
    return document.getElementById("msgcifrada").innerHTML = msgcifrada;
}
