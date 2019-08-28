document.getElementById("codificar").addEventListener("click", cifrar);

function cifrar() {
  let msg = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  document.getElementById("result").innerHTML = window.cipher.encode(offset, msg);
  event.preventDefault();
} 
document.getElementById("decodificar").addEventListener("click", decifrar);
function decifrar() {
  let msg = document.getElementById("msg").value;
  let offset = Number(document.getElementById("offset").value);
  document.getElementById( "result").innerHTML = window.cipher.decode(offset, msg);
  event.preventDefault();
}
