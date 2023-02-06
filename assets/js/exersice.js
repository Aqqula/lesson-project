'use strict'

function logMessage(){
    console.log('message: click');
}

// const button = document.getElementsByTagName('button')[0];

const [button] = document.getElementsByTagName('button');

button.addEventListener('click',logMessage);

const test = document.getElementById('test');
console.log(test);

const [input] = document.getElementsByName('input');
console.log(input);

const list = document.getElementsByClassName('item');
console.log(list);

const h1 = document.querySelector('h1');
console.log(h1);

const ps = document.querySelectorAll('p');
console.log(ps);

//TASK
const [img1] = document.images;
const [img2] = document.getElementsByTagName('img');
const img3 = document.querySelector('img');

const ps3 = document.querySelectorAll('.article:nth-child(3)>p');

const h2 = document.querySelector('.article:last-child h2');
