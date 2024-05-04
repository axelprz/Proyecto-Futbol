const equiposContainer = document.getElementById('equipos-container');

function crearElementoEquipo(equipo) {
  const equipoElement = document.createElement('div');
  equipoElement.classList.add('equipo-card');

  const escudoImg = document.createElement('img');
  escudoImg.src = equipo.imgEquipo; 
  escudoImg.alt = equipo.nombre;
  escudoImg.classList.add('equipo-escudo');

  const nombreEquipo = document.createElement('p');
  nombreEquipo.textContent = equipo.nombre;
  nombreEquipo.classList.add('equipo-nombre');

  equipoElement.appendChild(escudoImg);
  equipoElement.appendChild(nombreEquipo);

  equiposContainer.appendChild(equipoElement);
}

fetch('http://localhost:3000/equipos')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error al obtener los equipos.');
  })
  .then(data => {
    data.forEach(equipo => {
      crearElementoEquipo(equipo);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
