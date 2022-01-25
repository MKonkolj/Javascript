// Zadatak 20 //////////////////////////////////////////////////////////
// 20. Napraviti novi dokument „odlucivanja2 js".
// a) Deklarisati niz sa identifikatorom „voce“ od tri elementa: jabuka, kruska i breskva.
// b) Odabrati i napraviti najoptimalniju strukturu za odlučivanje koja će reagovati na nasumičnu vrednost iz niza „voce“ na sledeći način:
// - za vrednost jabuka ispisati u konzoli: Ja volim jabuke.
// - za vrednost kruska ispisati u konzoli: XXXX je moje omiljeno voce.
// - za vrednost breskva ispisati u konzoli: Mrzim sok od breskve.

let voce = ["jabuka", "kruska", "breskva"];
let mojOdabir = voce[Math.floor(Math.random()*3)];

function biranjeVoca (odabranoVoce) {
    if (odabranoVoce == voce[0]) {
        console.log("Ja volim jabuke.");
    } else if (odabranoVoce == voce[1]) {
        console.log(`${odabranoVoce} je moje omiljeno voće.`);
    } else if (odabranoVoce == voce[2]) {
        console.log("Mrzim sok od breskve.");
    }
}

// biranjeVoca(mojOdabir);