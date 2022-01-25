// Zadatak 14
function hrana(jelo1, jelo2, jelo3) {
    return `Volim da jedem ${jelo1}, ${jelo2} i ${jelo3}.`
}
// console.log(hrana("musaku", "ćevape", "burek"));


//Zadatak 15
function zapremina (r, H) {
    let V = Math.round(Math.pow(r, 2) * Math.PI * H);
    return `Zapremina valjka je ${V}m3.`;
}
console.log(zapremina (2, 4));