window.cipher = {
  encode: encode,
  decode: decode
};
function encode (Msg, Fator) {
  let ConjASCII = [];
  for ( let i=0; i < Msg.length; i++) {
    ConjASCII.push(Msg.charCodeAt(i)+ Number(Fator));
  }
  let ConjASCIIFator = [];
  function SomaFator (item) {
    ConjASCIIFator.push((item - 65 ) % 26 + 65);
    
  }
  ConjASCII.forEach(SomaFator);
  let ConjcodASCIIF = [];
  function ConvASCII ( item) {
    ConjcodASCIIF.push (String.fromCharCode(item.toString()));
  }
  ConjASCIIFator.forEach (ConvASCII);
  return ConjcodASCIIF.join ("");
}
function decode (Codigo, Refator) {
  let ConjCodigo = [];
  for ( let i=0; i < Codigo.length; i++) {
    ConjCodigo.push (Codigo.charCodeAt(i)- Number(Refator));
  }
  let ConjASCIIRFator = [ ];
  function SubtFator (item) {
    ConjASCIIRFator.push (((item - 90) % 26 + 90));
  }
  ConjCodigo.forEach(SubtFator);
  let Conj = [];
  function ConvL ( item) {
    Conj.push ( String.fromCharCode(item.toString()));
  }
  ConjASCIIRFator.forEach(ConvL);
  return Conj.join ("");
}