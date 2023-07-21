
let widthInput = document.getElementById("width")
let heightInput = document.getElementById("height")


function setOwnership(){
    var widthNum = Number(widthInput.value)
    var heightNum = Number(heightInput.value)
    var ownerShip = squareStream(widthNum, heightNum)

    for (let index = 0; index < ownerShip.length; index++) {
       ownerShip[index].style.backgroundColor='var(--ownershipHighlightColor)'
    }
}


function resetOwnership(){
    var widthNum = Number(widthInput.value)
    var heightNum = Number(heightInput.value)

    var ownerShip = squareStream(widthNum, heightNum)

    for (let index = 0; index < ownerShip.length; index++) {
        ownerShip[index].style.backgroundColor='green'
     }

     widthInput.value = ""
     heightInput.value = ""
}


function setLegalReserve(){
    var widthNum = Number(widthInput.value)
    var heightNum = Number(heightInput.value)
   
    var reserveArea = Math.round(widthNum * heightNum * 0.2)
    var sides = reserveDimensions(reserveArea)

    var ownerShip = squareStream(sides[0], sides[1])
    
    for (let index = 0; index < ownerShip.length; index++) {
        ownerShip[index].style.backgroundColor='var(--legalReserveColor)'
     }

     console.log(reserveDimensions(reserveArea))
}


function squareStream(w, h){
    var area = []
    for(var i=0; i<=h-1; i++){
        
        let readLine = map.children[i]

        for(var s=0; s<=w-1; s++){
           area.push(readLine.children[s])
        }
    }
    return area
}
