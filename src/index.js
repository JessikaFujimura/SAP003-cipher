const msg = document.getElementById("msg");
const offset = document.getElementById("offset");
const result = document.getElementById("result");

document.getElementById("encode").addEventListener("click", () => {
  if (!msg.value || !offset.value) {
    Check(msg, offset);
  } else {
    result.innerHTML = window.cipher.encode(Number(offset.value), msg.value);
  }
});

document.getElementById("decode").addEventListener("click", () => {
  if (!msg.value || !offset.value) {
    Check(msg, offset);
  } else {
    result.innerHTML = window.cipher.decode(Number(offset.value), msg.value);
  }
});

function Check(msg, offset) {
  if (!msg.value) {
    alert("Digite uma mensagem!");
    msg.focus();
  } else if (!offset.value) {
    alert("Digite uma chave de codificação!");
    offset.focus();
  }
}

document.getElementById("clean").addEventListener("click", () => {
  msg.value = "";
  offset.value = "";
  result.innerHTML = "";
});