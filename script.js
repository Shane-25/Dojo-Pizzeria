var pizza1 = "Pizza 1";
console.log(pizza1)

function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(s1);

var pizza2 = "Pizza 2";
console.log(pizza2)

var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(s2);

var pizza3 = "Pizza 3";
console.log(pizza3)

var s3 = pizzaOven("thin crust", "marinara", ["mozzarella", "cheddar"], ["pineapple", "canadian bacon", "onions"]);

console.log(s3);

var pizza4 = "Pizza 4";
console.log(pizza4)

var s4 = pizzaOven("deep dish", "traditonal", ["cheddar", "mozzarella"], ["pepperoni", "sausage", "olives", "onions"]);

console.log(s4);