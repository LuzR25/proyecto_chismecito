<template>
  <!-- <formulario_login></formulario_login>
  <formulario_singup></formulario_singup>
  <informacion_cuenta :fecha-nacimiento="fechaNacimiento" :genero="genero" :usuario="usuario" :password="password" @actualizar-datos="manejarDatos"></informacion_cuenta> -->
  <input_escribir_chisme @guardar-chismecito="recibirChismecito"></input_escribir_chisme>
</template>

<script setup>
import formulario_login from './components/formulario_login.vue';
import formulario_singup from './components/formulario_singup.vue';
import informacion_cuenta from './components/informacion_cuenta.vue';
import input_escribir_chisme from './components/input_escribir_chisme.vue';

import { ref } from 'vue';

//PARA PRUEBA COMPONENTE: información_cuenta
let fechaNacimiento = ref('2001-05-03');
let genero = ref('masculino');
let usuario = ref('Ibis');
let password = ref('Ibis123');

/* 
Accion: Cuan se apreta el boton "modificar cuenta" se realiza esta funcion.
Funcionamiento: El emit del componente informacion_cuenta envia los datos y cuando sucede esto se ejecuta la funcion manejarDatos que usa esos datos del emit.
Refactorizar: Se tiene que modificar esta función para que desde aquí se cambie los valores en la base de datos (o en donde se esten guardando los datos).
IMPORTANTE: NO BORRAR ESTO
*/
const manejarDatos = ({ nuevaFechaNacimiento, nuevoGenero, nuevoUsuario, nuevoPassword }) => {
  fechaNacimiento.value = nuevaFechaNacimiento;
  genero.value = nuevoGenero;
  usuario.value = nuevoUsuario;
  password.value = nuevoPassword;
  console.log(`FECHA nueva: ${fechaNacimiento.value}, GENERO nuevo: ${genero.value}, USUARIO nuevo: ${usuario.value}, PASSWORD nuevo: ${password.value}`);
};
// FIN PRUEBA COMPONENTE: información_cuenta

//PARA PRUEBA COMPONENTE: información_cuenta
let chismecito = ref('');
const recibirChismecito = ({ elChismecito }) => {
  chismecito.value = elChismecito;
  console.log(`CHISMECITO: ${chismecito.value}`);
}
// FIN PRUEBA COMPONENTE: información_cuenta
</script>

<style scoped></style>