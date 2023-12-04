<template>
    <div v-if="sesionIniciada === 'true'">
        <header4></header4>
    </div>
    <div v-else>
        <header3></header3>
    </div>
    <router-view></router-view>
</template>

<script setup>
import header3 from './header3.vue';
import header4 from './header4.vue';

let sesionIniciada = localStorage.getItem("sesionIniciada");
console.log(`Sesión iniciada: ${sesionIniciada}`);
</script>