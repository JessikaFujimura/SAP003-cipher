window.cipher = {
  Encode:Encode,
  Decode: Decode
};
function Encode(msg, fator, result) {
  let ConjASCII = [];
  let codASCII;
    for (let i=0; i < msg.length; i++){
      codASCII = msg.charCodeAt(i);
      ConjASCII.push (codASCII);
    }
  let conjASCIIFator = [];
  let codASCIICifra;
  function SomaFator (item){
    if(item <= 90 & item >= 65){
      codASCIICifra = ((item - 65 + fator) % 26 + 65);
      conjASCIIFator.push(codASCIICifra)};
    }
  ConjASCII.forEach(SomaFator);
  let conjcodASCIIF = [];
  function ConvASCII (item){
    codstr = item.toString();
    codCifra = String.fromCharCode(codstr);
    conjcodASCIIF.push(codCifra);
  }
    conjASCIIFator.forEach(ConvASCII);
    result = conjcodASCIIF.join('')
  //return result;
  }

  function Decode(){
      
    return
  }

