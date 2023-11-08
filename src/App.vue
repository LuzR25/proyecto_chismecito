<template>
  <span>Prueba</span>
  <div id="app">
    <input_personalizable id="email" type="email" hint="Correo electrónico" :variablePadre="email" @update:variablePadre="email = $event" />
    <input_personalizable id="password" type="password" hint="Contraseña" :variablePadre="password" @update:variablePadre="password = $event" />
    <button @click="submit">Enviar</button>
  </div>
</template>

<script setup>
import input_personalizable from './components/input_personalizable.vue';

let email = '';
let password = '';

const submit = () => {
  console.log(`Correo electrónico: ${email}, Contraseña: ${password}`);
};

</script>

<style>
body {
  background-color: #82C3C7;
}
</style>
