const pizza = {
    name: 'Kaushik\'s Pizza',
    price: 100,
    getNameInUpperCase() {
        return this.name.toUpperCase();
    }
}

const toppings = ['tomato', 'onion']; 

const order = {
    pizza, toppings
}

console.log(order);
console.log(pizza.getNameInUpperCase());