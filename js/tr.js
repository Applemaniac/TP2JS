let Tr = (function (){

    return{
        create: () => document.createElement("tr"),
        addChild: (tr, ...arg) => arg.forEach((td) => tr.appendChild(td)),
    }
})();