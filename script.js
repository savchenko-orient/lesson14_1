'use strict';
function DomElement(selector = '#someClass', height = '200px', width = '175px', bg = 'red', fontSize = '30px') {
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
            newElem.style.cssText = `height: ${this.height}; width:${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
            newElem.innerText = prompt('What is my name?');
            document.body.append(newElem);
            
        } else if (i.startsWith('#') === true) {
            let newElem = document.createElement('p');
            newElem.id = i;
            newElem.style.cssText = `height: ${this.height}; width:${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
            newElem.innerText = prompt('What is my name?');
            document.body.append(newElem);
            
        }
        

    };
}

let elem = new DomElement('.classDiv', '100px', '300px', 'green', '25px');
let elem2 = new DomElement('#idP', '50px', '500px', 'blue', '30px');
elem.createElement();
elem2.createElement();


   
