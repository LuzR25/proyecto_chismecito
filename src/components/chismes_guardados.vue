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
import { obtenerChismesG } from "../chismes_guardados_controller";
import { reactive } from 'vue';


let listaChismesGuardados = reactive([]);
let listaIdChismesG = reactive([]);

listaIdChismesG = obtenerChismesG(localStorage.getItem("idUsuario"));

listaIdChismesG.forEach(chismeInfo => {
    listaChismesGuardados.push(obtenerChisme(chismeInfo.idChisme));
});



</script>