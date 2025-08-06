let mercur = document.getElementById("Mercur");
let venus = document.getElementById("Venus");
let pamant = document.getElementById("Terra");
let marte = document.getElementById("Marte");
let jupiter = document.getElementById("Jupiter");
let saturn = document.getElementById("Saturn");
let uranus = document.getElementById("Uranus");
let neptun = document.getElementById("Neptun");
let ok=true
   document.addEventListener("click",() =>{
    if(ok){
    mercur.textContent = "Mercury";
    venus.textContent = "Venus";
    pamant.textContent = "Earth";
    marte.textContent = "Mars";
    jupiter.textContent = "Jupiter";
    uranus.textContent = "Uranus";
    saturn.textContent = "Saturn";
    neptun.textContent = "Neptune";
    }
    else{
    mercur.textContent = "";
    venus.textContent = "";
    pamant.textContent = "";
    marte.textContent = "";
    jupiter.textContent = "";
    uranus.textContent = "";
    saturn.textContent = "";
    neptun.textContent = "";  
    }
    ok= !ok;
})