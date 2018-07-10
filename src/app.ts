let pizzaSize: string = 'small';

function setPizzaSize(size: 'small' | 'medium' | 'large') {
    pizzaSize = size;
}

setPizzaSize('medium');
console.log(`Pizza size set to ${pizzaSize}`);