const pizzaBase = 10;
const pizzaToppings = 2

function calculateCost(pizzaBase: number, pizzaToppings: number) {
    return pizzaBase + 1.5 * pizzaToppings;
}

const pizzaPrize = calculateCost(pizzaBase, pizzaToppings);
console.log(`Pizza costs: ${pizzaPrize}`);