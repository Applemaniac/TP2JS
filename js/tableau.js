let Tableau = (function (){
    return{
        displayIngredients : () => {
            let tab = Tab.get("div#table > table > tbody");
            let length = Ingredients.getIngredientsLength();

            for (let i = 0; i < length; i++){

                let tr = Tr.create();

                let name = Td.create();
                let local = Td.create();
                let price = Td.create();

                Td.text(name, Ingredients.getIngredientNameById(i));
                Td.text(local, Ingredients.getIngredientLocalById(i));
                Td.text(price, Ingredients.getIngredientPriceById(i).toFixed(2) + "€");

                Td.textAlign(name, "center");
                Td.textAlign(local, "center");
                Td.textAlign(price, "center");

                Tr.addChild(tr, name, local, price);

                Tab.addChild(tab, tr);
            }
        }
    }
})();