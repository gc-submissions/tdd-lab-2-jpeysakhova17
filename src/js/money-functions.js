"use script";

function formatCurrency(amount) {
    if (amount < 0) {
        return "-$" + amount.toFixed(2).slice(1); //slice makes it start at the point it's slicing so a negative number would be -2.00, slice(1) makes it start at 2 rather than 0
    } else {
        return "$" + amount.toFixed(2); //can add together like this or `$ ${amount.toFixed(2)}`
    }
}

function getCoins(cents) {
    //41 cents - quarter which is 25 cents and then next
    let change = cents; //change is 41
    var quarter = Math.floor(cents/25); //1 quarter
    change = change-quarter*25; //16 (you would multiply by however many quarters go into the cents)
    var dime = Math.floor(change/10); //1 dime
    change = change-dime*10; //change is 6 cents
    var nickel = Math.floor(change/5); //1 nickel
    change = change-nickel*5; //change is 1 cent
    var penny = change; //whatever is left 
    return {
      quarters: quarter,
      dimes: dime,
      nickels: nickel,
      pennies: penny
    }
     
}

module.exports={formatCurrency, getCoins};


// function pushing() {
//     let myArray = [];
//     for (let i=0; i<=100; i++) {
//         if (i%2 !== 0) { using modules to get even/odd number ---> anything *2 would have 0 remainder so it's even 
//             myArray.push(i); ----> how you would push it into the array
//         }
//     }   
//     return myArray;
// }

//example 
//let word1 = "Jenny";
//let word2 = "Peysakhova"
// `${word1} the greatest ${word2}`
// "Jenny the greatest Peysakhova" 