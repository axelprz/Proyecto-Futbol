import Equipo from './Equipo.js';
const equipo = new Equipo();

let equipos = [];

function mostrarEquipos(idPais, categoria){
  obtenerEquipos()
    .then(data => {
      equipos = equipo.filtrarEquipos(data, idPais, categoria);
      equipos.forEach(equipo =>{
        equipo["pts"] = 0;
        equipo["pj"] = 0;
        equipo["pg"] = 0;
        equipo["pe"] = 0;
        equipo["pp"] = 0;
        equipo["gf"] = 0;
        equipo["gc"] = 0;
        equipo["dif"] = 0;
      })
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