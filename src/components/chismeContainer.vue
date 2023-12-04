<template>
    <div class="main">
      <!-- <img src="../assets/bckgrndColor.jpg"> -->
      <div id="HD">
        
        <p style="text-align: right; font-size: 3vw; color: white;">A</p>
        <img id="hdp" src="../assets/Humpty_Dumpty.webp">
        <p style="text-align: left; font-size: 3vw; color: white;">chismesito</p>
        <img id="rayaHumpty" src="../assets/vector.png" style="text-align: left; position: absolute; font-size: 3vw; bottom: -6%; transform: rotate(180deg); left: 15px;">
      </div>
      
      <div class="buttons">
        
        <router-link :to="{name: 'recientes'}">
          <div class="button" :style="{ backgroundColor: color1}" @click="changeColor(1);">
            <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" >
              <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
            </svg>
            <p class="txt">Más recientes</p>
          </div>
        </router-link>

        <router-link :to="{name: 'antiguos'}">
          <div class="button" :style="{ backgroundColor: color2}" @click="changeColor(2);">
            <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
            </svg>
            <p class="txt">Más antiguos</p>
          </div>
        </router-link>

        <router-link :to="{name: 'populares'}">
          <div class="button" :style="{ backgroundColor: color3}" @click="changeColor(3);">
            <svg class="iconButton" xmlns="http://www.w3.org/2000/svg" height="30" width="30"  viewBox="0 0 24 24" >
              <path  d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"/>
            </svg>
            <p class="txt">Más populares</p>
          </div>
        </router-link>
      </div>

      <router-view></router-view>

      <!-- <div v-for="(item) in listaChismes">
        <chismeCard :id-chisme="item.id" :fechaPublicacion="item.fechaPublicacion" :contenido="item.contenido" 
          :genero="obtenerGenero(item.idUsuario)" :edad="obtenerEdad(item.idUsuario)">
        </chismeCard>
      </div> -->
      <!-- <chismeCard></chismeCard>
      <chismeCard></chismeCard>
      <chismeCard></chismeCard> -->
      <!-- a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br> -->
    </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue';
/* import chismeCard from './chismeCard.vue'; //! No sé a qué se debe este error, pero que se muera
import { listaChismes, ordenarChismesRecientes } from "../chismes_controller";
import { obtenerUsuario } from "../datos_controller";

let listaChismesRecientes = reactive([]);

listaChismesRecientes = ordenarChismesRecientes();

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function obtenerEdad(idUsuario) {
  let usuario = obtenerUsuario(idUsuario);
  
  let edad = calcularEdad(usuario.fechaNacimiento);

  return edad;
}

function obtenerGenero(idUsuario) {
    let usuario = obtenerUsuario(idUsuario);

    if (usuario.genero === 'masculino') {
        return 'Masculino';
    } else if (usuario.genero === 'femenino') {
        return 'Femenino';
    } else {
        return 'No binario';
    }
} */

let color1 = ref("#ffffff");
let color2 = ref("#00000000");
let color3 = ref("#00000000");

const changeColor = (button) => {
  switch (button) {
    case 1:
      color1.value = "#ffffff";
      color2.value = "#00000000";
      color3.value = "#00000000";
      break;
    case 2:
      color1.value = "#00000000";
      color2.value = "#ffffff";
      color3.value = "#00000000";
      break;
    case 3:
      color1.value = "#00000000";
      color2.value = "#00000000";
      color3.value = "#ffffff";
      break;
    default:
      pass:
      break;
  }
    if (likeColor.value == '#a7a7a7') {
        likeColor.value='#dc487f';
        
    } else {
        likeColor.value='#a7a7a7'
    }
}
</script>
<styled>
    
</styled>
  
<style scoped>
#HD{
  display: grid;
  position: relative;
  margin: auto;
  width: 100%;
  height: 50%;
  background-color: #eace7e;
  border-radius: 0px 0px 15px 15px;
  grid-template-columns: 33% 33% 34%;
  align-items: center;
  text-align: center;
  clip-path: margin-box;
}
#hdp{
  margin: auto;
  position: relative;
  max-height: 40vh; /* El máximo siempre será igual o más pequeño que el 40% del alto de la ventana */
  max-width: 59%;
}
.main{
  margin: auto;
  position:relative;
  width: 98vw;
  /* height: 84vh; */
  /* background-color:rgb(73, 73, 73); */
  border-radius: 0px 0px 15px 15px;
  /* overflow-y:scroll; */
}
.buttons{
  width: 60%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding-top: 2vh;
}
.button{
  display: inline-block;
  width: auto;
  cursor: pointer;
  text-align: center;
  border: solid 1px white;
  border-radius: 50px;
  padding: 1px;
}
.iconButton{
  background-color: #eace7e;
  border-radius: 15px;
  float: left;
}
.txt{
  color: black;
  float: left;
  padding-left: 3px;
  padding-top: 5px;
  padding-right: 10px;
}

  </style>