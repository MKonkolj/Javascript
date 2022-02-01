// Zadatak 24 //////////////////////////////////////////////////////////
// 24. Napraviti funkciju koja računa nasumični datum u zadatom periodu.
// Dužina perioda se prosleđuje kao parametar funkcije u vidu broja dana, a početak perioda je trenutak izvršavanja funkcije.
// Izbor nasumičnog datuma prikazati u konzoli.
// Zadatak snimiti u dokumentu „datum.js“.

// function randomDayPicker (period) {
//     return randomDay
// }
function randomDayPicker (period) {
    let date = new Date().getTime();
    period = period * 1000 * 60 * 60 * 24
    let randomDate = new Date(Math.floor(Math.random() * ((period + date) - date) + date));

    return randomDate.toLocaleDateString("sr");
}
// console.log(randomDayPicker(15));





// Zadatak 25 //////////////////////////////////////////////////////////
// 25. Napisati skriptu koja uzima unos iz prompt() dijaloga i vraća isti taj unos stim što između svakog karaktera dodaje razmak.
// Primer: ulazni podatak - „ULAZ“, izlazni podatak - „U L A Z“.
// Obrađeni izlaz vratiti alert() metodom.
// Ceo kod ove skripte napisati tako da se izvrši čim se HTML dokument učita.

function dodavanjeRazmaka() {
    const input = prompt("Unesi reč:").split("");
    let result = [];
    
    do {
        result += `${input[Math.round(result.length/2)]} `
    } while (Math.round(result.length/2) < input.length-1)
    result += `${input[input.length-1]}`
    
    console.log(result);
}

// window.onload = dodavanjeRazmaka();



// Zadatak 26 //////////////////////////////////////////////////////////
// 26. Napraviti jedan div. Prikazati 3 proizvoljne slike u HTML-u ispod diva.
// Klikom na bilo koju sliku, slika se prikazuje u divu.

function picsSelector (){
    document.querySelector("body").innerHTML = 
    `<div class="container">
        <div id="mainPic" style="background-image: url('https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-17.jpg')"></div>
        <div class="select">
            <img id="pic1">
            <img id="pic2">
            <img id="pic3">
        </div>
    </div>`

    const pic1 = document.querySelector("#pic1");
    const pic2 = document.querySelector("#pic2");
    const pic3 = document.querySelector("#pic3");
    
    pic1.src = "https://picsum.photos/600?random=1";
    pic2.src = "https://picsum.photos/600?random=2";
    pic3.src = "https://picsum.photos/600?random=3";
    
    function setMainPic() {
        document.querySelector("#mainPic").style.backgroundImage = `url("${this.src}")`;
    }
    
    pic1.addEventListener("click", setMainPic)
    pic2.addEventListener("click", setMainPic)
    pic3.addEventListener("click", setMainPic)
}
// picsSelector();


// Zadatak 27 //////////////////////////////////////////////////////////
// 27. Napraviti tabelu sa proizvoljnim podacima. (3x3) Ispod tabele p element čiji je sadržaj “Rezultat”.
// Potrebno je napisati skriptu koji će prebacivati sadržaj iz ćelije tabele u dati paragraf kada se levim tasterom miša klikne na datu ćeliju. Kada se klikne ostalim tasterima miša ništa se ne događa.
// Ćelija menja boju pozadine da bi se označilo nad kojom ćelijom se dogodio klik.
// Pozadina kliknute ćelije se posle 2 sekunde vraca na podrazumevanu. (belu)

function table3x3(){
    document.querySelector("body").innerHTML = `
    <table class="zadatak27">
    <thead>
        <tr>
            <th>TOP</th>
            <th>MID</th>
            <th>BOT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>River top</td>
            <td>Dire top jungle</td>
            <td>Dire base</td>
        </tr>
        <tr>
            <td>Radiant top jungle</td>
            <td>River middle</td>
            <td>Dire bottom jungle</td>
        </tr>
        <tr>
            <td>Radiant base</td>
            <td>Radiant bottom jungle</td>
            <td>River bottom</td>
        </tr>
    </tbody>
    </table>
    
    <p id="tableResult">Rezultat</p>
    `
    
    const tableResult = document.querySelector("#tableResult");
    const cells = document.querySelectorAll("td");
    
    cells.forEach(cell => {
        cell.onclick = () => {
            tableResult.innerText = cell.innerText;
            cell.style.backgroundColor = "orange";
            cell.style.transition = "100ms ease-in";
            setTimeout (() => {cell.style.backgroundColor = "inherit"}, 2000)
        }
    });
}
// table3x3();



// Zadatak 28 //////////////////////////////////////////////////////////
// 28. Body element je prazan, sve raditi kroz JS. Treba napisati kod koji će popuniti <body> element na sledeći način:
// - dodati dugmad „Stop“ i „Nastavi“
// - paragrafi pocinju da se dodaju - 15 paragrafa sa tekstom „#. Lorem ipsum dolor“. Gde
// se znak „#“ zamenjuje sa rednim brojem paragrafa (npr.: „6. Lorem ipsum dolor“). Paragrafi se dodaju jedan po jedan svake 1.5 sekunde dok ih ukupno ne bude petnaest. Nakon toga prestaje njihovo generisanje - dugmad služe da se klikom na njih zaustavi („Stop“) i nastavi („Nastavi“) generisanje paragrafa


function writeStopStart() {
    // HTML
    document.body.innerHTML = `<button id="stopBtn">STOP</button><button id="continueBtn">NASTAVI</button>`;
    
    const continueBtn = document.querySelector("#continueBtn");
    const stopBtn = document.querySelector("#stopBtn");
    
    // buttons
    window.onload = newLines;
    continueBtn.onclick = newLines;
    stopBtn.onclick = function () {
        clearInterval(interval);
    };
    
    // function
    let counter = 0;
    var interval;
    
    function newLines() {
        interval = setInterval (() => {
            counter++;
            let paragraph = document.createElement("p");
            let text = document.createTextNode(`${counter}. Lorem ipsum dolor`);
            paragraph.appendChild(text);
            document.body.appendChild(paragraph);
            if (counter == 15) {
                clearInterval(interval);
            }
        }, 1500)
    }
}
// writeStopStart();


/*
let counter = 0;
var interval;
function printLines () {
    interval = setInterval (() => {
        counter++;
        body.innerHTML += `<p>${counter}. Lorem ipsum dolor</p>`   //ne radi sa innerHTML jer zablokira event loop iz nekog razloga
        if (counter == 15) {
            clearInterval(interval);
        }
    }, 500)
}
startBtn.onclick = printLines;
stopBtn.onclick = function(e) {
    console.log(e);
}
*/

// Zadatak 29 //////////////////////////////////////////////////////////
// 29. Uz pomoć JS-a kreirati HTML tabelu u i popuniti je podacima koji se nalaze u nizu “podaci”.
// Svaki element niza “podaci” je novi niz koji sadrži dve vrednost ime i visinu učenika.
// Prvi red tabele sadrži naslove za kolone: „Imena“ i „Visine“.
// Dodatno, tabelu treba stilizovati uz pomoć JS-a. Stilizacija se ogleda u dodavanju svim ćelijama tabele i samom table elementu ivicu: 1px solid #000

function tabelaIzNiza(){
    // Array
    const podaci = [
        ["Milica", "153cm"],
        ["Zorica", "187cm"],
        ["Mirko", "145cm"],
        ["Dejan", "167cm"],
        ["Aleksandar", "164cm"],
        ["Ivana", "133cm"],
        ["Miloš", "174cm"],
        ["Gordana", "143cm"],
        ["Nemanja", "187cm"],
        ["Pavle", "152cm"],
        ["Jelena", "173cm"],
        ["Danica", "146cm"],
        ["Vladimir", "162cm"],
        ["Vesna", "173cm"],
        ["Tanja", "149cm"],
        ["Anica", "169cm"],
        ["Bojan", "187cm"],
        ["Goran", "187cm"],
        ["Milan", "172cm"],
        ["Ivan", "172cm"], 
    ];
    
    
    // HTML
    let tdStyle = ` style="border: 1px solid orange;"`
    document.body.innerHTML = 
    `<table ${tdStyle}>
    <thead>
        <tr>
            <th>Imena</th>
            <th>Visine</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    </table>`
    
    
    // Popunjavanje tabele
    // po defaultu mi tabela bude crna pa sam je kroz JS ofarbao u orange
    const tbody = document.querySelector("tbody");
    
    for (let i = 0; i < podaci.length; i++) {
        tbody.innerHTML += `<tr><td${tdStyle}>${podaci[i][0]}</td><td${tdStyle}>${podaci[i][1]}</td></tr>`
    }
}
// tabelaIzNiza();


// Zadatak 30 //////////////////////////////////////////////////////////
// 30. Napraviti tabelu u HTML-u.
// ● Ime prve kolone je “Minimum”.
// ● Ime drudge kolone je “Maksimum”.
// ● Ime treće kolone je “Kolicina”.
// ● Popuniti je proizvoljnim podacima.
// ● Popuniti najmanje 4 reda.
// Napisati skriptu koja menja vrednosti u tabeli na osnovu ulaznih podataka od strane korisnika prikupljenih preko prompt() dijaloga.
// Korisnik treba da navede kojoj ćeliji želi da promeni vrednost navođenjem broja reda i ćelije u tom redu brojeći odozgo i sleva. Ove podatke navodi u vidu tri broja odvojenih zarezom. Npr. 3,4,500. Što se tumači kao: u 3. redu, 4. ćeliji se menja vrednost na vrednost 500.
// U prompt dijalogu se prosleđuje sledeća poruka: Unestite novu vrednost ćelije. Navesti red, kolonu, vrednost.
// Definisati funkciju zamena() kojoj se prosleđuju ulazni podaci i koja vrši zamenu podataka pod sledećim uslovima:
// ● ako se menja vrednost u koloni „minimum“ nova vrednost mora biti manja od postojeće
// ● ako se menja vrednost u koloni „maksimum“ nova vrednost mora biti veća od postojeće
// ● za menjanje vrednosti u koloni „količina“ ne postoji ograničenje
// ● ukoliko vrednosti ne ispunjavaju date uslove obavestiti korisnika alert() porukom: „Vrednost nije u opsegu“

function changeCell() {
    document.body.innerHTML = 
    `<table class="zadatak30">
            <thead>
                <tr>
                    <th>Minimum</th>
                    <th>Maksimum</th>
                    <th>Količina</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>6</td>
                    <td>12</td>
                    <td>1500</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>8</td>
                    <td>1150</td>
                </tr>
                <tr>
                    <td>2.5</td>
                    <td>7</td>
                    <td>1500</td>
                </tr>
                <tr>
                    <td>2.5</td>
                    <td>6.5</td>
                    <td>850</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>7</td>
                    <td>1000</td>
                </tr>
            </tbody>
        </table>
    `;
    
    var userChanges = prompt("Unestite novu vrednost ćelije. Navesti red, kolonu, vrednost.");
        
    while (isNaN(+userChanges.split(",")[0]) || isNaN(+userChanges.split(",")[1]) || isNaN(+userChanges.split(",")[2])) {
            alert ("Niste uneli dobre vrednosti!");
            userChanges = prompt("Unestite novu vrednost ćelije. Navesti red, kolonu, vrednost.");
    } 
    
    let userRow = +userChanges.split(",")[0];
    let userCol = +userChanges.split(",")[1];
    let userQuant = +userChanges.split(",")[2];
    
    zamena (userRow, userCol, userQuant);
    
    function zamena (userRow, userCol, userQuant) {
        
        const table = document.querySelectorAll(".zadatak30 tbody")[0];
        
        if (userRow <= table.rows.length && userRow > 0) {
            switch (userCol) {
                case 1:
                    if (userQuant < table.rows[userRow-1].cells[userCol-1].innerText) {
                        table.rows[userRow-1].cells[userCol-1].innerText = userQuant;
                    } else {
                        alert("Vrednost nije u opsegu")
                    }
                    break;
                case 2:
                    if (userQuant > table.rows[userRow-1].cells[userCol-1].innerText) {
                        table.rows[userRow-1].cells[userCol-1].innerText = userQuant;
                    } else {
                        alert("Vrednost nije u opsegu")
                    }
                    break;
                case 3:
                    table.rows[userRow-1].cells[userCol-1].innerText = userQuant;
                    break;
                default:
                    alert ("Kolona koju ste odabrali nije u opsegu");
                }
        } else {
            alert("Red koji je odabrali nije u opsegu")
        }
    }
}
// changeCell ();



// Zadatak 31 //////////////////////////////////////////////////////////
// 31. Dodati 2 inputa koja su tipa “number” i dugme “Izgenerisi tabelu”.
// ● Prvi input govori koliko će tabela imati redova.
// ● Drugi input govori koliko će tabela imati kolona.
// ● Klikom na dugme izgenerisati tabelu.
// ● Sadržaj polja tabele treba da ima brojeve. To jest redne brojeve ćelije.
// ○ Tabela 3x3
// 1 2 3
// 4 5 6
// 7 8 9




// Zadatak 32 //////////////////////////////////////////////////////////
// 32. Dodati input koji je tipa text. Skripta treba nakon svakog unosa karaktera da ga promeni u
// malo slovo. (ukoliko je unet karakter veliko slovo, naravno) Ukoliko je uneti karakter + promeniti
// ga na -.
// ● Prilikom unosa, ukoliko se drži taster + i unosi se više znakova +, kada se otpusti taster,
// svaki + treba biti zamenjen sa znakom -

