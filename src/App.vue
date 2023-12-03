<template>
  <!-- <formulario_login></formulario_login>
  <formulario_singup></formulario_singup> -->
  <!-- <informacion_cuenta></informacion_cuenta> -->
  <informacion_cuenta></informacion_cuenta>
</template>

<script setup>
import informacion_cuenta from './components/informacion_cuenta.vue';
import { reactive } from 'vue';

let usuarios = reactive([{ id: 0, fechaNacimiento: '2002-11-25', genero: 'femenino', password: 'lucecita', nomUsuario: 'luz' },
  { id: 1, fechaNacimiento: '2002-03-14', genero: 'masculino', password: 'acuita', nomUsuario: 'acuablast' },
  { id: 2, fechaNacimiento: '2002-06-04', genero: 'femenino', password: 'mariposa', nomUsuario: 'mariposa' },
  { id: 3, fechaNacimiento: '2002-11-04', genero: 'femenino', password: 'cieloAzul', nomUsuario: 'cielo' },])

//! No tengo ni la más mínima idea de lo que hago
function modificarUsario(index, usuarioModificado) {
  usuarios[index] = usuarioModificado
}

function crearUsuario(usuario) {
  //* Eso de ahí puede generar usuarios con id repetido si alguno del medio se elimina y luego se añade otro
  listaNotas.push({id: usuarios.length, fechaNacimiento: usuario.fechaNacimiento, genero: usuario.genero, password: usuario.password, nomUsuario: usuario.nomUsuario})
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1)
}

function obtenerUsuario(index) {
  return usuarios.findIndex(index)
}

</script>

<style scoped></style>