const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  
  star.style.animationDelay = (Math.random() * 2) + 's';
  
  starsContainer.appendChild(star);
}


async function astrologie(){
    document.getElementById("carte").innerHTML = ""

     document.getElementById("carte").innerHTML = `        <div class="loader-container">
            <label>En cours de chargement...</label>
            <div class="spinner">
            </div>
        </div>`

    let data;

    try {
        const reponse = await fetch("https://oracles-api.sidathsoeun.fr/oracle_api.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                api_key: "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!"
            })
        });

        if (!reponse.ok) {
            document.getElementById("reponse").innerHTML ="Erreur lors de la requête API";
            return;
        }

        data = await reponse.json();
        console.log(data);

    } catch (error) {
           document.getElementById("reponse").innerHTML = "Erreur : " + error;
    }

    let tableau = Object.entries(data);
    console.log(tableau);

    tableau = tableau[2];
    console.log(tableau);

    tableau = tableau[1];
    console.log(tableau); 

    const horoscope = Object.entries(tableau);

    console.log(horoscope)
    console.log(horoscope[0][0])

let texte = "";

for (let x = 0; x < horoscope.length; x++) {
    let signe = horoscope[x][0];
    let message = horoscope[x][1];

    // On construit le texte HTML en accumulant les infos à chaque tour
    texte += `<div class="carte_horoscope">`;
    texte += `<h2>${signe}</h2>`;
    texte += `<p>${message}</p>`;
    texte += `</div>`;
}

// Une fois la boucle terminée, on injecte tout dans l'élément "carte"
document.getElementById("carte").innerHTML = texte;

 }