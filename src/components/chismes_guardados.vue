<template>
<div v-for="(item) in listaChismesGuardados">
    <chismecard :fechaPublicacion="item.fechaPublicacion" :contenido="item.contenido" 
        :genero="item.idUsuario" :edad="item.idUsuario">
    </chismecard>
</div>
</template>

<script setup>
import chismecard from './chismeCard.vue';
import { obtenerChisme } from "../chismes_controller.js";
import { reactive } from 'vue';

let listaChismesGuardados = reactive([]);
listaChismesGuardados = obtenerChisme(localStorage.getItem("idUsuario"));

</script>