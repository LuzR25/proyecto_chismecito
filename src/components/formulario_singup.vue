<template>
    <div class="formularios">
        <span class="spanFormulario"> CREA TU CUENTA </span>
        <input_personalizable id="fechaNacimiento" type="date" hint="Fecha de nacimiento"
            @update:variablePadre="fechaNacimiento = $event"></input_personalizable>
        <input_personalizable id="genero" type="select" hint="Género" :variablePadre="genero"
            @update:variablePadre="genero = $event"></input_personalizable>
        <input_personalizable id="nombreUsuario" type="text" hint="Nombre de usuario" :variablePadre="nombreUsuario"
            @update:variablePadre="nombreUsuario = $event"></input_personalizable>
        <input_personalizable id="password" type="password" hint="Contraseña" :variablePadre="password"
            @update:variablePadre="password = $event"></input_personalizable>
        <input_personalizable id="confirmacionPassword" type="password" hint="Confirmar contraseña"
            :variablePadre="confirmacionPassword" @update:variablePadre="confirmacionPassword = $event">
        </input_personalizable>
        <boton_personalizable texto="CREAR CUENTA" color="#EBCE7D" :accion="submit"></boton_personalizable>
    </div>
</template>

<script setup>
import input_personalizable from './input_personalizable.vue';
import boton_personalizable from './boton_personalizable.vue';

let fechaNacimiento;
let genero = "";
let nombreUsuario = "";
let password = "";
let confirmacionPassword = "";

const submit = () => {
    console.log(`Fecha nacimiento: ${fechaNacimiento}, Genero: ${genero}, Usuario: ${nombreUsuario}, Contraseña: ${password}, Confirmación contraseña: ${confirmacionPassword}`);
};

</script>

<style scoped></style>