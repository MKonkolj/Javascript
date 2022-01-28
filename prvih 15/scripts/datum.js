// Zadatak 25 //////////////////////////////////////////////////////////
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



// Zadatak 25 //////////////////////////////////////////////////////////
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