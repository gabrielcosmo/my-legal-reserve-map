
let widthInput = document.getElementById("width")
let heightInput = document.getElementById("height")


function setOwnership(){
    var widthNum = Number(widthInput.value)
    var heightNum = Number(heightInput.value)
    var ownerShip = squareStream(widthNum, heightNum)

    for (let index = 0; index < ownerShip.length; index++) {
       ownerShip[index].style.backgroundColor='var(--ownershipHighlightColor)'
    }
    setStats(widthNum*heightNum)
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

function setStats(areaTot){
    var ownershipRow = document.getElementById("ownershipStats")
    var reserveRow = document.getElementById("reserveStats")

    var areaTotReal = areaTot * 10**2 //conversão da escala de cm² para a de m²
    var areaReserveReal = areaTotReal * 0.2
    
    ownershipRow.children[1].innerText = `${areaTotReal} m²`
    ownershipRow.children[2].innerText = `${generalConcersor.m2ToKM2(areaTotReal).toFixed(3)} km²`
    ownershipRow.children[3].innerText = `${generalConcersor.m2ToHa(areaTotReal).toFixed(3)} ha`
    
    reserveRow.children[1].innerText = `${areaReserveReal} m²`
    reserveRow.children[2].innerText = `${generalConcersor.m2ToKM2(areaReserveReal).toFixed(3)} km²`
    reserveRow.children[3].innerText = `${generalConcersor.m2ToHa(areaReserveReal).toFixed(3)} ha`
   } 
   