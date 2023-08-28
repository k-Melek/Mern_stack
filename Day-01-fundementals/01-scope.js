var superHeros = ["Superman", "Spiderman", "Batman", "WonderWoman"]
// superheroes Global variable


function printRandomRange(list) {
    function generateRandomRange(){
        var index = Math.floor(Math.random()*list.length)
        for(var i = 0; i <= index; i++){
            var item = list[i]
            console.log(item);
        }
    }
    generateRandomRange()
}


printRandomRange(superHeros	,"************")
