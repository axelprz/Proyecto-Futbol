import Equipo from './ligas/Equipo.js';
const equipo = new Equipo();

let equipos = [];

function mostrarEquipos(idPais, categoria){
  obtenerEquipos()
    .then(data => {
      equipos = filtrarEquipos(data, idPais, categoria);
      equipo.mostrarEquipos(equipos);

      let botones = Array.apply(null, document.querySelector("#equipos-container").querySelectorAll(".boton-equipo"));
      botones.forEach(function(boton) {
        boton.addEventListener("click", function() { 
          let nombreEquipo = this.querySelector("div").querySelector("img").alt;
          elegirEquipos(nombreEquipo, equipos);
        });
      });
    })
    .catch(error => {
      console.error('Error al obtener los equipos:', error);
    });
}

function filtrarEquipos(data, idPais, categoria){
  return data.filter(data => data.idPais === idPais && data.categoria === categoria);
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

function elegirEquipos(equipoSeleccionado, equipos){
  if(document.getElementById("equipo1").style.display === "none"){
    const equipo1 = document.getElementById("equipo1");
    equipo1.style.display = "block";
    llenarEquiposSeleccionados(equipoSeleccionado, equipos, equipo1);
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
    llenarEquiposSeleccionados(equipoSeleccionado, equipos, equipo2);
    document.getElementById("marcador").style.display = "contents";
    document.getElementById("estadio").style.display = "contents";

  }
}

function llenarEquiposSeleccionados(equipoSeleccionado, equipos, contenedor){
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

function simularPartido(equipos){
  if(document.getElementById("equipo1").style.display === "none" || 
  document.getElementById("equipo2").style.display === "none"){
    document.getElementById("elegirEquipo").style.display="block";
  }else{
    document.getElementById("elegirEquipo").style.display="none";
    const equipo1 = document.getElementById("equipo1").querySelector("div").querySelector("img").alt;
    const equipo2 = document.getElementById("equipo2").querySelector("div").querySelector("img").alt;
    let punEquipo1;
    let punEquipo2;
    let rangos = [];
    let resultado1;
    let resultado2;

    equipos.forEach(equipo =>{
      if(equipo.nombre == equipo1){
        punEquipo1 = equipo.puntuacion;
      }else if(equipo.nombre == equipo2){
        punEquipo2 = equipo.puntuacion;
      }
    })

    rangos = calcularResultado(punEquipo1, punEquipo2);
    console.log(rangos)
    resultado1 = (Math.floor(Math.random() * rangos[0] + 1)) - 1;
    resultado2 = (Math.floor(Math.random() * rangos[1] + 1)) - 1;

    document.getElementById("m1").textContent = resultado1;
    document.getElementById("m2").textContent = resultado2;
  }
}

function calcularResultado(puntuacion1, puntuacion2){
  let rangoMaximo1;
  let rangoMaximo2;
  if(puntuacion1 > puntuacion2){
    if((puntuacion1 - puntuacion2) > 25){
      rangoMaximo1 = 8 + 1;
      rangoMaximo2 = 2;
    }else if((puntuacion1 - puntuacion2) > 20){
      rangoMaximo1 = 7 + 1;
      rangoMaximo2 = 2;
    }else if((puntuacion1 - puntuacion2) > 15){
      rangoMaximo1 = 6 + 1;
      rangoMaximo2 = 2;
    }else if((puntuacion1 - puntuacion2) > 10){
      rangoMaximo1 = 5 + 1;
      rangoMaximo2 = 2;
    }else if((puntuacion1 - puntuacion2) > 5){
      rangoMaximo1 = 4 + 1;
      rangoMaximo2 = 2;
    }else if((puntuacion1 - puntuacion2) > 0){
      rangoMaximo1 = 3 + 1;
      rangoMaximo2 = 2;
    }
  }else if(puntuacion2 > puntuacion1){
    if((puntuacion2 - puntuacion1) > 25){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 7;
    }else if((puntuacion2 - puntuacion1) > 20){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 6;
    }else if((puntuacion2 - puntuacion1) > 15){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 5;
    }else if((puntuacion2 - puntuacion1) > 10){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 4;
    }else if((puntuacion2 - puntuacion1) > 5){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 3;
    }else if((puntuacion2 - puntuacion1) > 0){
      rangoMaximo1 = 1 + 1;
      rangoMaximo2 = 2;
    }
  }
  return [rangoMaximo1, rangoMaximo2];
}

export {mostrarEquipos, simularPartido, equipos};