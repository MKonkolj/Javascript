// Zadatak 22 //////////////////////////////////////////////////////////
// 22. Napraviti novi dokument „objekti.js“.
// a) Deklarisati objekat sa identifikatorom „skPribor“. Objekat sadrži tri svojstva: olovka, hemijska i lenjir. Vrednosti za ova svojstva redom su: stabilo, staedtler i staedtler.
// b) Promeniti vrednost svojstva „lenjir“ u „precision“, a svojstva „olovka“ u „faber castell“
// c) Dodati novo svojstvo objektu „skPribor“ koje ima naziv "sveske". Vrednost ovog svojstva je niz od sledećih vrednosti: u linije, u kvadrate i prazna.
// d) Upotrebom metoda za nizove premestiti vrednost „prazna“ na početak niza.
// e) Dodati metod „izlistaj“ objektu koji izlastava u konzoli vrednost svojstva „sveske“

function skolskiPribor () {
    // a)
    const skPribor = {
        olovka: "stabilo",
        hemijska: "staedler",
        lenjir: "staedler"
    };
    
    // b)
    skPribor.lenjir = "precision";
    skPribor.olovka = "faber castell";
    
    // c)
    skPribor.sveska = ["u linije", "u kvadrate", "prazna"];
    
    // d)
    skPribor.sveska.unshift(skPribor.sveska.pop());
    
    // e)
    skPribor.izlistaj = () => skPribor.sveska.forEach(element => console.log(element));


    skPribor.izlistaj();
}
//skolskiPribor();



// Zadatak 22 //////////////////////////////////////////////////////////
// 23. Na sistematskom pregledu đaka utvrđene su sledeće visine. Smestiti ove podatke u HTML tabelu. Prva kolona: imena, druga kolona izmerene vrednosti.
// Napisati skriptu koja će preuzeti podatke iz ove tabele i izračunati koja osoba je najviša.
// Rezultat proračuna objavljuje se u p elementu ispod tabele u vidu poruke:
// Najviši je XXXX sa visinom XXXcm
// Takođe, pozadinska boja u redu u kojem je najviša osoba se boji u
// žutu boju.
// Program se izvršava pritiskom na dugme „Izračunaj ko je naviši“.
// Milica 153cm
// Zorica 12cm
// Mirko 145cm
// Dejan 167cm
// Aleksandar 164cm
// Ivana 133cm
// Miloš 174cm
// Gordana 143cm
// Nemanja 187cm
// Pavle 152cm
// Jelena 173cm
// Danica 146cm
// Vladimir 162cm
// Vesna 173cm
// Tanja 149cm
// Anica 169cm
// Bojan 171cm
// Goran 155cm
// Milan 172cm
// Ivan 166cm
function visinaDjaka () {

    // ispis tabele u HTML-u
    const djaci = [
        {ime: "Milica", visina: "153cm"},
        {ime: "Zorica", visina: "129cm"},
        {ime: "Mirko", visina: "145cm"},
        {ime: "Dejan", visina: "167cm"},
        {ime: "Aleksandar", visina: "164cm"},
        {ime: "Ivana", visina: "133cm"},
        {ime: "Miloš", visina: "174cm"},
        {ime: "Gordana", visina: "143cm"},
        {ime: "Nemanja", visina: "187cm"},
        {ime: "Pavle", visina: "152cm"},
        {ime: "Jelena", visina: "173cm"},
        {ime: "Danica", visina: "146cm"},
        {ime: "Vladimir", visina: "162cm"},
        {ime: "Vesna", visina: "173cm"},
        {ime: "Tanja", visina: "149cm"},
        {ime: "Anica", visina: "169cm"},
        {ime: "Bojan", visina: "171cm"},
        {ime: "Goran", visina: "155cm"},
        {ime: "Milan", visina: "172cm"},
        {ime: "Ivan", visina: "172cm"}
    ];
    
    document.getElementsByTagName("body")[0].innerHTML = 
    `<table>
    <thead>
        <tr>
            <th>Ime</th>
            <th>Visina</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    </table>
    <button>Ko je najviši?</button>
    <p id="rezultat"></p>`
    
    djaci.forEach(djak => {
        document.getElementsByTagName("tbody")[0].innerHTML += `<tr><td>${djak.ime}</td><td>${djak.visina}</td></tr>`
    });
    
    //određivanje najvišeg
    const colVisine = document.querySelectorAll("td:nth-child(even)");
    const colImena = document.querySelectorAll("td:nth-child(odd)");
    
    let visine = [];
    let najvisina = [];
    
    colVisine.forEach(cell => {
        visine.push(parseInt(cell.innerText));
        najvisina.push(parseInt(cell.innerText));
    });
    
    najvisina = najvisina.sort()[najvisina.length - 1];
    
    //stilizacija tabele na klik
    const btn = document.getElementsByTagName("button")[0];

    btn.onclick = () => {
        let najvisiVisina = colVisine[visine.indexOf(najvisina)];
        let najvisiIme = colImena[visine.indexOf(najvisina)];
        najvisiVisina.style.background = "linear-gradient(0deg, rgba(255,243,62,1) 0%, rgba(245,178,20,1) 100%)";
        najvisiIme.style.background = "linear-gradient(0deg, rgba(255,243,62,1) 0%, rgba(245,178,20,1) 100%)";
        
        document.getElementById("rezultat").innerHTML = `Najviši je ${najvisiIme.innerHTML} sa visinom ${najvisiVisina.innerHTML}.`
    }
}
visinaDjaka ();




//kada mi indexOf vrati index najviše visine, isit index mogu da iskoristim za ime
//ako ima više njih sa istom visinom onda treba da indexOf provučem kroz for loop da proveri sve?