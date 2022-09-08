function telephoneCheck(str) {
    let formats = {
      1: /\d\d\d-\d\d\d-\d\d\d\d/,
      2: /\(\d\d\d\)\d\d\d-\d\d\d\d/,
      3: /\(\d\d\d\)\s\d\d\d-\d\d\d\d/,
      4: /\d\d\d\s\d\d\d\s\d\d\d\d/,
      5: /\d\d\d\d\d\d\d\d\d\d/,
    };
    let newString = str;
    let regExpCountryCode = /^1\s|^1/;
    let startsWithCountryCode = regExpCountryCode.test(newString);
    let isValidFormat = false;
    let matchesRegExp = false;
    let hasSameLength = false;
    let matchLength = 0;
    
    if (startsWithCountryCode === true) {
      newString = newString.replace(/^1\s|^1/, "");
    }
    console.log(newString);
  
    for (let key in formats) {
      try {
        matchLength = newString.match(formats[key])[0].length;
        hasSameLength = (matchLength === newString.length);
      } catch {
  
      }
      matchesRegExp = formats[key].test(newString);
      
      if (hasSameLength && matchesRegExp) {
        isValidFormat = true;
        break;
  
      }
    }
  
    return isValidFormat;
  }
  
  telephoneCheck("1(555)555-5555");