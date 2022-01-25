// svaki zadatak je u funkciji, zakomentariosao sam samo pozivanje funkcije zadatka ////


// Zadatak 3 i 4 //////////////////////////////////////////////////////////
// Napraviti novi dokument "promenljive.js". U dokumentu:
// ● izvršiti deklarisanje sledećih promenljiva "prva", "druga", "treca" i "cetvrta"
// ● inicijalizirati promenljive vrednostima: 10, 20, 30 i 40. Poslednja vrednost, za promenljivu "cetvrta" je znakovni niz (string)
///////////////////////////////////////////////////////////////////////////
// 4. U okviru dokumenta "promenljive.js":
// ● dodati novu promenljivu "zbir", čija je vrednost zbir prethodnih promenljiva. Očekivana vrednost je broj 100. Ispisati vrednost ove promenljive u konzoli.
// ● dodati novu promenljivu "spoj", čija je vrednost zbir promenljivih "prva", "druga", "treca" i "cetvrta". Očekivana vrednost je 6040. Ispisati vrednost ove promenljive u konzoli
// ● dodati novu promenljivu "recenica". Napisati kod, koji će učiniti da vrednost ove promenljive bude: "Na pijaci jabuke koštaju 10 dinara, kruške 20 dinara, a breskve 40 dinara." Ova rečenica treba da bude sagrađena nadovezivanjem stringova. Korititi već dostupne vrednosti i dopisati nove stringove. Ispisati ovu vrednost u konzoli

function ceneJabuka() {
    let prva,
        druga,
        treca,
        cetvrta;
    
    prva = 10;
    druga = 20;
    treca = 30;
    cetvrta = "40";
    
    // Zadatak 4
    let zbir = prva + druga + treca + parseInt(cetvrta);
    console.log(zbir);
    
    let spoj = prva + druga + treca + cetvrta;
    console.log(spoj);
    
    let recenica = "Na pijaci jabuke koštaju " + prva + " dinara, kruške " + druga + " dinara, a breskve " + cetvrta + " dinara."
    console.log(recenica);
}
// ceneJabuka()



//Zadatak 5 //////////////////////////////////////////////////////////
// 5. Napisati skriptu koja će pronaći površinu trougla.
// ● definišite 3 promenljive sa proizvoljnim vrednostima, koje su zapravo 3 dužine stranica trougla
// ● površinu trougla ispisati u konzoli

function povrsinaTroungla() {
    let a = 2,
        b = 5,
        c = 6;
    
    console.log((a+b+c)/2);
}
// povrsinaTroungla()



//Zadatak 6
// 6. Napisati skriptu gde program uzima nasumični broj u opsegu između 1 i 10. (uključujući 1 i 10) Zatim se od korisnika traži da unese broj za pretpostavku. Ukoliko se korisnički unos poklapa sa nasumičnim brojem, ispisati poruku u vidu alert poruke: “Pogodili ste broj!”, ukoliko se ne poklapa ispisati “Niste pogodili broj!”.
    
function pogodiBroj() {
    let randNumber = Math.ceil(Math.random() * 10);
    let userNumber = prompt("Koji broj od 1-10 sam odabrao?");

    if (randNumber == userNumber) {
        alert("Pogodili ste broj!");
    } else {
        alert("Niste pogodili broj!");
    }
}
// pogodiBroj();



//Zadatak 7 //////////////////////////////////////////////////////////
// 7. Napraviti dva inputa koji su tipa text i dva dugmeta, jedan za množenje drugi za deljenje. Korisnik unosi 2 broja. Klikom na dugme množenje, rezultat 2 uneta broja ispisati u p element.
// ● dodati dugme “Resetuj”, klikom na njega vrednosti iz oba inputa treba da se obrišu.

function kalkulator() {
    const body = document.querySelector("body");

    body.innerHTML =
    '<input id="broj1" type="text" placeholder="Broj 1"><br><input id="broj2" type="text" placeholder="Broj 2"><br><button id="mnozenjeBtn">Množenje</button><button id="deljenjeBtn">Deljenje</button><div id="rezultatDiv"></div>';

    let broj1 = document.querySelector("#broj1");
    let broj2 = document.querySelector("#broj2");
  
    const mnozenjeBtn = document.querySelector("#mnozenjeBtn");
    const deljenjeBtn = document.querySelector("#deljenjeBtn");
    const rezultatDiv = document.querySelector("#rezultatDiv");
    const resetBtnHTML = '<button id="resetBtn">Reset</button>';

    mnozenjeBtn.addEventListener("click", () => {
        let rezultat = parseInt(broj1.value) * parseInt(broj2.value);    
        rezultatDiv.innerHTML = `<p>Rezultat je: ${rezultat}</p><br>${resetBtnHTML}`;

        document.querySelector("#resetBtn").addEventListener("click", () => {
            broj1.value = "";
            broj2.value = "";
        })
    });
    deljenjeBtn.addEventListener("click", () => {
        let rezultat = parseInt(broj1.value) / parseInt(broj2.value);    
        rezultatDiv.innerHTML = `<p>Rezultat je: ${rezultat}</p><br>${resetBtnHTML}`;

        document.querySelector("#resetBtn").addEventListener("click", () => {
            broj1.value = "";
            broj2.value = "";
        })
    });
    
}
// kalkulator();



// Zadatak 8 //////////////////////////////////////////////////////////
// 8. Korisnik unosi 2 cela broja odvojena razmakom u vidu prompt-a. Napisati skriptu, koja će izračunati zbir dva data broja. Ukoliko su brojevi jednaki, izračunati njihov trostruki zbir. Rezultat ispisati u okviru p elementa - teskt je crvene boje (definisati boju kroz JS)

function trostrukiZbir() {
    const body = document.querySelector("body");
    const unos = prompt("Unesi dva broja odvojena razmakom");
    let rezultat = parseInt(unos.split(" ")[0]) + parseInt(unos.split(" ")[1]);

    
    if (unos.split(" ")[0] == unos.split(" ")[1]) {
        body.innerHTML = `<p>Brojevi su isti. Rezultat je ${rezultat*3}</p>`;
    } else {
        body.innerHTML = `<p>Rezultat je ${rezultat}</p>`;
    }


    body.style.color = "tomato";
}
// trostrukiZbir();



// Zadatak 9 //////////////////////////////////////////////////////////
// 9. U vidu prompt-a. Korisnik u prvo prompt-u unosi neki string. U drugom prompt-u unosi poziciju stringa sa koje želi da ukloni vrednost. Skripta treba da obriše karakter u okviru unetog stringa, na unetoj poziciji.
// ● String: Ovo je string.
// ● Pozicija: 2
// ● Izlaz: Ov je string.

function izbacivanjeSlova() {
    const promptTekst = prompt("Unesi tekst iz kojeg želiš da izvadiš jedno slovo");
    const promptIndex = prompt("Unesi poziciju slova koje želiš da ukloniš");
    
    if (promptIndex > 0) {
        let tekstArray = promptTekst.slice(0, promptIndex - 1) + promptTekst.slice(promptIndex);
        alert (tekstArray);
    } else {
        alert ("Niste uneli poziciju slova koji želite da se ukloni! Osveži stranicu i pokušaj ponovo.")
    }
}
// izbacivanjeSlova();



// Zadatak 10 //////////////////////////////////////////////////////////
// 10. Napraviti 2 diva. Jedan je za parne brojeve, drugi za neparne brojeve. Napraviti input koji je tipa number i dugme. Korisnik unosi broj u input i klikom na dugme, u zavisnosti od toga da li je paran broj, ili neparan smesta brojeve u div jedno ispod drugog.

function parNepar () {
    document.querySelector("body").innerHTML = '<input type="number" placeholder="Unesi broj"><button>Proveri</button><div style="display: flex; gap: 50px;"><div id="parni"><h3>Parni</h3></div><div id="neparni"><h3>Neparni</h3></div></div>'
    
    const parniDiv = document.querySelector("#parni");
    const neparniDiv = document.querySelector("#neparni");
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    
    btn.addEventListener("click", () => {
    
        if (input.value % 2 == 0) {
            parniDiv.innerHTML += `<div>${input.value}</div>`;
        } else {
            neparniDiv.innerHTML += `<div>${input.value}</div>`;
        }
    
        input.value = "";
    })
}
// parNepar();



// Zadatak 11 //////////////////////////////////////////////////////////
// 11. Dat je niz celih brojeva [-5, 6, 27, 31, 100, 49, -45, -30, 2, 28]. Napisati funkciju koja za niz koji je prosleđen kao argument vraća novi niz sa elementima brojeva koji su pozitivni. Napisati funkciju koja za niz koji je prosleđen kao argument vraća novi niz sa elementima brojeva koji su dvocifreni.

function nizovi () {
    const niz = [-5, 6, 27, 31, 100, 49, -45, -30, 2, 28];
    let pozitivanNiz = [];
    let dvocifrenNiz = [];
    
    function absolute(array) {
        array.forEach(element => {
            pozitivanNiz.push(Math.abs(element));
        });
        return pozitivanNiz;
    }
    function doubleNum(array) {
        array.forEach(element => {
            if (element * element > 0 && element * element < 10000 ) {
                dvocifrenNiz.push(element);
            }
        });
        return dvocifrenNiz;
    }
    
    absolute(niz);
    doubleNum(niz);
    console.log(`Ovo je uneti niz:\n${niz}`);
    console.log(`Ovo je pozitivan niz:\n${pozitivanNiz}`);
    console.log(`a ovo je dvocifren niz:\n${dvocifrenNiz}`);
}
// nizovi ();


// Zadatak 12 //////////////////////////////////////////////////////////
// 12. Napraviti input type number, dugme ispod inputa “Unesite broj” i div ispod dugmeta. Klikom na dugme racuna se zbir svih do tada unetih brojeva i upisuje se u div. Ukoliko je broj negativan ispisati u alert-u da je broj negativan i broj ulazi u sumiranje.

function sumiranje() {
    document.querySelector("body").innerHTML = '<input type="number"><button style="display: block;">Unesite broj</button><div></div>'
    
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    const div = document.querySelector("div");
    let sum = 0;
    
    btn.addEventListener("click", () => {
    
        if (input.value == "") {
            alert("Morate uneti broj");
    
        } else if (input.value >= 0) {
            sum += parseInt(input.value);
            div.innerHTML = sum;
    
        } else if (input.value < 0) {
            alert("Broj je negativan");
            sum += parseInt(input.value);
            div.innerHTML = sum;
        }
    })
}
// sumiranje();


// Zadatak 13 //////////////////////////////////////////////////////////
// 13. Napraviti dva inputa i dugme “Proveri”. U prvi i u drugi input uneti recenice. Klikom na dugme proveri ispitati da li su ove dve recenice anagrami. Anagrami su recenice koje imaju ista slova, zanemarujuci razmake. Da li su anagrami ispisati u vidu alert poruke.

function anagramChecker () {
    document.querySelector("body").innerHTML = '<h3>Da li su rečenice anagrami?</h3><input id="recenica1" type="text" style="margin: 0 10px 10px 0;"><input id="recenica2" type="text"><button style="display: block;">Proveri</button>'
    
    const recenica1 = document.querySelector("#recenica1");
    const recenica2 = document.querySelector("#recenica2");
    const btn = document.querySelector("button");
    
    btn.addEventListener("click", () => {
        let slova1 = recenica1.value.split("").sort();
        let slova2 = recenica2.value.split("").sort();
    
        if (slova1.join("") == slova2.join("")) {
            alert("✔️ Rečenice jesu anagrami!");
        } else {
            alert("❌ Rečenice nisu anagrami!");
        }
    })
}
// anagramChecker ();