import Equipo from './Equipo.js';
const equipo = new Equipo();

let equipos = [];

function mostrarEquipos(idPais, categoria){
  obtenerEquipos()
    .then(data => {
      equipos = equipo.filtrarEquipos(data, idPais, categoria);
      equipo.mostrarEquipos(equipos);

      let botones = Array.apply(null, document.querySelector("#equipos-container").querySelectorAll(".boton-equipo"));
      botones.forEach(function(boton) {
        boton.addEventListener("click", function() { 
          let nombreEquipo = this.querySelector("div").querySelector("img").alt;
          equipo.elegirEquipos(nombreEquipo, equipos);
        });
      });
    })
    .catch(error => {
      console.error('Error al obtener los equipos:', error);
    });
}

async function obtenerEquipos() {
  try {
    const response = await fetch('http://localhost:3000/equipos');
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Error al obtener los equipos.');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export {mostrarEquipos, equipos};