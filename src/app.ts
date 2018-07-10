type Size = 'small' | 'medium' | 'large';

let pizzaSize: Size = 'small';
const selectSize = (size: Size) => {
  pizzaSize = size;
};

selectSize('medium');