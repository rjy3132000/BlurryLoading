/* Author: 

*/


let per = document.querySelector('p');
let blurry = document.querySelector(".image");

let a = 0;
let d = 100;
let b = setInterval(blurring, 50);

function blurring(){
    a++;
    if (a === 100){
        clearInterval(b)
    }
    per.innerText = `${a} %`;
    nonBlur()
}

function nonBlur(){
    d--;
    blurry.style.filter = `blur(${d}px)`;
    per.style.opacity = `${d/100}`
}





















