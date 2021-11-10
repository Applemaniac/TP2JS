let Liste = (function (){
    return{
        displayMeals: () => {
            let list = Utils.get("div#list > ul");

            for (let i = 0; i < Meal.getMealLength(); i++){
                let li = Utils.create("li");
                let space = Utils.create("br");

                Utils.addClass(li, "list-group-item");

                let mealName = Utils.create("div");
                Utils.addText(mealName, Meal.getMealNameById(i) + " : " + Meal.getMealTotalPriceById(i));
                Utils.fontWeight(mealName, "bold");

                let mealIngredientsList = Utils.create("div");
                Utils.addText(mealIngredientsList, "Ingrédients : ");


                for (let q = 0; q < Meal.getMealIngredientsById(i).length; q++){
                    mealIngredientsList.textContent += q === Meal.getMealIngredientsById(i).length - 1 ? Ingredients.getIngredientNameById(Meal.getMealIngredientsById(i)[q]) : Ingredients.getIngredientNameById(Meal.getMealIngredientsById(i)[q]) + ", ";
                }

                Utils.fontStyle(mealIngredientsList,"italic");

                let mealPreparationTime = Utils.create("div");
                Utils.addText(mealPreparationTime,"Temps de préparation estimé : " + Meal.getMealPreparationTimeById(i) + " minutes");
                Utils.fontStyle(mealPreparationTime, "italic");

                Utils.addChild(li, mealName, mealIngredientsList, mealPreparationTime, space);
                Utils.addChild(list, li);

            }
        }
    }
})();