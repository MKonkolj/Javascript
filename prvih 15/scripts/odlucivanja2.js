// Zadatak 20 //////////////////////////////////////////////////////////
// 20. Napraviti novi dokument „odlucivanja2 js".
// a) Deklarisati niz sa identifikatorom „voce“ od tri elementa: jabuka, kruska i breskva.
// b) Odabrati i napraviti najoptimalniju strukturu za odlučivanje koja će reagovati na nasumičnu vrednost iz niza „voce“ na sledeći način:
// - za vrednost jabuka ispisati u konzoli: Ja volim jabuke.
// - za vrednost kruska ispisati u konzoli: XXXX je moje omiljeno voce.
// - za vrednost breskva ispisati u konzoli: Mrzim sok od breskve.

function biranjeVoca () {

let voce = ["jabuka", "kruska", "breskva"];
let mojOdabir = voce[Math.floor(Math.random()*voce.length)];

//     if (mojOdabir == voce[0]) {
//         console.log("Ja volim jabuke.");
//     } else if (mojOdabir == voce[1]) {
//         console.log(`${mojOdabir} je moje omiljeno voće.`);
//     } else if (mojOdabir == voce[2]) {
//         console.log("Mrzim sok od breskve.");

    switch (mojOdabir) {
        case voce[0]:
            console.log("Ja volim jabuke.");
            break;
        case voce[1]:
            console.log(`${mojOdabir.charAt().toUpperCase().concat(mojOdabir.slice(1))} je moje omiljeno voće.`);
            break;
        case voce[2]:
            console.log("Mrzim sok od breskve.");
            break;
    }
}
// biranjeVoca();