<template>
<div v-for="(item) in listaChismesGuardados">
    <chismecard :fechaPublicacion="item.fechaPublicacion" :contenido="item.contenido" 
        :genero="obtenerGenero(item.idUsuario)" :edad="item.idUsuario">
    </chismecard>
</div>
</template>

<script setup>
import chismecard from './chismeCard.vue';
import { obtenerChisme } from "../chismes_controller.js";
import { obtenerChismesG } from "../chismes_guardados_controller";
import { obtenerUsuario } from "../datos_controller";
import { reactive } from 'vue';


let listaChismesGuardados = reactive([]);
let listaIdChismesG = reactive([]);

listaIdChismesG = obtenerChismesG(localStorage.getItem("idUsuario"));

listaIdChismesG.forEach(chismeInfo => {
    listaChismesGuardados.push(obtenerChisme(chismeInfo.idChisme));
});

function obtenerGenero(idUsuario) {
    let usuario = obtenerUsuario(idUsuario);

    if (usuario.genero === 'masculino') {
        return 'Masculino';
    } else if (usuario.genero === 'femenino') {
        return 'Femenino';
    } else {
        return 'No binario';
    }
}



</script>