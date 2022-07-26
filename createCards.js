export default function createCards(arrayCard){
    
    let insert;
    let i = 0;  
    function create() {
        while(arrayCard.length<10){
            insert = Math.floor(Math.random() * 75) + 1;
            if(arrayCard.indexOf(insert) == -1){
                arrayCard.push(insert)
                i++
            }
        }
    }

    function sort(){
        arrayCard.sort(function(a, b) {
            return a - b;
          });
    }

    function value(){
        return arrayCard
    }

    return {create, sort, value}
}