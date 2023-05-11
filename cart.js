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

const summedPrice = cart.reduce((acc, object) => {
    return acc + object.price
},0)

// console.log(summedPrice)

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

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax){
    let finalCartValue = cartTotal * tax - couponValue
    return console.log(finalCartValue)
}

// calcFinalPrice(57, 12, 1.06)

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
    TEXT ANSWER HERE

    NUMBER OF ITEMS IN THE ORDER - This is a very important piece of information the restaurant needs to make the customer happy
    PRICE OF THE ORDER - This piece of information could be pretty useful to make sure the customer is paying the appropriate price
    REWARDS MEMBER - Could help keep track of any food items the restaurant owes the customer for free
    CUSTOMER BIRTHDAY - For any desserts the restaurant might provide for free for the customer's birthday

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerInfo = {
    birthday: "January 1",
    rewardsMember: false,
    orderItmes: 0,
    orderPrice: 0,
}