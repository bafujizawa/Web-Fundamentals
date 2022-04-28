crustType = ["deep dish", "New York", "stuffed crust"]
sauceType = ["traditional", "marinara", "alfredo"]
cheese = ["mozzarella", "feta", "parmesan"]
toppings = ["pepperoni", "mushrooms", "garlic", "pineapple", "red onions"]

function pizzaOven(crustType, sauceType, cheese, toppings)
{
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    pizza.info = function()
    {
        console.log("Crust: " + pizza.crust)
        console.log("Sauce: " + pizza.sauce)
        console.log("Cheese: " + pizza.cheese)
        console.log("Toppings: " + pizza.toppings)
    }
    return pizza
}

pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"] )
pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
pizza3 = pizzaOven(crustType[Math.floor(Math.random() * 3)], sauceType[Math.floor(Math.random() * 3)], cheese[Math.floor(Math.random() * 3)], toppings[Math.floor(Math.random() * 3)])

