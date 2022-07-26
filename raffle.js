export default function raffle(globe){
    let drawNumber


    function draw(){
        let randomNumber = parseInt(getRandomArbitrary (0, globe.length))
        drawNumber = parseInt(globe.splice(randomNumber, 1))
        // out.push(drawNumber)
    }
    function print(){
        const container2 = document.querySelector("#container2");
        if(!isNaN(drawNumber)){
            container2.innerHTML += `${drawNumber} `
        }
    }
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    function value(){
        return drawNumber
    }
    return {draw, print, value}
}