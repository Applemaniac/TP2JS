function displayIngredients() {
    let tab = document.querySelector("div#table > table > tbody");

    for (let i = 0; i < getIngredientsLength(); i++){
        let node = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = getIngredientNameById(i);
        name.style.textAlign = "center";
        let local = document.createElement("td");
        local.textContent = getIngredientLocalById(i);
        let price = document.createElement("td");
        price.textContent = getIngredientPriceById(i) + "€";

        node.appendChild(name);
        node.appendChild(local);
        node.appendChild(price);

        tab.appendChild(node);
    }
}

function displayMeals() {
    let list = document.querySelector("div#list > ul");

    for (let i = 0; i < getMealLength(); i++){
        let node = document.createElement("li");

        let mealName = document.createElement("div");
        mealName.textContent = getMealNameById(i) + " : " + getMealTotalPriceById(i);
        mealName.style.fontWeight = "bold";

        let mealIngredientsList = document.createElement("div");
        mealIngredientsList.textContent = "Ingrédients : ";


        for (let q = 0; q < getMealIngredientsById(i).length; q++){
            mealIngredientsList.textContent += q === getMealIngredientsById(i).length - 1 ? getIngredientNameById(getMealIngredientsById(i)[q]) : getIngredientNameById(getMealIngredientsById(i)[q]) + ", ";
        }
        mealIngredientsList.style.fontStyle = "italic";

        let mealPreparationTime = document.createElement("div");
        mealPreparationTime.textContent = "Temps de préparation estimé : " + getMealPreparationTimeById(i) + " minutes";
        mealPreparationTime.style.fontStyle = "italic";


        let space = document.createElement("br");

        node.appendChild(mealName);
        node.appendChild(mealIngredientsList);
        node.appendChild(mealPreparationTime);
        node.appendChild(space);


        list.appendChild(node);

    }
}

displayIngredients();
displayMeals();