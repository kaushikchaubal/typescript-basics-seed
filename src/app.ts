type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'KC Pizza', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);