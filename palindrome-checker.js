function palindrome(str) {
    let newArray = [];
    let firstHalf = [];
    let secondHalf = [];
    let half = [];
    let regExp = /[A-Za-z0-9]/ig;
  
    newArray = str.match(regExp);
    newArray = newArray.map(
      item => {
        return item.toLowerCase();
      }
    )
  
    if ( newArray.length % 2 === 0 ) {
      firstHalf = newArray.slice(0, newArray.length / 2);
      secondHalf = newArray.slice(newArray.length / 2, newArray.length);
    } else {
      firstHalf = newArray.slice(0, newArray.length / 2);
      half = newArray.slice(newArray.length / 2, (newArray.length / 2) + 1);
      secondHalf = newArray.slice((newArray.length / 2) + 1, newArray.length);
    }
  
    secondHalf.reverse();
  
    for (let i = 0; i < firstHalf.length; i++) {
      if (firstHalf[i] != secondHalf[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));