const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 99; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  star.style.top = Math.random() * 99 + 'vh';
  star.style.left = Math.random() * 99 + 'vw';
  
  star.style.animationDelay = (Math.random() * 2) + 's';
  
  starsContainer.appendChild(star);
}

// Fonction pour "pause" si tu veux en ajouter une
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function astrologie() {
  document.getElementById("carte").innerHTML = "";
  document.getElementById("reponse").innerHTML = `
    <div class="loader-container">
      <label>En cours de chargement...</label>
      <div class="spinner"></div>
    </div>
  `;

  // Optionnel : attente 2 secondes pour effet visuel
await sleep(2000);

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
      document.getElementById("reponse").innerHTML = "Erreur lors de la requête API";
      return;
    }

    data = await reponse.json();
    console.log(data);

  } catch (error) {
    document.getElementById("reponse").innerHTML = "Erreur : " + error;
    return;
  }

  let tableau = Object.entries(data);
  tableau = tableau[2];
  tableau = tableau[1];

  const horoscope = Object.entries(tableau);

  let texte = "";

  for (let x = 0; x < horoscope.length; x++) {
    let signe = horoscope[x][0];
    let message = horoscope[x][1];

    texte += `<div class="carte_horoscope">`;
        texte += `<h2>${signe}</h2>`;

switch(signe){
  case "Bélier":
    texte += '<img src="./assets/images/Signe/belier.webp" alt="Sigle Bélier">';
    break;

  case "Taureau":
    texte += '<img src="./assets/images/Signe/taureau.webp" alt="Sigle Taureau">';
    break;

  case "Gémeaux":
    texte += '<img src="./assets/images/Signe/gemeaux.webp" alt="Sigle Gémeaux">';
    break;

  case "Cancer":
    texte += '<img src="./assets/images/Signe/cancer.webp" alt="Sigle Cancer">';
    break;

  case "Lion":
    texte += '<img src="./assets/images/Signe/lion.webp" alt="Sigle Lion">';
    break;

  case "Vierge":
    texte += '<img src="./assets/images/Signe/vierge.webp" alt="Sigle Vierge">';
    break;

  case "Balance":
    texte += '<img src="./assets/images/Signe/balance.webp" alt="Sigle Balance">';
    break;

  case "Scorpion":
    texte += '<img src="./assets/images/Signe/scorpion.webp" alt="Sigle Scorpion">';
    break;

  case "Sagittaire":
    texte += '<img src="./assets/images/Signe/sagittaire.webp" alt="Sigle Sagittaire">';
    break;

  case "Capricorne":
    texte += '<img src="./assets/images/Signe/capricorne.webp" alt="Sigle Capricorne">';
    break;

  case "Verseau":
    texte += '<img src="./assets/images/Signe/verseau.webp" alt="Sigle Verseau">';
    break;

  case "Poissons":
    texte += '<img src="./assets/images/Signe/poisson.webp" alt="Sigle Poissons">';
    break;

  default:
    texte += '<p style="color:red;">Signe non reconnu</p>';
}

texte += `<p>${message}</p>`;    
texte += `</div>`;


  // On affiche le contenu une fois la boucle terminée
  document.getElementById("carte").innerHTML = texte;

  // On enlève le loader
  document.getElementById("reponse").innerHTML = `<button onclick="affichage()" aria-label="Enlever les messages inspirant de l'écran">
    Enlever les messages
</button>`;

const btn = document.querySelector('.affichage_messages');
btn.style.display = "none";
}}



function affichage(){
      document.getElementById("carte").innerHTML = "";
      document.getElementById("reponse").innerHTML = "";

      const btn = document.querySelector('.affichage_messages');
        btn.style.display = "block";
}

