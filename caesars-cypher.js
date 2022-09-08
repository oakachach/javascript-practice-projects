function rot13(str) {
    let alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let messageString = str;
    let index = 0;
    let messageArray = str.split('');
    const SHIFT = 13;
    let decodedString = "";
    //console.log(messageArray);
    //console.log(alphabetString.indexOf('A'));
  
    
    for (let i = 0; i < messageArray.length; i++) {
      if (alphabetString.indexOf(messageArray[i]) === -1) {
        continue;
      }
  
      index = (alphabetString.indexOf(messageArray[i]) + SHIFT) % alphabetString.length;
      messageArray[i] = alphabetString[index];
    }
  
    decodedString = messageArray.reduce(
      (total, item) => {
        return total + item;
      }, ""
    )
    
    return decodedString;
  }
  
  rot13("SERR PBQR PNZC");