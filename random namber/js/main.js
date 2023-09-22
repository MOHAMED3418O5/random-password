let btnEl = document.querySelector(".ginerat");
let serialEl = document.querySelector(".sireal");
btnEl.onclick = function () {
    let crcters ="1234567890asdfghjkl;'poiuueyqrzkjsjsfhfuoduofgfo132424586m"
    let crcterscount = 10
    let randomsirael = ""
    for (let i = 0; i < crcterscount; i++) {
        randomsirael += crcters[Math.floor(Math.random()*crcters.length)]
        
    }
    serialEl.innerHTML=randomsirael
}