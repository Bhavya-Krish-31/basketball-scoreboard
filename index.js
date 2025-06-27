console.log("✅ index.js is connected and running");

let hscore = document.getElementById("home-score")
let hs = 0

let gscore = document.getElementById("guest-score")
let gs=0

function increaseHomeScoreOne(){
    hs+=1
    hscore.textContent = hs
}
function increaseHomeScoreTwo(){
    hs+=2
    hscore.textContent = hs
}
function increaseHomeScoreThree(){
    hs+=3
    hscore.textContent = hs
}


function increaseGuestScoreOne(){
    gs+=1
    gscore.textContent = gs    
}
function increaseGuestScoreTwo(){
    gs+=2
    gscore.textContent = gs    
}
function increaseGuestScoreThree(){
    gs+=3
    gscore.textContent = gs    
}
