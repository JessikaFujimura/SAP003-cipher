window.cipher = {
  encode: encode,
  decode: decode
};
let arrayMsg = [];
let msgItem;

function encode (offset, msg) {
  if (offset > 0) {
    for (let i=0; i < msg.length; i++) {
      arrayMsg[i] = msg.charCodeAt(i);
      if (arrayMsg[i]>=65 && arrayMsg[i]<=90) {
        msgItem = ((arrayMsg[i] - 65 + offset) % 26 + 65);
      } else if (arrayMsg[i]>=97 && arrayMsg[i]<=122) {
        msgItem = ((arrayMsg[i] - 97 + offset) % 26 + 97);
      } else {
        msgItem = msg.charCodeAt(i);
      }
      arrayMsg[i] = String.fromCharCode(msgItem);
    }
    return arrayMsg.join ("");
  }
  if (offset < 0) {
    for (let i=0; i < msg.length; i++) {
      arrayMsg[i] = msg.charCodeAt(i);
      if (arrayMsg[i]>=65 && arrayMsg[i]<=90) {
        msgItem = ((arrayMsg[i] - 90 + offset) % 26 + 90);
      } else if (arrayMsg[i]>=97 && arrayMsg[i]<=122) {
        msgItem = ((arrayMsg[i] - 122 + offset) % 26 + 122);
      } else {
        msgItem = msg.charCodeAt(i);
      }
      arrayMsg[i] = String.fromCharCode(msgItem);
    }
    return arrayMsg.join ("");
  }
}

function decode (offset, msg) {
  for ( let j=0; j < msg.length; j++) {
    arrayMsg[j] = msg.charCodeAt(j);
    if (arrayMsg[j]>=65 && arrayMsg[j]<=90) {
      msgItem = ((arrayMsg[j]- 90 - offset) % 26 + 90);
    } else if (arrayMsg[j]>=97 && arrayMsg[j]<=122) {
      msgItem = ((arrayMsg[j]- 122 - offset) % 26 + 122);
    } else {
      msgItem = msg.charCodeAt(j);
    }
    arrayMsg[j] = String.fromCharCode(msgItem);
  }
  return arrayMsg.join("");
}    