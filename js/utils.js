let Utils = (function (){
    return{
        create: (elem) => document.createElement(elem),
        addText: (elem, text) => elem.textContent = text,
        textAlign: (elem, arg) => elem.style.textAlign = arg,
        addChild: (li, ...args) => args.forEach((div) => li.appendChild(div)),
        get: (selector) => document.querySelector(selector),
        addClass: (elem, className) => elem.className = className,
        fontWeight: (elem, arg) => elem.style.fontWeight = arg,
        fontStyle: (elem, arg) => elem.style.fontStyle = arg,
    }
})();