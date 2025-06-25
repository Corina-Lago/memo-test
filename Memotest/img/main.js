const elementos = ["❤", "☮", "💌", "💤", "♊", "🎀", "✨", "🍕"];
let cartas = [];

let primeraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let aciertos = 0; 

const tablero = document.getElementById("juego");

const mensaje = document.getElementById("ganaste");

const botonReiniciar = document.getElementById("reinicio");

const mezclar = array => array.sort(() => Math.random() - 0.5);

const crearTablero = () => {
    tablero.innerHTML = ""; 
    mensaje.textContent = "";
    aciertos = 0;
    primeraCarta = null;
    segundaCarta = null;
    bloqueado = false; 

    cartas = [...elementos, ...elementos];
    cartas = mezclar(cartas);
    cartas.forEach((icono) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.dataset.icono = icono; 
        carta.textContent = "";
    }