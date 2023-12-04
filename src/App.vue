<template>
  <!-- Puedo añadir el v-if aquí para ir decidiendo qué encabezado poner, sólo
  habría que editar los encabezados para que todos jalen las rutas. -->
  <!-- <div v-if="sesionIniciada == true">
    <header4></header4>
  </div>
  <div v-else>
    <header3></header3>
  </div> -->
  <router-view></router-view>
</template>

<script setup>
/* import header3 from './components/header3.vue';
import header4 from './components/header4.vue';

let sesionIniciada = localStorage.getItem("sesionIniciada"); */
</script>

<style scoped></style>