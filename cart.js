///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a,c) => ({price: a.price + c.price}));
console.log(summedPrice);

const summedPriceTwo = cart.reduceRight((acc, el) => {
    return acc + el.price
}, 0)

console.log(summedPriceTwo);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(total, coupon, tax) {
  total *= (1 + tax)
  total -= coupon
  return total
}

// console.log(calcFinalPrice(50, 10, .0825))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Name - string - this is included so that customers can be searched for using their name
    phone_number - string  - can be used as a second criteria to pull up an account as well as contacting guest about new discounts or deals
    birthday - string - can be used to give deals based off birthday
    total_visits - number - see your most common guests
    avg_order - number - how much does this guest spend everytime they come in. You can focus on bringing in the people that spend the most
    rewards_earned - array - stores which rewards this guest has earned that can be used in store

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerOne = {
    name: 'Jim Halpert',
    phoneNumber: '123-456-7890',
    birthday: '12/5/85',
    totalVisits: 12,
    avgOrder: 45.12,
    rewardsEarned: ['tenPercentOff', '10Off25', 'BOGO', 'freeApp']
}
