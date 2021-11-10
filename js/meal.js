let Meal = (function (){
    const data = meal;

    return{
        // Tous les getters pour ne pas accéder aux données directement !

        getMealLength: () => data.length,
        getMealNameById: (id) => data[id].name,
        getMealPreparationTimeById: (id) => data[id].preparationPrice,
        getMealIngredientsById: (id) => data[id].ingredients,
        getMealPreparationPriceById: (id) => parseFloat(data[id].preparationPrice),
        getMealTotalPriceById: (id) => {
        let ingredients = Meal.getMealIngredientsById(id);
        let totalPrice = Meal.getMealPreparationPriceById(id);
        for (let i = 0; i < ingredients.length; i++){
            totalPrice += Ingredients.getIngredientPriceById(ingredients[i]);
        }
        return totalPrice.toFixed(2) + "€";
        }

        }
}) ();