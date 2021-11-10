let Tab = (function (){

    return{
        get: (selector) => document.querySelector(selector),
        addChild: (tab, arg) => tab.appendChild(arg),
    }
})();