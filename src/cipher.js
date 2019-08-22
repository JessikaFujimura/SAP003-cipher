window.cipher = { };
  function Encode(msg, fator) {
    let conjcodASCII = [];
    let msglength = msg.length;
    for (let i=0; i < msglength; i++){
      let codASCII = msg.charCodeAt(i);
      conjcodASCII.push (codASCII);
    }
    let conjcodASCIIFator = [];
    let codASCIICifra;
    function SomaFator (item){
    codASCIICifra = item + fator;
    if(codASCIICifra>90){
      codASCIICifra= codASCIICifra-26;
    }
    conjcodASCIIFator.push(codASCIICifra);
  }
  conjcodASCII.forEach(SomaFator);
  let conjcodASCIIF = [];
  function ConvASCII (item){
    codstr = item.toString();
    codCifra = String.fromCharCode(codstr);
    conjcodASCIIF.push(codCifra);
  }
  conjcodASCIIFator.forEach(ConvASCII);
  let msgcifrada = conjcodASCIIF.join('')
  return msgcifrada;
  }
  function Decode(){
      
    return
  }

