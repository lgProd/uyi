let arrayDeCartas = [];

const cartaPasadoContainer = document.getElementById("carta-pasado");
const cartaPresenteContainer = document.getElementById("carta-presente");
const cartaFuturoContainer = document.getElementById("carta-futuro");
const btnVolverATirar = document.getElementById("volver-a-tirar");

function obtenerIndexRandom(max) {
    return Math.floor(Math.random() * max);
}

let cartaPasadoSeleccionada = false;
let cartaPresenteSeleccionada = false;
let cartaFuturoSeleccionada = false;


const pNumeroCarta1 = document.getElementById("p-numero-carta1");
const pNumeroCarta2 = document.getElementById("p-numero-carta2");
const pNumeroCarta3 = document.getElementById("p-numero-carta3");

const pDescripCarta1 = document.getElementById("p-descrip-carta1");
const pDescripCarta2 = document.getElementById("p-descrip-carta2");
const pDescripCarta3 = document.getElementById("p-descrip-carta3");



fetch("../../json/arcanosmayores.json")
    .then(respuesta => respuesta.json())
    .then(cartas => {
        arrayDeCartas = cartas;

        const numCartas = arrayDeCartas.length;
        const indicesDisponibles = [];
        for (let i = 0; i < numCartas; i++) {
            indicesDisponibles.push(i);
        } 

        cartaPasadoContainer.addEventListener("click", () => {
            if (!cartaPasadoSeleccionada) {
                const randomIndex = indicesDisponibles.splice(obtenerIndexRandom(indicesDisponibles.length), 1)[0];
                cartaPasadoContainer.classList.add("card-dada-vuelta"); 
                
                setTimeout(() => {
                    cartaPasadoContainer.style.backgroundImage = `url(../${arrayDeCartas[randomIndex].img})`;
                    pNumeroCarta1.innerText = `Carta número ${arrayDeCartas[randomIndex].numero}, ${arrayDeCartas[randomIndex].nombre} `;
                    pDescripCarta1.innerText = `${arrayDeCartas[randomIndex].descripcion}`;
                }, 250);
                cartaPasadoSeleccionada = true;
            }
        });

        cartaPresenteContainer.addEventListener("click", () => {
            if (!cartaPresenteSeleccionada) {
                const randomIndex = indicesDisponibles.splice(obtenerIndexRandom(indicesDisponibles.length), 1)[0];
                cartaPresenteContainer.classList.add("card-dada-vuelta"); 
                setTimeout(() => {
                    cartaPresenteContainer.style.backgroundImage = `url(../${arrayDeCartas[randomIndex].img})`;
                    pNumeroCarta2.innerText = `Carta número ${arrayDeCartas[randomIndex].numero}, ${arrayDeCartas[randomIndex].nombre} `;
                    pDescripCarta2.innerText = `${arrayDeCartas[randomIndex].descripcion}`;
                }, 250);
                cartaPresenteSeleccionada = true;
            }
        });

        cartaFuturoContainer.addEventListener("click", () => {
            if (!cartaFuturoSeleccionada) {
                const randomIndex = indicesDisponibles.splice(obtenerIndexRandom(indicesDisponibles.length), 1)[0];
                cartaFuturoContainer.classList.add("card-dada-vuelta"); 
                setTimeout(() => {
                    cartaFuturoContainer.style.backgroundImage = `url(../${arrayDeCartas[randomIndex].img})`;
                    pNumeroCarta3.innerText = `Carta número ${arrayDeCartas[randomIndex].numero}, ${arrayDeCartas[randomIndex].nombre} `;
                    pDescripCarta3.innerText = `${arrayDeCartas[randomIndex].descripcion}`;
                }, 250);
                cartaFuturoSeleccionada = true;
            }
        });

    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error))
;


function reiniciarTirada() {
    

    location.reload();
    
    

}

btnVolverATirar.addEventListener("click", reiniciarTirada);