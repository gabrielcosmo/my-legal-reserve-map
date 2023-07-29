let map = document.getElementById("map")
let squarePrime = document.getElementById("0")
let line = document.getElementsByClassName("line")

window.addEventListener("load", (e) =>{
   //fill onde line with squares
   for(let i = 0; i <= 28; i++){

        let s = (squarePrime.cloneNode())
        s.id = `${i+1}`
        
        line[0].appendChild(s)
   }

   //fill the map with lines
   for (let j = 0; j <= 13; j++) {
      let l = line[0].cloneNode(deep=true)
      l.id = `l${j}`
      map.appendChild(l)
   }
}
)
