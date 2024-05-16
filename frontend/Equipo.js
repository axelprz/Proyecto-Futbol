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

  filtrarEquipos(data, idPais, categoria){
    return data.filter(data => data.idPais === idPais && data.categoria === categoria);
  }

  llenarEquiposSeleccionados(equipoSeleccionado, equipos, contenedor){
    equipos.forEach(equipo =>{
      if(equipo.nombre === equipoSeleccionado){
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('equipo-card');
        tarjeta.id = "equipo-seleccionado";
  
        const escudo = document.createElement('img');
        escudo.src = equipo.imgEquipo;
        escudo.alt = equipo.nombre;
        escudo.classList.add('equipo-escudo');
  
        const nombre = document.createElement('p');
        nombre.textContent = equipo.nombre;
        nombre.classList.add('equipo-nombre');
  
        tarjeta.appendChild(escudo);
        tarjeta.appendChild(nombre);
        contenedor.appendChild(tarjeta);
      }
    })
  }

  elegirEquipos(equipoSeleccionado, equipos){
    if(document.getElementById("equipo1").style.display === "none"){
      const equipo1 = document.getElementById("equipo1");
      equipo1.style.display = "block";
      this.llenarEquiposSeleccionados(equipoSeleccionado, equipos, equipo1);
      equipos.forEach(equipo => {
        if(equipo.nombre === equipoSeleccionado){
          document.getElementById("imgEstadio").src = equipo.imgEstadio;
          document.getElementById("nombreEstadio").textContent = equipo.nombreEstadio;
        }
      })
    }
    else if(document.getElementById("equipo2").style.display === "none"){
      const equipo2 = document.getElementById("equipo2");
      equipo2.style.display = "block";
      this.llenarEquiposSeleccionados(equipoSeleccionado, equipos, equipo2);
      document.getElementById("marcador").style.display = "contents";
      document.getElementById("estadio").style.display = "contents";
  
    }
  }
}

export default Equipo;