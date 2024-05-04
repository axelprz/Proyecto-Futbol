import Equipo from './ligas/Equipo.js';
const equipo = new Equipo();

function llamarEquipos(idPais, categoria){
  fetch('http://localhost:3000/equipos')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error al obtener los equipos.');
    })
    .then(data => {
      equipo.filtrarEquiposPorLiga(data, idPais, categoria);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export {llamarEquipos};