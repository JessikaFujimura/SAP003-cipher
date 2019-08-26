document.getElementById("Codificar").addEventListener("click", Cifrar);
let Msg = document.getElementById("msg");
const Fator = document.getElementById("fator");
function Cifrar() {
  event.preventDefault();
  document.getElementById("msgcifrada").innerHTML = window.cipher.encode(Msg.value, Fator.value);
} 
//document.getElementById("Limpar").addEventListener("click", ;
document.getElementById("Decodificar").addEventListener("click", Decifrar);
let Codigo = document.getElementById("codigo").value;
let Refator = document.getElementById("refator").value;
function Decifrar( ) {
  event.preventDefault();
  document.getElementById( "msgdecifrada").innerHTML = window.cipher.decode(Codigo, Refator);
}
