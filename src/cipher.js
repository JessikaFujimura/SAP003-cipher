window.cipher = {
  encode: encode,
  decode: decode
};
function encode (offset, msg) {
  let Arraymsg = [];
  let msgitem;
  if (offset > 0) {
    for ( let i=0; i < msg.length; i++) {
      Arraymsg[i] = msg.charCodeAt(i);
      if (Arraymsg[i]>=65 && Arraymsg[i]<=90) {
        msgitem = ((Arraymsg[i] - 65 + offset) % 26 + 65);
      } else if (Arraymsg[i]>=97 && Arraymsg[i]<=122) {
        msgitem = ((Arraymsg[i] - 97 + offset) % 26 + 97);
      } else {
        msgitem = msg.charCodeAt(i);
      }
      Arraymsg[i] = String.fromCharCode(msgitem);
    }
    return Arraymsg.join ("");
  }
  if (offset < 0) {
    for ( let i=0; i < msg.length; i++) {
      Arraymsg[i] = msg.charCodeAt(i);
      if (Arraymsg[i]>=65 && Arraymsg[i]<=90) {
        msgitem = ((Arraymsg[i] - 90 + offset) % 26 + 90);
      } else if (Arraymsg[i]>=97 && Arraymsg[i]<=122) {
        msgitem = ((Arraymsg[i] - 122 + offset) % 26 + 122);
      } else {
        msgitem = msg.charCodeAt(i);
      }
      Arraymsg[i] = String.fromCharCode(msgitem);
    }
    return Arraymsg.join ("");
  }
}
function decode (offset, msg) {
  let Arraymsg = [];
  let msgitem;
  for ( let j=0; j < msg.length; j++) {
    Arraymsg[j] = msg.charCodeAt(j);
    if (Arraymsg[j]>=65 && Arraymsg[j]<=90) {
      msgitem = ((Arraymsg[j]- 90 - offset) % 26 + 90);
    } else if (Arraymsg[j]>=97 && Arraymsg[j]<=122) {
      msgitem = ((Arraymsg[j]- 122 - offset) % 26 + 122);
    } else {
      msgitem = msg.charCodeAt(j);
    }
    Arraymsg[j] = String.fromCharCode(msgitem);
  }
  return Arraymsg.join("");
}    