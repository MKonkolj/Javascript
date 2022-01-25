// svaki zadatak je u funkciji, zakomentariosao sam samo pozivanje funkcije zadatka ////
//Zadatak 3 //////////////////////////////////////////////////////////
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
function povrsinaTroungla() {
    let a = 2,
        b = 5,
        c = 6;
    
    console.log((a+b+c)/2);
}
// povrsinaTroungla()



//Zadatak 6
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



// Zadatak 12 //////////////////////////////////////////////////////////
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