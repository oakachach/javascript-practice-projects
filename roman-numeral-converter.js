var ROMAN_TO_ARABIC = {
    M: {
        value: 1000,
        letter: 'M',
        repeatable: true
    },
    CM: {
        value: 900,
        letter: 'CM',
        repeatable: false
    },
    D: {
        value: 500,
        letter: 'D',
        repeatable: false
    },
    CD: {
        value: 400,
        letter: 'CD',
        repeatable: false
    },
    C: {
        value: 100,
        letter: 'C',
        repeatable: true
    },
    XC: {
        value: 90,
        letter: 'XC',
        repeatable: false
    },
    L: {
        value: 50,
        letter: 'L',
        repeatable: false
    },
    XL: {
        value: 40,
        letter: 'XL',
        repeatable: false
    },
    X: {
        value: 10,
        letter: 'X',
        repeatable: true
    },
    IX: {
        value: 9,
        letter: 'IX',
        repeatable: false
    },
    V: {
        value: 5,
        letter: 'V',
        repeatable: false
    },
    IV: {
        value: 4,
        letter: 'IV',
        repeatable: false
    },
    I: {
        value: 1,
        letter: 'I',
        repeatable: true
    }
};

function convertToRoman(num) {
  let arabicArray = [];
  let romanArray = [];
  let romanLetter = "";
  let newNum = num;
  let stringNum = newNum.toString();
  let zeroCounter = "0".repeat(stringNum.length - 1);
  let closestRoman = {};
  let romanString = "";
  
  for (let i = 0; i < stringNum.length; i++) {
    arabicArray.push(parseInt(stringNum[i] + zeroCounter));
    zeroCounter = zeroCounter.substr(0, zeroCounter.length - 1);
  }

  console.log(arabicArray);

  arabicArray.forEach(
    item => {
      while (item > 0) {
        closestRoman = getClosestRomanNumber(item);
        item -= closestRoman.value;
        romanLetter += closestRoman.letter;
        if (closestRoman.repeatable === true) {
          for (let i = 0; i < 2; i++) {
            if (item === 0) {
              break;
            }
            item -= closestRoman.value;
            romanLetter += closestRoman.letter;
          }
        }
      }

      romanArray.push(romanLetter);
      romanLetter = "";
    }
  );

  console.log(romanArray);
  
  romanString = romanArray.reduce(
    (total, item) => {
      return total + item;
    }, ""
  )

  console.log(romanString);

  return romanString;
}

function getClosestRomanNumber(_item) {
  for (let key in ROMAN_TO_ARABIC) {
    if (ROMAN_TO_ARABIC[key].value > _item){
      continue;
    }

    return ROMAN_TO_ARABIC[key];
  }
}

function getKeyByValue(object, value) {
  Object.keys(ROMAN_TO_ARABIC).filter(
    (key, item) => {
      return ROMAN_TO_ARABIC[key].value === 9;
    }
  )
}

convertToRoman(12);