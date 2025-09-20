let ok=true
   document.addEventListener("click",() =>{
    const audio = document.getElementById("piesa");
    if(ok){
    audio.play();
    }
    else{
    audio.pause();
    }
    ok= !ok;
})
const informatii = [
  "Mercur este cea mai mică planetă din sistemul nostru solar și cea mai apropiată de Soare. Este doar puțin mai mare decât Luna Pământului. De pe suprafața lui Mercur, Soarele ar apărea de peste trei ori mai mare decât de pe Pământ, iar lumina solară ar fi de până la șapte ori mai strălucitoare.",
  
  "Venus este a doua planetă de la Soare și cel mai apropiat vecin planetar al nostru. Este cea mai fierbinte planetă din sistemul solar și este uneori numită geamănul Pământului. Venus este al treilea cel mai strălucitor obiect de pe cer, după Soare și Lună. Se rotește încet, în direcția opusă celei în care se rotesc majoritatea planetelor.",
  
  "Deși Pământul este doar a cincea planetă ca mărime din sistemul solar, este singura lume cu apă lichidă la suprafață. Ușor mai mare decât vecina Venus, Pământul este cea mai mare dintre cele patru planete apropiate de Soare, toate alcătuite din rocă și metal. Este singura planetă al cărei nume în engleză nu provine din mitologia greacă sau romană, ci din engleza veche și din germanică, unde înseamnă pur și simplu pământ. Există, bineînțeles, multe denumiri pentru planeta noastră în miile de limbi vorbite de oamenii celei de-a treia planete de la Soare.",
  
  "Marte – a patra planetă de la Soare – este o lume rece, aridă și prăfuită, cu o atmosferă foarte subțire. Este o planetă dinamică, cu anotimpuri, calote polare, vulcani stinși, canioane și fenomene meteorologice. Marte este unul dintre cele mai explorate corpuri cerești din sistemul solar și singura planetă unde am trimis rovere să exploreze peisajul extraterestru. Misiunile NASA au găsit multe dovezi că, acum miliarde de ani, Marte era mult mai cald și umed, având o atmosferă mai groasă.",
  
  "Jupiter este o lume a extremelor. Este cea mai mare planetă din sistemul solar – dacă ar fi o sferă goală, în interiorul ei ar încăpea 1.000 de Pământuri. Este și cea mai veche planetă, formată din praful și gazele rămase după nașterea Soarelui, acum 4,6 miliarde de ani. Totuși, are și cea mai scurtă zi din sistemul solar, rotindu-se complet în jurul axei sale în aproximativ 9,9 ore.",
  
  "Saturn este a șasea planetă de la Soare și a doua ca mărime din sistemul solar. La fel ca Jupiter, este un gigant gazos alcătuit în mare parte din hidrogen și heliu. Saturn nu este singura planetă cu inele, dar niciuna nu are un sistem de inele atât de spectaculos și complex. De asemenea, are zeci de luni.",
  
  "Uranus este a șaptea planetă de la Soare și are al treilea cel mai mare diametru dintre planetele din sistemul solar. Uranus pare să se rotească pe o parte. Este o lume foarte rece și vântoasă. Gigantul de gheață este înconjurat de 13 inele slabe și 28 de luni mici. Uranus are o înclinare unică, aproape de 90 de grade, ceea ce îl face să pară că se rostogolește pe orbită în jurul Soarelui.",
  
  "Neptun este a opta și cea mai îndepărtată planetă din sistemul nostru solar. Întunecat, rece și biciuit de vânturi supersonice, gigantul de gheață Neptun se află la peste 30 de ori distanța Pământului față de Soare. Este singura planetă care nu poate fi văzută cu ochiul liber. În 2010, Neptun a finalizat prima sa orbită de 165 de ani de la descoperirea sa în 1846.",
  
  "De ce Pluto nu mai este planetă? Pluto a fost reîncadrat în categoria planetelor pitice în 2006 de către Uniunea Astronomică Internațională, deoarece alte obiecte pot intersecta orbita sa.",
];

const planete = ["Mercur","Venus","Pământ","Marte","Jupiter","Saturn","Uranus","Neptun","Pluto"];
function dispare(culoare,index){
    document.getElementById("Plan").style.display = "none";
    document.getElementById("Soare").style.display = "none";
    document.getElementById("Nu").style.display = "block";
    document.getElementById("Mercur1").style.backgroundImage = culoare;
    document.getElementById("p").innerHTML = informatii[index];
    document.getElementById("h1").innerHTML = planete[index];
    document.getElementById("buton").style.backgroundImage= culoare;
    document.getElementById("picior").style.marginTop = "-85vh";
}

function Apare(){
    document.getElementById("Plan").style.display = "flex";
    document.getElementById("Soare").style.display = "block";
    document.getElementById("Nu").style.display = "none";
    document.getElementById("picior").style.marginTop = "0%";
}