import {mostrarEquipos, simularPartido, equipos} from '../../script.js';

let idPais = 1;
let categoria = 1;

mostrarEquipos(idPais, categoria);

document.addEventListener("DOMContentLoaded", function() {
    const btnSimularPartido = document.getElementById("simularPartidoBtn");
    btnSimularPartido.addEventListener("click", function(){
        simularPartido(equipos);
    });
})