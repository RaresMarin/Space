
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
    document.getElementById("Nu").style.display = "block";
    document.getElementById("Mercur1").style.backgroundImage = culoare;
    document.getElementById("p").innerHTML = informatii[index];
    document.getElementById("h1").innerHTML = planete[index];
    document.getElementById("buton").style.backgroundImage= culoare;
    document.getElementById("picior").style.display = "none";
}

function Apare(){
    document.getElementById("Nu").style.display = "none";
    document.getElementById("picior").style.display = "flex";
}
function bashes(){
	let audio = document.getElementById("larisa");
	audio.src = "nbarbu2.mp3";
	audio.play();
	let bashes = document.getElementById("bashes").value;
	let soso = document.getElementById("soso");
	let zodina = ["Ai energie azi să începi ceva ce ai tot amânat. Fii atent la detalii, în special la comunicarea cu colegii — un mic neînțeles poate escalada. O idee bună: dacă ai un proiect creativ, profită de impuls și înaintează îndrăzneț.",
	"Starea ta emoțională poate fi mai sensibilă azi — nu lăsa micile frustrări să îți umbrească ziua. Încearcă să prioritizezi liniștea: o plimbare, muzică, ceva relaxant. Pe plan financiar, fii prudent; nu investi în grabă.",
	"Comunicarea este punctul forte al zilei. Dacă ai treburi de discutat, negocieri sau prezentări, ai toate șansele să impresionezi. Atenție la oboseală însă — nu exagera cu activitatea. Un moment de respiro te-ar ajuta să te refaci"
	,"Unele relații personale pot ieși în evidență azi: fie prin apropiere, fie prin tensiune dacă nu se spune ce trebuie. Deschiderea și empatia contează mult. Încearcă să nu cari cu tine frustrări din trecut — azi ar putea ieși la suprafață."
	,"Te simți inspirat și creativ. Poate vrei să împărtășești ceva artistic sau să te implici într-un eveniment social. Avastă-te să nu răspunzi impulsiv la critici — energia e mare, dar și supărăcioasă. Profită de sprijinul prietenilor."
	,"Ziua îți cere ordine: fie că e vorba de muncă, fie de treburi casnice. Organizează, planifică, verifică ce ai lăsat pe „mai târziu”. În privința sănătății, un somn bun și hidratarea îți vor face minuni. Evită să fii prea autocritic."
	,"E ziua ta de echilibru și relații. Ai ocazia să rezolvi mici neînțelegeri și să creezi armonie în jur. Fii deschis la compromis, dar nu renunța la ce contează pentru tine. Dacă ai de luat o decizie importantă, consultă-te cu cineva de încredere."
	,"Intensitatea e tema zilei. Poate simți nevoia de introspecție — mergi cu asta, îți poate aduce claritate. În relații, evită gelozia sau interpretările exagerate; cere clarificări dacă te simți neînțeles. Energia ta pasională te poate motiva să faci ceva semnificativ."
	,"Spiritul aventuros e activ azi. Poate vrei să încerci ceva nou — un hobby, o călătorie scurtă, o activitate care să-ți extindă orizonturile. În același timp, fii realist în privința resurselor și nu te aventura în cheltuieli nesăbuite."
	,"Profesional, ziua îți aduce oportunitatea de a-ți demonstra responsabilitatea. Stelele sugerează că perseverența ta va fi observată. Pe plan personal, s-ar putea să simți nevoia de mai mult timp pentru tine — rezervă-l, chiar dacă pare că ești ocupat."
	,"Creativitatea și originalitatea îți aduc aprecieri azi. Dacă ai idei îndrăznețe, exprimă-le. În relații, fii atent la libertatea personală — atât a ta, cât și a celor din jur. Nu forța legătura dacă simți că nu se aliniază armonios."
	,"Intuiția ta e mai viguroasă azi. Ascultă-ți visele, semnalele subtile. E o zi bună pentru spiritualitate, artă sau orice activitate care te conectează cu partea interioară. Fii precaut cu idealurile — realitatea contează."];
	if(bashes=="Berbec")
	soso.textContent == zodina[0];
		if(bashes== "Taur")
	soso.textContent = zodina[1];
		if(bashes== "Gemeni")
	soso.textContent = zodina[2];
		if(bashes == "Rac")
	soso.textContent = zodina[3];
		if(bashes=="Leu")
	soso.textContent = zodina[4];
		if(bashes=="Fecioara")
	soso.textContent = zodina[5];
		if(bashes=="Balanta")
	soso.textContent = zodina[6];
		if(bashes=="Scorpion")
	soso.textContent = zodina[7];
		if(bashes=="Sagetator")
	soso.textContent = zodina[8];
		if(bashes=="Capricorn")
	soso.textContent = zodina[9];
		if(bashes=="Varsator")
	soso.textContent = zodina[10];
		if(bashes=="Pesti")
	soso.textContent = zodina[11];
}


document.getElementById("nume").textContent = localStorage.getItem("nume");
        document.getElementById("pnume").textContent = localStorage.getItem("pnume");
        document.getElementById("cnume").textContent = localStorage.getItem("cnume");
        document.getElementById("numec").textContent = localStorage.getItem("numec");
        document.getElementById("npume").textContent = localStorage.getItem("npume");
        document.getElementById("dataNasterii").textContent = localStorage.getItem("dataNasterii");