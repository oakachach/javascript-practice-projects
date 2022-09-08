function checkCashRegister(price, cash, cid) {
    let cashDivisions = getCashDivisions();
    let cashInDrawer = cid;
    let amountAvailable = getAmountAvailable(cashInDrawer);
    let initialAmount = (cash - price).toFixed(2);
    let amountToReturn = initialAmount;
    let currencyToUse = [];
    let cashToReturn = [];
    let change;
  
    if (amountAvailable === amountToReturn) {
      return {
        status: "CLOSED",
        change: cashInDrawer
      }
    }
    //console.log("amount to return", amountToReturn);
  
    cashInDrawer.reverse();
    currencyToUse = cashDivisions.filter(
      item => {
        return item[1] <= amountToReturn;
      }
    )
    .map(
      item => {
        return item[0];
      }
    );
    //console.log('currency  to use', currencyToUse);
  
    cashInDrawer = cashInDrawer.filter(
      item => {
        return currencyToUse.includes(item[0]);
      }
    )
  
    //console.log('cash in drawer', cashInDrawer);
    
    for (let i = 0; i < cashInDrawer.length; i++) {
      let equivalence = cashDivisions.filter(
        item => {
          return (item[0] === cashInDrawer[i][0]);
        }
      )[0][1];
      //console.log('equivalence', equivalence);
      // Restamos la equivalencia y la sumamos donde toca.
      // Ha de haber una suma.
      let sum = 0;
      while (cashInDrawer[i][1] > 0 && 
            initialAmount > 0 
            && equivalence <= initialAmount) {
  
        //console.log("cash in drawer", cashInDrawer[i]);
        //console.log("initial amount", initialAmount);
        //console.log('equivalence', equivalence);
        //console.log('')
  
        initialAmount = (initialAmount - equivalence).toFixed(2);
        cashInDrawer[i][1] -= equivalence;
        sum += equivalence;
      }
      //console.log(cashInDrawer[i]);
      //console.log(initialAmount)
      if (sum !== 0) {
        cashToReturn.push([cashInDrawer[i][0], sum]);
      }
      
      if (initialAmount === 0) {
        break;
      }
    }
  
    console.log('cash to return', cashToReturn);
    
    if (amountAvailable < initialAmount || initialAmount > 0) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    }
  
    change = { status: 'OPEN', change: cashToReturn};
    return change;
  }
  
  function getCashDivisions() {
    return [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ]
  }
  
  function getAmountAvailable(_cashInDrawer) {
    return _cashInDrawer.reduce(
      (total, item) => {
        return parseFloat(total + item[1]);
      }, 0
    ).toFixed(2);
  }
  
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])