// Zadatak 19 //////////////////////////////////////////////////////////
// 19. Napraviti novi dokument „odlucivanja js.
// a) Deklarisati varijablu „broj" čija će vrednost biti nasumični ceo broj od 18 do 50.
// b) Napraviti strukturu za odlučivanje koja će reagovati na vrednost varijable „broj' na sledeći način:
// - za vrednosti od 18 do 25 ispisicaće se poruka u konzoli: Vaše godine XX nam ne odgovaraju, jer ste premladi.
// - za vrednosti od 26 do 35 ispisaće se poruka u konzoli: Vaše godine XX nam odgovaraju.
// - za vrednosti od 36 do 50 ispisaće se poruka u konzoli: Vaše godine XX nam ne odgovaraju, jer ste prestari.

function godineStarosti() {
    let broj = Math.floor(Math.random() * (51-18) + 18);
    
    if (broj < 26) {
        console.log(`Vaše godine ${broj} nam ne odgovaraju, jer ste premladi.`);
    } else if (broj > 35) {
        console.log(`Vaše godine ${broj} nam ne odgovaraju, jer ste prestari.\n*** Emotional Damage! ***`);
    } else {
        console.log(`Vaše godine ${broj} nam odgovaraju.`);
    }
}
// godineStarosti();