<!-- <template>
  <boton_personalizable texto="INGRESAR" color="#EBCE7D" :accion="miFuncion" />
</template>

<script setup>
import boton_personalizable from './components/boton_personalizable.vue';

const miFuncion = () => {
  console.log('¡Botón presionado!')
}
</script> -->


<template>
  <span>Prueba</span>
  <div id="app">
    <input_personalizable id="email" type="email" hint="Correo electrónico" :variablePadre="email" @update:variablePadre="email = $event" />
    <input_personalizable id="password" type="password" hint="Contraseña" :variablePadre="password" @update:variablePadre="password = $event" />
    <boton_personalizable texto="INGRESAR" color="#EBCE7D" :accion="submit" />
  </div>
</template>

<script setup>
import input_personalizable from './components/input_personalizable.vue';
import boton_personalizable from './components/boton_personalizable.vue';

let email = '';
let password = '';

const submit = () => {
  console.log(`Correo electrónico: ${email}, Contraseña: ${password}`);
};

/* const miFuncion = () => {
  console.log('¡Botón presionado!');
};
 */
</script>

<style>
body {
  background-color: #82C3C7;
}
</style>
