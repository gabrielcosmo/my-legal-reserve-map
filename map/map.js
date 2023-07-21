let map = document.getElementById("map")
let squarePrime = document.getElementById("0")
let line = document.getElementsByClassName("line")

/*
window.addEventListener("load", (e) =>{
   for(let i = 0; i <= 198; i++){

        let s = (squarePrime.cloneNode())
        s.id = `${i+1}`

        s.addEventListener("mouseenter", () => s.style.backgroundColor="#04b004")
        s.addEventListener("mouseleave", () => s.style.backgroundColor="green")
        
        map.appendChild(s)
   }
}
)
*/
window.addEventListener("load", (e) =>{
   //fill onde line with squares
   for(let i = 0; i <= 18; i++){

        let s = (squarePrime.cloneNode())
        s.id = `${i+1}`
        
        line[0].appendChild(s)
   }

   //fill the map with lines
   for (let j = 0; j <= 8; j++) {
      let l = line[0].cloneNode(deep=true)
      l.id = `l${j}`
      map.appendChild(l)
   }
}
)
