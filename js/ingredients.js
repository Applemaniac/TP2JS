let Ingredients = (function (){

    const data = ingredients;

    return {

        getIngredientsLength: () => data.length,
        getIngredientNameById: (id) => data[id].name,
        getIngredientPriceById: (id) => parseFloat(data[id].prix),
        getIngredientLocalById: (id) => data[id].local == 0 ? "Non" : "Oui",
    }

})();