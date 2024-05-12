import Equipo from "./Equipo";

const equipo = new Equipo();

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

function simularPartido(equipos){
    if(document.getElementById("equipo1").style.display === "none" 
        || document.getElementById("equipo2").style.display === "none"){
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
      resultado1 = (Math.floor(Math.random() * rangos[0] + 1)) - 1;
      resultado2 = (Math.floor(Math.random() * rangos[1] + 1)) - 1;
  
      document.getElementById("m1").textContent = resultado1;
      document.getElementById("m2").textContent = resultado2;
    }
}

function simularLiga(equipos){
    document.getElementById("equipos-container").style.display = "none";
    document.getElementById("simularPartidoBtn").style.display = "none";
    document.getElementById("vistaSimularLiga").style.display = "block";
    equipo.llenarTablaEquipos(equipos);
}

export {simularPartido, simularLiga};