let pisteet = 0;
let omaSijaintiX = 1;
let omaSijaintiY = 1;
let taulukko = [
  ['$', '', ''],
  ['', '', '#'],
  ['&', '', '$'],
];
let pelaajanNimi = ''

let gridElementti = document.getElementById("grid")
let pisteElementti = document.getElementById("pisteet")
let nimiKenttäElementti = document.getElementById("nimiKenttä")
let aloitaElementti = document.getElementById("aloita")
let onGameNimi = document.getElementById("onGameNimi")
let onGame = document.getElementById("onGame")


function piirra() {
  gridElementti.innerHTML = '';
  for (let x = 0; x < taulukko.length; x++) {
    for (let y = 0; y < taulukko[x].length; y++) {
      let gridItem = document.createElement("div")
      gridItem.classList.add('grid-item')
      if (omaSijaintiX === x && omaSijaintiY === y) {
        gridItem.innerHTML = '@'
      } else {
        gridItem.innerHTML = taulukko[x][y];
      }
      gridElementti.appendChild(gridItem);
    }
  }
  pisteElementti.innerHTML = pisteet
};

function aloitaPeli() {
  pelaajanNimi = nimiKenttäElementti.children[0].value
  nimiKenttäElementti.children[0].value = '';
  nimiKenttäElementti.style.display = 'none'
  document.getElementById('tie').className = "hidden";
  onGameNimi.innerHTML = pelaajanNimi
  pisteElementti.innerHTML = pisteet
  onGame.style.display = 'block'
  piirra();

}

function tarkistaOsuma() {
  if (taulukko[omaSijaintiX][omaSijaintiY] === '$') {
    taulukko[omaSijaintiX][omaSijaintiY] = ''
    pisteet += 100
  } else  if (taulukko[omaSijaintiX][omaSijaintiY] === '#') {
      taulukko[omaSijaintiX][omaSijaintiY] = ''
      pisteet += 200
  } else  if (taulukko[omaSijaintiX][omaSijaintiY] === '&') {
      taulukko[omaSijaintiX][omaSijaintiY] = ''
      pisteet += 300
  } else {
    pisteet -= 100
  }
}

function liikuYlös() {
  if (omaSijaintiX > 0) omaSijaintiX--;
  tarkistaOsuma()
  piirra();
}

function liikuAlas() {
  if (omaSijaintiX < taulukko.length - 1) omaSijaintiX++;
  tarkistaOsuma()
  piirra();
}

function liikuVasemmalle() {
  if (omaSijaintiY > 0) omaSijaintiY--;
  tarkistaOsuma()
  piirra();
}

function liikuOikealle() {
  if (omaSijaintiY < taulukko[0].length - 1) omaSijaintiY++;
  tarkistaOsuma()
  piirra();
}

let ylosButton = document.querySelector("#ylosButton");
ylosButton.addEventListener('click', liikuYlös);

let alasButton = document.querySelector("#alasButton");
alasButton.addEventListener('click', liikuAlas);

let vasenButton = document.querySelector("#vasenButton");
vasenButton.addEventListener('click', liikuVasemmalle);

let oikeaButton = document.querySelector("#oikeaButton");
oikeaButton.addEventListener('click', liikuOikealle);


document.onkeydown = function asetaNappainkuuntelija() {
  if (window.event.keyCode === 13 && nimiKenttäElementti.children[0].value.length > 1) {
    aloitaPeli()
   }
  switch (window.event.keyCode) {
    case 37:
      liikuVasemmalle()
      break;
    case 38:
      liikuYlös()
      break;
    case 39:
      liikuOikealle()
      break;
    case 40:
      liikuAlas()
      break;
  }
};

aloitaElementti.addEventListener('click', (event) => {
  if(nimiKenttäElementti.children[0].value.length > 1) {
    aloitaPeli()
  }
})

let aloitaUusiPeli = document.querySelector("#uusiPeli");
aloitaUusiPeli.addEventListener('click',refreshPage)

function refreshPage(){
    window.location.reload();
}
