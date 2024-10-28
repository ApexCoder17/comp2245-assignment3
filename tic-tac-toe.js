"use strict";

window.onload = funtion(){

    Array.from(document.getElementById('board').children).forEach(element => element.setAttribute('class', 'square'));
}