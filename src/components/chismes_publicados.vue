<template>
    <div v-for="(item) in listaChismesCreados">
        <chismecard :fechaPublicacion="item.fechaPublicacion" :contenido="item.contenido">
        </chismecard>
    </div>
    </template>
    
    <script setup>
    import chismecard from './chisme_card_usuario.vue';
    import { obtenerChismesCreados } from "../chismes_controller.js";
    import { reactive } from 'vue';
    
    let listaChismesCreados = reactive([]);
    listaChismesCreados = obtenerChismesCreados(localStorage.getItem("idUsuario"));
    
    </script>