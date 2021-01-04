'use strict';
function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function () {
        let i = this.selector;
        if (i.startsWith('.') === true) {
            let newElem = document.createElement('div');
            newElem.className = i;
            newElem.style.cssText = 'height: 150px; width: 150px; background-color: red; font-size: 50px';
            newElem.innerText = prompt('What is my name?');
            document.body.append(newElem);
            
        } else if (i.startsWith('#') === true) {
            let newElem = document.createElement('p');
            newElem.id = i;
            newElem.style.cssText = 'height: 50px; width: 200px; background-color: green; font-size: 35px';
            newElem.innerText = prompt('What is my name?');
            document.body.append(newElem);
            
        }
        

    };
}

let elem = new DomElement('.class');
let elem2 = new DomElement('#id');
elem.createElement();
elem2.createElement();


   
