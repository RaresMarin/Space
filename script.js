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
alert("Press to see the planet's name!")
const informatii = ["Mercury is the smallest planet in our solar system and nearest to the Sun. It's only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.",
    "Venus is the second planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.",
    "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means the ground.There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.",
    "Mars – the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    "Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking about 9.9 hours to spin around once on its axis.",
    "Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system.Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.",
    "Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways.Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.",
    "Neptune is the eighth and most distant planet in our solar system.Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846."
];
const planete = ["Mercury","Venus" , "Earth" , "Mars" , "Jupiter" , "Saturn" , "Uranus" , "Neptun"];
function dispare(culoare,index){
    document.getElementById("Plan").style.display = "none";
    document.getElementById("Soare").style.display = "none";
    document.getElementById("Nu").style.display = "block";
    document.getElementById("Mercur1").style.backgroundImage = culoare;
    document.getElementById("p").innerHTML = informatii[index];
    document.getElementById("h1").innerHTML = planete[index];
    document.getElementById("buton").style.backgroundImage= culoare;
}

function Apare(){
    document.getElementById("Plan").style.display = "flex";
    document.getElementById("Soare").style.display = "block";
    document.getElementById("Nu").style.display = "none";
}
   