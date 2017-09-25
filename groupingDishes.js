function groupingDishes(dishes) {
  let currentDish;
  let grouping = {};

  for (let i = 0; i < dishes.length; i++) {
    currentDish = dishes[i][0];

    for (let j = 1; j < dishes[i].length; j++) {
      if (grouping[dishes[i][j]] != undefined) {
        grouping[dishes[i][j]].push(currentDish);
      } else {
        grouping[dishes[i][j]] = [currentDish];
      }
    }
  }

  Object.keys(grouping).forEach( ingredient => {
    if (grouping[ingredient].length < 2) {
      delete grouping[ingredient];
    }
  });

  let sortedIngredients = Object.keys(grouping).sort();

  let result = [];

  for (let i = 0; i < sortedIngredients.length; i++) {
    let curIngredient = sortedIngredients[i];
    result.push([curIngredient].concat(grouping[curIngredient].sort()));
  }

  return result;
}
