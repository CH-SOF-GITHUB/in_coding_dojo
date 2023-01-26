//Objectives
// Practice making JavaScript objects
// Practice using Math.random()
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizzaOven1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  [("pepperoni", "sausage")]
);
var pizzaOven2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  [("mushrooms", "olives", "onions")]
);

var pizzaOven3 = pizzaOven(
  "deep dish",
  "marinara",
  ["mozzarella"],
  [("mushrooms", "olives", "sausage")]
);
var pizzaOven4 = pizzaOven(
  "hand tossed",
  "traditional",
  ["mozzarella", "feta", "pepperoni"],
  [("mushrooms", "olives", "onions", "marinara")]
);

//Declare a variable list of pizzas
var list = [pizzaOven1, pizzaOven2, pizzaOven3, pizzaOven4];
function randomPizza(array) {
  var random = Math.random() * 3;
  var newrandom = Math.ceil(random);
  console.log(newrandom);
  console.log(array[newrandom]);
}

randomPizza(list);
