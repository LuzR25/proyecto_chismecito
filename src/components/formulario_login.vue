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
import { existeUsario } from "../datos_controller";
import { router } from '../router'

let nombreUsuario = '';
let password = '';

/* function submit() {
  console.log(`Usuario: ${nombreUsuario}, Contraseña: ${password}`);
  router.push({ name: 'infoCuenta' })
  //router.push({ name: 'cuenta', params: { usuario: nombreUsuario } })
} */

function submit() {
  console.log(`Usuario: ${nombreUsuario}, Contraseña: ${password}`);
  let existe = existeUsario(nombreUsuario, password);
  console.log(`Resultado: ${existe}`);

  if (existe == -1) {
    console.log(`La contraseña es incorrecta o el usuario no existe`);
  } else {
    //! Debo preparar a este componente para recibir el id usuario
    router.push({ name: 'infoCuenta', params: {idUsuario: existe} });
  }
}
</script>
  
<style></style>