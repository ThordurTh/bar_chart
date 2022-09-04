// const model = [6, 31, 5, 18, 19, 12, 30, 5, 24, 9, 6, 21, 21, 3, 29, 7, 28, 15, 20, 12, 31, 32, 30, 3, 6, 26, 4, 17, 26, 27, 29, 7, 22, 2, 31, 3, 10, 23, 21, 25]

// let bar = document.querySelector(".bar");

// function modifyBars() {
//     // bar.style.height = `50px`;
//     for (let index = 0; index < model.length; index++) {
//         console.log(model[index]);
//         bar.style.height = `${index}px`;
//     }
// };

// let bars = document.getElementById("bars").children;

// // for (let i = 0; i < bars.length; i++) {
// //     console.log(i);
// //     bars.style.height = `${model[0]}px`;
// // }

// let i = 0;

// bars.forEach(myfunction)

// function myfunction(){

//     i++;
//     console.log(i);
// };

window.addEventListener("load", init);

const bar = document.querySelectorAll(".bar");
const model = [0]
let number;

function init() {
    console.log("loaded");

    loop();
}

function addAni() {
    document.getElementById("bars").classList.add("moveLeft");
}






function loop() {
    updateArray();
    displayArray();
    addAni();
    setTimeout(loop, 497);
}

function updateArray() {
    if (model.length < 40) {
        lastItem = Math.floor(Math.random() * 32);
        model.unshift(lastItem);  
    } else {
        model.pop();
        lastItem = Math.floor(Math.random() * 32);
        model.unshift(lastItem); 
    }
}

function displayArray() {
    for (let i = 0; i < 40; i++) {
        bar[i].style.height = `${model[i]*3}px`;
        bar[i].style.backgroundColor = `rgb(${i * 6},120 , 120)`;
      }
}





// function modifyBars() {
//     bar.forEach(bar => {
//         bar.style.height = Math.floor(Math.random() * 100) +"px";
//     });    
// }