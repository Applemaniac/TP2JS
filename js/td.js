let Td = (function (){

    return{
        create: () => document.createElement("td"),
        textAlign: (td, arg) => td.style.textAlign = arg,
        text: (td, text) => td.textContent = text,
    }
})();