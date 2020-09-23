/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

restaurantBills = [124, 48, 268];

var tipcalculator = function(billsArray) {
  var tips = 0;
  var tipsArray = [];
  var finalPaidAmountArray = [];
  for (var i = 0; i < billsArray.length; i++) {
    if (billsArray[i] < 50) {
      tips = billsArray[i] * 0.2;
    } else if (billsArray[i] >= 50 && billsArray[i] < 200) {
      tips = billsArray[i] * 0.15;
    } else {
      tips = billsArray[i] * 0.1;
    }
    tipsArray.push(tips);
    finalPaidAmountArray.push(billsArray[i] + tips);
  }
  console.log(tipsArray);
  console.log(finalPaidAmountArray);
};

tipcalculator(restaurantBills);
