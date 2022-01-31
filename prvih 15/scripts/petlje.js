// Zadatak 21 //////////////////////////////////////////////////////////
// 21. Napraviti novi dokument „petlje.js“.
// a) Deklarisati niz sa identifikatorom „desetice“ od pet elemenata: 10, 20, 30, 40 i 50.
// b) Dodati na kraju niza element koji ima vrednost 60. Dodavanje obaviti na način koji bi važio za svaki niz, ali ne koristiti metode za objekat niza.
// c) Zameniti vrednost treceg elementa niza sa vrednošću 35.
// d) Ipisati u konzoli vrednosti svih elemenata koristeći for petlju.

function guraj () {
    let desetice = [10, 20, 30, 40, 50];
    
    // Array.prototype.guraj = function (element) {
    //     this.length = element;
    // }
    // console.log(desetice.guraj(60));
    // ne radi :(
    
    (function () {
        desetice[desetice.length] = 60;
        desetice[2] = 35;
        for (let desetica in desetice) {
            console.log(desetice[desetica] + "\n");
        }
    })();
}
// guraj();