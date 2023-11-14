<template>
  <div class="formularios">
    <span class="spanFormulario">INICIAR SESIÓN</span>
    <input_personalizable id="nombreUsuario" class="input" type="text" hint="Nombre de usuario" :variablePadre="nombreUsuario"
      @update:variablePadre="nombreUsuario = $event" />
    <input_personalizable id="password" class="input" type="password" hint="Contraseña" :variablePadre="password"
      @update:variablePadre="password = $event" />
    <boton_personalizable texto="INGRESAR" color="#EBCE7D" :accion="submit" />
  </div>
</template>
  
<script setup>
import input_personalizable from './input_personalizable.vue';
import boton_personalizable from './boton_personalizable.vue';

let nombreUsuario = '';
let password = '';

const submit = () => {
  console.log(`Usuario: ${nombreUsuario}, Contraseña: ${password}`);
};
</script>
  
<style></style>