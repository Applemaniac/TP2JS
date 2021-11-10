let Tableau = (function (){
    return{
        displayIngredients : () => {
            let tab = Utils.get("div#table > table > tbody");
            let length = Ingredients.getIngredientsLength();

            for (let i = 0; i < length; i++){

                let tr = Utils.create("tr");

                let name = Utils.create("td");
                let local = Utils.create("td");
                let price = Utils.create("td");

                Utils.addText(name, Ingredients.getIngredientNameById(i));
                Utils.addText(local, Ingredients.getIngredientLocalById(i));
                Utils.addText(price, Ingredients.getIngredientPriceById(i).toFixed(2) + "€");

                Utils.textAlign(name, "center");
                Utils.textAlign(local, "center");
                Utils.textAlign(price, "center");

                Utils.addChild(tr, name, local, price);

                Utils.addChild(tab, tr);
            }
        }
    }
})();