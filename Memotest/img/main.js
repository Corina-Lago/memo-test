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
        carta.addEventListener("click", () => {
            if (bloqueado) return; 
            if (carta === primeraCarta) return;
            if (carta.textContent !== "")return;
            carta.textContent = icono;

            if (!primeraCarta) {
                primeraCarta = carta;
            } else {
                segundaCarta = carta;
                bloqueado = true; 

            if(primeraCarta.dataset.icono === segundaCarta.dataset.icono){
                aciertos++;
                primeraCarta = null;
                segundaCarta = null;
                bloqueado = false;
                
                if(aciertos === elementos.length){
                    mensaje.textContent = "¡Felicitaciones, ganaste!"
                }

                } else {
                    setTimeout (() => {
                        primeraCarta.textContent = "";
                        segundaCarta.textContent = "";
                        primeraCarta = null;
                        segundaCarta = null; 
                        bloqueado = false; 
                        }, 1000); 
                        }
                        
                        }
                
                    });
                    tablero.appendChild(carta);
        });
    };



    
    botonReiniciar.addEventListener("click", crearTablero);
    crearTablero();

