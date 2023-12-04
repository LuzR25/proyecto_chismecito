<template>
    <div id="headHolder"></div>
    <div class="header">
      <div class="WrapperMain">
        <p class="titleChism">Chismesito.com</p>
        <div class="subWrapper">

          <div id="raya">
            
          </div>

          <router-link :to="{ name: 'chismes' }">
            <p style="text-align: right;">Inicio</p>
          </router-link>

          <router-link :to="{ name: 'acercaDe' }">
            <p>Acerca de</p>
          </router-link>

          <router-link :to="{ name: 'infoCuenta', params: { idUsuario: idUsuarioIS }}">
            <p style="text-align: left;">Cuenta</p>
          </router-link>

          <a href="">
            <p style="text-align: left;"  @click="cerrarSesion" >Cerrar sesión</p>
          </a>
        </div>
        
      </div>
    </div>
    <!--<div><input type="text" :multiple="false" v-model="props.tituloNota" placeholder="Título"></div>
    <div><input type="text" :multiple="true" v-model="props.tituloNota" placeholder="Contenido"></div>
    <div><button @click="this.$emit('guardarNota')">Guardar Nota</button></div>-->
</template>
  
<script setup>
import { router } from "../router";

function cerrarSesion() {
  // Borrar datos de sesión
  localStorage.setItem("idUsuario", -1);
  localStorage.setItem("sesionIniciada", false);
  router.replace({ name: 'chismes' }); //Debería borrar el historial de lo que hay
}

let idUsuarioIS = localStorage.getItem("idUsuario");
  
</script>
<styled>
    
</styled>
  
<style scoped>
.header{
  margin: auto;
  position: relative;
  width: 98vw;
  height: 12vh;
  background-color: black;
  border-radius: 15px 15px 0px 0px;
}


  .WrapperMain {
    /* position: absolute; */
    padding: 0%;
    display: grid;
    
    top: 0%;
    right: 0%;
    width: 100%;
    height: 100%;
    grid-template-columns: 30% 70%;
    align-items: center;
    text-align: center;
  }

  .subWrapper{
    position: relative;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 18% 18% 28% 18% 18%;
    align-items: center;
    text-align: center;
    font-size: 1.5vw;
  }

  .titleChism{
    position: relative;
    width: 100%;
    height: fit-content;
    font-size: 4.3vw;
    color: white;

  }
  a:link, a:visited{
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover{
    
    background-color: transparent;
    text-decoration: underline;
  }
  a:active{
    color: #fa500f;
  }
  #raya{
    height: 100%;
    /* background-image: url('../assets/vector.png');
    background-position: 50% -50%;
    background-repeat: no-repeat;
    background-size: 10vw; */
  }
  #headHolder{
  width: 100vw;
  height: 2vh;
}
  </style>