<template>
  <!-- Puedo añadir el v-if aquí para ir decidiendo qué encabezado poner, sólo
  habría que editar los encabezados para que todos jalen las rutas. -->
  <header3></header3>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
import header3 from './components/header3.vue';

let fechaNacimiento = ref("") /* = '2002-11-25' */;
let genero = ref("") /* = 'femenino' */;
let usuario = ref("") /* = 'Luz' */;
let password = ref("") /* = ref('lucecita') */; 


/* let tituloNota = ref("");
let contenidoNota = ref(""); */


/* function editarNota(index) {
  
}

function eliminarNota(index) {
  listaNotas.splice(index, 1)
} */


</script>

<style scoped></style>