class Equipo{
  constructor(nombre, escudoUrl) {
    this.nombre = nombre;
    this.escudoUrl = escudoUrl;
  }

  mostrarEquipos(equipos) {
    const contenedorEquipos = document.getElementById('equipos-container');
    equipos.forEach((equipo) => {
      const tarjeta = this.mostrarTarjeta(equipo);
      contenedorEquipos.appendChild(tarjeta);
    });
  }

  mostrarTarjeta(equipo) {
    const boton = document.createElement('button');
    boton.classList.add('boton-equipo');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('equipo-card');

    const escudo = document.createElement('img');
    escudo.src = equipo.imgEquipo;
    escudo.alt = equipo.nombre;
    escudo.classList.add('equipo-escudo');

    const nombre = document.createElement('p');
    nombre.textContent = equipo.nombre;
    nombre.classList.add('equipo-nombre');

    tarjeta.appendChild(escudo);
    tarjeta.appendChild(nombre);
    boton.appendChild(tarjeta);

    return boton;
  }
}

export default Equipo;