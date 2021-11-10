function displayMeals() {
    let list = document.querySelector("div#list > ul");

    for (let i = 0; i < Meal.getMealLength(); i++){
        let node = document.createElement("li");
        node.className = "list-group-item";

        let mealName = document.createElement("div");
        mealName.textContent = Meal.getMealNameById(i) + " : " + Meal.getMealTotalPriceById(i);
        mealName.style.fontWeight = "bold";

        let mealIngredientsList = document.createElement("div");
        mealIngredientsList.textContent = "Ingrédients : ";


        for (let q = 0; q < Meal.getMealIngredientsById(i).length; q++){
            mealIngredientsList.textContent += q === Meal.getMealIngredientsById(i).length - 1 ? Ingredients.getIngredientNameById(Meal.getMealIngredientsById(i)[q]) : Ingredients.getIngredientNameById(Meal.getMealIngredientsById(i)[q]) + ", ";
        }
        mealIngredientsList.style.fontStyle = "italic";

        let mealPreparationTime = document.createElement("div");
        mealPreparationTime.textContent = "Temps de préparation estimé : " + Meal.getMealPreparationTimeById(i) + " minutes";
        mealPreparationTime.style.fontStyle = "italic";


        let space = document.createElement("br");

        node.appendChild(mealName);
        node.appendChild(mealIngredientsList);
        node.appendChild(mealPreparationTime);
        node.appendChild(space);


        list.appendChild(node);

    }
}

Tableau.displayIngredients();
displayMeals();