class Equipo {
  constructor(nombre, escudoUrl) {
    this.nombre = nombre;
    this.escudoUrl = escudoUrl;
  }

  filtrarEquiposPorLiga(data, idPais, idCategoria) {
    this.mostrarEquipos((data.filter(equipo => equipo.idPais === idPais && equipo.categoria === idCategoria)));
  }

  mostrarEquipos(equipos) {
    const contenedorEquipos = document.getElementById('equipos-container');
    equipos.forEach(equipo => {
      const tarjeta = this.mostrarTarjeta(equipo);
      contenedorEquipos.appendChild(tarjeta);
    });
  }

  mostrarTarjeta(equipo) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('equipo-card');

    const escudo = document.createElement('img');
    escudo.src = equipo.imgEquipo;
    escudo.alt = `Escudo de ${equipo.nombre}`;
    escudo.classList.add('equipo-escudo');

    const nombre = document.createElement('p');
    nombre.textContent = equipo.nombre;
    nombre.classList.add('equipo-nombre');

    tarjeta.appendChild(escudo);
    tarjeta.appendChild(nombre);

    return tarjeta;
  }
}

export default Equipo;
