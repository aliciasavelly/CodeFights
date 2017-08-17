function groupingDishes(dishes) {
  let ingredients = {};

  for (let i = 0; i < dishes.length; i++) {
    let currentDish = dishes[i][0];

    for (let j = 1; j < dishes[i].length; j++) {
      let currentIngredient = dishes[i][j];
      if (ingredients[currentIngredient]) {
        ingredients[currentIngredient].push(currentDish);
      } else {
        ingredients[currentIngredient] = [currentDish];
      }
    }
  }

  let result = [];

  for (let food in ingredients) {
    if (ingredients[food].length > 1) {
      result.push([food].concat(ingredients[food].sort()));
    }
  }

  return result.sort();
}
