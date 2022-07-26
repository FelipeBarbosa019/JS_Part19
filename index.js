import createCards from './createCards.js'
import raffle from './raffle.js'

const init = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container = document.querySelector("#container");
const mark1 = document.querySelector("#mark1");

let arrayCard1 = [];
let arrayCard2 = [];
let globe = [];
let vencedor = 0
let out = [];

let check1 = 0
let check2 = 0
let check3 = 0
let check4 = 0
let check5 = 0
let check6 = 0
let check7 = 0
let check8 = 0
let check9 = 0
let check10 = 0

let check21 = 0
let check22 = 0
let check23 = 0
let check24 = 0
let check25 = 0
let check26 = 0
let check27 = 0
let check28 = 0
let check29 = 0
let check210 = 0

for(let i=1; i<=75; i++){
    globe.push(i)
}

init.addEventListener("click", function(){
    // Card 1:
    const closureCards = createCards(arrayCard1);
 
    closureCards.create();
    closureCards.sort();
    arrayCard1 = closureCards.value();

    console.log(arrayCard1)

    // Card 2:
    const closureCards2 = createCards(arrayCard2);

    closureCards2.create();
    closureCards2.sort();
    arrayCard2 = closureCards2.value();

    console.log(arrayCard2)

    container1.style.display = "flex"
    
    print();
})

btn2.addEventListener("click", function(){
    start();
})

function start(){
    const closureGlobe = raffle(globe);
    closureGlobe.draw();
    closureGlobe.print();


    let aux = closureGlobe.value();
    out.push(aux)

    if(check1 == 1 && check2 == 1 && check3 == 1 && check4 == 1 && check5 == 1 && check6 == 1 && check7 == 1 && check8 == 1 && check9 == 1 && check10 == 1){
        alert("O jogador que possui a cartela 1 venceu!");
        vencedor = 1;
    } 
    let teste
    if(vencedor == 0){
        teste = setTimeout(start, 5000);
    }
    
    if(check21 == 1 && check22 == 1 && check23 == 1 && check24 == 1 && check25 == 1 && check26 == 1 && check27 == 1 && check28 == 1 && check29 == 1 && check210 == 1){
        alert("O jogador que possui a cartela 2 venceu!");
        vencedor = 1;
    } 
}

//Cartela 1:
mark1.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[0]) != -1){
        check1 = 1
        mark1.style.backgroundColor = "red"
    }
})

mark2.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[1]) != -1){
        check2 = 1
        mark2.style.backgroundColor = "red"
    }
})

mark3.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[2]) != -1){
        check3 = 1
        mark3.style.backgroundColor = "red"
    }
})

mark4.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[3]) != -1){
        check4 = 1
        mark4.style.backgroundColor = "red"
    }
})

mark5.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[4]) != -1){
        check5 = 1
        mark5.style.backgroundColor = "red"
    }
})

mark6.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[5]) != -1){
        check6 = 1
        mark6.style.backgroundColor = "red"
    }
})

mark7.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[6]) != -1){
        check7 = 1
        mark7.style.backgroundColor = "red"
    }
})

mark8.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[4]) != -1){
        check8 = 1
        mark8.style.backgroundColor = "red"
    }
})

mark9.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[4]) != -1){
        check9 = 1
        mark9.style.backgroundColor = "red"
    }
})

mark10.addEventListener("click", function(){
    if(out.indexOf(arrayCard1[4]) != -1){
        check10 = 1
        mark10.style.backgroundColor = "red"
    }
})


//Cartela 2:
mark21.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[0]) != -1){
        check21 = 1
        mark21.style.backgroundColor = "red"
    }
})

mark22.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[1]) != -1){
        check22 = 1
        mark22.style.backgroundColor = "red"
    }
})

mark23.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[2]) != -1){
        check23 = 1
        mark23.style.backgroundColor = "red"
    }
})

mark24.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[3]) != -1){
        check24 = 1
        mark24.style.backgroundColor = "red"
    }
})

mark25.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[4]) != -1){
        check25 = 1
        mark25.style.backgroundColor = "red"
    }
})

mark26.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[5]) != -1){
        check26 = 1
        mark26.style.backgroundColor = "red"
    }
})

mark27.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[6]) != -1){
        check27 = 1
        mark27.style.backgroundColor = "red"
    }
})

mark28.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[4]) != -1){
        check28 = 1
        mark28.style.backgroundColor = "red"
    }
})

mark29.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[4]) != -1){
        check29 = 1
        mark29.style.backgroundColor = "red"
    }
})

mark210.addEventListener("click", function(){
    if(out.indexOf(arrayCard2[4]) != -1){
        check210 = 1
        mark210.style.backgroundColor = "red"
    }
})

function print() {
    mark1.innerHTML = `${arrayCard1[0]}`
    mark2.innerHTML = `${arrayCard1[1]}`
    mark3.innerHTML = `${arrayCard1[2]}`
    mark4.innerHTML = `${arrayCard1[3]}`
    mark5.innerHTML = `${arrayCard1[4]}`
    mark6.innerHTML = `${arrayCard1[5]}`
    mark7.innerHTML = `${arrayCard1[6]}`
    mark8.innerHTML = `${arrayCard1[7]}`
    mark9.innerHTML = `${arrayCard1[8]}`
    mark10.innerHTML = `${arrayCard1[9]}`

    mark21.innerHTML = `${arrayCard2[0]}`
    mark22.innerHTML = `${arrayCard2[1]}`
    mark23.innerHTML = `${arrayCard2[2]}`
    mark24.innerHTML = `${arrayCard2[3]}`
    mark25.innerHTML = `${arrayCard2[4]}`
    mark26.innerHTML = `${arrayCard2[5]}`
    mark27.innerHTML = `${arrayCard2[6]}`
    mark28.innerHTML = `${arrayCard2[7]}`
    mark29.innerHTML = `${arrayCard2[8]}`
    mark210.innerHTML = `${arrayCard2[9]}`
}

