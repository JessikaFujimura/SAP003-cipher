window.cipher = {
  Encode: Encode,
  Decode: Decode
};
function Encode(Msg, fator) {
  let ConjASCII = [];
  for (let i=0; i < Msg.length; i++){
    ConjASCII.push (Msg.charCodeAt(i));
    }
  let ConjASCIIFator = [];
  function SomaFator (item){
    if(item <= 90 && item >= 65){
      ConjASCIIFator.push(((item - 65 + fator) % 26 + 65))};
    }
  ConjASCII.forEach(SomaFator);
  let ConjcodASCIIF = [];
  function ConvASCII (item){
    ConjcodASCIIF.push(String.fromCharCode(item.toString()));
  }
  ConjASCIIFator.forEach(ConvASCII);
  return ConjcodASCIIF.join('');
}
function Decode(Codigo, Refator){
  let ConjCodigo = [];
  for (let i=0; i < Codigo.length; i++){
    ConjCodigo.push (Codigo.charCodeAt(i));
    }
  let ConjASCIIRFator = [];
  function SubtFator (item){
    if (item <= 90 && item >= 65){
      ConjASCIIRFator.push(((item - 90 - Refator) % 26 + 90))};
    }
  ConjCodigo.forEach(SubtFator);
  let Conj = [];
  function ConvL (item){
    Conj.push(String.fromCharCode(item.toString()));
  }
  ConjASCIIRFator.forEach(ConvL);
  return Conj.join('');
  }
