console.log('Ssup? Kaushik!');

const pizzas = [
    {name: 'Pepporini', toppings: ['pepperoni']}
];
console.log(pizzas);

const upperCasePizzas = pizzas.map(pizza => pizza.name.toUpperCase());
console.log(upperCasePizzas);