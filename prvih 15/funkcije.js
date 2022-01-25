// Zadatak 14 //////////////////////////////////////////////////////////
// 14. U okviru dokumenta "funkcije.js":
// a) napraviti novu funkciju "hrana" koja ima tri parametra. Izlaz funkcije je rečenica "Volim
// da jedem XXXX1, XXXX2 i XXXX3." Gde je XXXX1,2,3 vrednost parametara
// b) ispisati ovaj izlaz u konzoli

function hrana(jelo1, jelo2, jelo3) {
    return `Volim da jedem ${jelo1}, ${jelo2} i ${jelo3}.`
}
// console.log(hrana("musaku", "ćevape", "burek"));



//Zadatak 15 //////////////////////////////////////////////////////////
// 15. Napraviti novi dokument "funkcije.js". U dokumentu:
// a) napisati funkciju koja će vršiti proračun zapremine valjka i vraćati je. Dati joj ime "zapremina". Funkciju napisati tako da može računati zapreminu bilo kojeg valjka, ako je poznat poluprečnik valjka i njegova visina. Ovi podaci se prosleđuju u vidu parametra funkcije.
// b) Ispisati u konzoli rezultat u slučaju kada je poluprečnik 2m, a visina 4m. S tim da izlaz treba formatirati ovako: "Zapremina valjka je XXXXm3.". Gde je XXXX vrednost proračunate zapremine.

function zapremina (r, H) {
    let V = Math.round(Math.pow(r, 2) * Math.PI * H);
    return `Zapremina valjka je ${V}m3.`;
}
//console.log(zapremina (2, 4));

// Zadatak 16 //////////////////////////////////////////////////////////
// 16. U okviru dokumenta "funkcije j:
// a) Napraviti anonimnu funkciju koja je samoizvršavajuća. Funkcija treba da ispiše u-
// konzoli rečenicu: "Dobar dan."

// (function () {
//     console.log("Dobar dan.");
// })();
