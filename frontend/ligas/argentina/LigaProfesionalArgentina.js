import {mostrarEquipos, equipos} from '../../script.js';
import {simularPartido, simularLiga} from '../../simulacion.js';

let idPais = 1;
let categoria = 1;

mostrarEquipos(idPais, categoria);

document.addEventListener("DOMContentLoaded", () =>{
    const btnSimularPartido = document.getElementById("simularPartidoBtn");
    const btnSimularLiga = document.getElementById("simularLigaBtn");

    btnSimularPartido.addEventListener("click", () =>{
        simularPartido(equipos);
    });

    btnSimularLiga.addEventListener("click", () =>{
        simularLiga(equipos);
    })
});
