// Zadatak 17 //////////////////////////////////////////////////////////
// 17. Napraviti novi dokument "rezime js". U dokumentu:
// a) deklarisati dve varijable „sirina i „visina“. Ove varijable će služiti da se u njima skladište podaci o veličini pravougaonika u vidu string podataka.
// b) dodeliti varijablama prozivoljne brojeve tako da to budu string podaci, pri čemu je jedan ceo broj, a drugi sa zarezom
// c) napraviti funkciju „proracun* tako da joj se prosleđuju vrednosti iz varijabli „sirina" i „visina* pri njenom izvršavanju. Zadatak funkcije je da izračuna obim i površinu datog pravougaonika i da vrati ove vrednosti u vidu poruke: "O=X0XXm\P=XXXXm2".
// d) testirati funkciju i rezultat funkcije ispisati u konzoli

function povrsinaObim () {
    // a)
    let sirina = "",
        visina = "";
    
    // b)
    sirina = "21";
    visina = "29.6";
    
    // c)
    function proracun (x, y) {
        let obim = (x + y)*2;
        let povrsina = x * y;
        console.log(`O=${obim} m\nP=${povrsina} m²`);
    }
    
    proracun (sirina, visina);
}
// povrsinaObim();

// Zadatak 18 //////////////////////////////////////////////////////////
// 18. Napraviti 5 paragrafa sa sadržajem 1, 2, 3, 4, 5.
// • Kada se pređe mišem preko bilo kojeg paragrafa, njegova pozdinska boja se menja u zelenu, a boja teksta u belu.
// • Prešli smo mišem preko nekog paragrafa, pozadina i boja teksta se promenila. Kada miš odmaknemo sa tog paragrafa boja pozadine se vraća na belu, a boja teksta na crnu.
// • Klikom na bilo koji paragraf, na trenutni sadržaj paragrafa se nadodaje poruka "Pritisnut sam"

function hoverClick () {
    document.querySelector("body").innerHTML = '<p style="padding: 10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur, quam sunt eaque quos aliquid distinctio ratione recusandae veritatis sed enim. Tempora, quia ipsam! Ipsum quibusdam iste alias sint voluptatibus tempora, sequi odio deleniti, officia aliquam quas! Earum id amet voluptatum doloribus maxime ullam eum voluptates aut vero ea. Magnam consectetur sit consequatur cumque deleniti, tenetur omnis illo facilis deserunt?</p><p style="padding: 10px;">Consequuntur incidunt minima error ipsam explicabo enim, labore dolores. Consequatur consequuntur laborum, vero doloremque amet rerum tenetur corporis, dolorum dolorem excepturi sequi animi exercitationem ipsum similique perferendis assumenda, nihil ut. Laborum quod ratione, tempora nihil consectetur quam sit quaerat voluptates exercitationem illum necessitatibus esse quas similique, saepe quos corrupti. Eius minus quae consectetur tempora natus ipsa culpa nisi soluta expedita.</p><p style="padding: 10px;">Dolores recusandae, omnis iusto debitis quibusdam magni, minima exercitationem eveniet provident illum earum. Eligendi enim aspernatur quibusdam reprehenderit quos repellat! Accusantium eaque quasi sed id! Repellat quibusdam neque quasi architecto sed et pariatur ut at itaque magnam sint, dolore dolorum maxime officiis iusto exercitationem eveniet impedit ipsa optio ex doloremque! Tempora provident aspernatur nesciunt in, autem animi possimus dolorum eius.</p><p style="padding: 10px;">Expedita aperiam similique, eum autem nam sunt laboriosam, voluptate nesciunt facilis quisquam nobis impedit minus atque non unde ipsum soluta dolorum commodi enim delectus esse libero. Pariatur officiis molestiae, libero cumque eaque aut debitis dolorem dicta id, repellat dignissimos quam voluptates rem neque? Soluta id dolorem excepturi esse perspiciatis! Autem explicabo vero quibusdam sequi animi ipsum voluptatem expedita sapiente ad!</p><p style="padding: 10px;">Soluta tempora, quaerat dicta mollitia quis cumque doloremque doloribus itaque deserunt iusto, sit quia exercitationem culpa quasi adipisci error necessitatibus velit ullam! Mollitia quaerat minus excepturi officia maxime ex aspernatur facere illo unde, placeat ea tenetur, sequi ipsum et! Hic doloribus iste adipisci nobis. Voluptatibus quas, ea facilis nisi asperiores incidunt error possimus reprehenderit, molestias velit tempore, assumenda temporibus quis?</p>'
    
    const ps = document.querySelectorAll("p");
    
    ps.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "green";
            element.style.color = "white";
        });
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
        element.addEventListener("click", () => {
            element.innerHTML += "<em> Pritisnut sam</em>"
        });
    });
}
// hoverClick ();