///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

var pizza = {
    name: 'Pepperoni',
    price: 13,
    category: 'Main course',
    popularity: 16,
    rating: 12,
    tags: ['tasty', 'savory', 'pepperoni', 'cheesy', 'Kid friendly']
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

//console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

//console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

/*
let {price} = pizza

console.log(price)
*/

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

/*
let {category} = pizza

console.log(category)
*/

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    {
        pizzaName: 'Cheese',
        pizzaPrice: 7,
        pizzaCategory: 'Appetizer',
        pizzaPopularity: 20,
        pizzaRating: 15,
        pizzaTags: ['Cheese', 'Plain', 'Kids', 'Cheesy', 'Mozerella','Tomato Sauce']
    },
    {
        pizzaName: 'Pepperoni',
        pizzaPrice: 12,
        pizzaCategory: 'Main Course',
        pizzaPopularity: 18,
        pizzaRating: 14,
        pizzaTags: ['Pepperoni', 'Kids', 'Plain', 'Tomato Sauce']
    },
    {
        pizzaName: '3 Meat',
        pizzaPrice: 15,
        pizzaCategory: 'Main Course',
        pizzaPopularity: 1,
        pizzaRating: 3,
        pizzaTags: ['Pepperoni', 'Sausage', 'Bacon', 'Tomato Sauce']
    },
    {
        pizzaName: 'Oreo',
        pizzaPrice: 10,
        pizzaCategory: 'Dessert',
        pizzaPopularity: 4,
        pizzaRating: 4,
        pizzaTags: ['Oreo', 'Cream Cheese', 'Dessert', 'Cookie']
    },
    {
        pizzaName: 'Cinnamon Roll',
        pizzaPrice: 10,
        pizzaCategory: 'Dessert',
        pizzaPopularity: 5,
        pizzaRating: 5,
        pizzaTags: ['Dessert', 'Cookie', 'Cinnamon', 'Cream Cheese']
    },
]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

/*
let newTag = 'Kids'

function findPizzasWithTag (tag){
    for (let i =0; i < foodArr.length; i++){
        if (foodArr[i].pizzaTags.includes(tag)){
            console.log(foodArr[i].pizzaName)
        }
    }
}
//     foodArr.forEach((pizza) => {
//         if (pizza.pizzaTags.includes(tag)){
//             console.log(pizza.pizzaName)
//         }
//     })

// }

// function findPizzaTag(pizza) {
//     if (pizza.pizzaTags.includes(tag)){
//         console.log(pizza.pizzaName)
//     }
// }

findPizzasWithTag(newTag)
*/

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

function filterByProperty (property, number, type){
    let bigPropertyArr = []
    let smallPropertyArr = []

    let typeAbove = foodArr.filter((broadProperty) => {
        if (property === 'rating' && broadProperty.pizzaRating < number){
            return bigPropertyArr.push(broadProperty.pizzaName)
        }
        else if (property === 'price' && broadProperty.pizzaPrice > number){
            return bigPropertyArr.push(broadProperty.pizzaName)
        }
        else if (property === 'popularity' && broadProperty.pizzaPopularity < number){
            return bigPropertyArr.push(broadProperty.pizzaName)
        }
    })

    let typeBelow = foodArr.filter((property2) => {
        if (property === 'rating' && property2.pizzaRating > number){
            return smallPropertyArr.push(property2.pizzaName)
        }
        else if (property === 'price' && property2.pizzaPrice < number){
            return smallPropertyArr.push(property2.pizzaName)
        }
        else if (property === 'popularity' && property2.pizzaPopularity > number){
            return smallPropertyArr.push(property2.pizzaName)
        }
    })

    if (type === 'above'){
        console.log(bigPropertyArr)
    }
    else if (type === 'below'){
        console.log(smallPropertyArr)
    }

}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

filterByProperty('rating', 10, 'above')
filterByProperty('price', 12, 'below')
filterByProperty('popularity', 21, 'above')