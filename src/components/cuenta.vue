<template>
    <router-link :to="{ name: 'infoCuenta'/* , params: { usuario: 'luciernaga' } */}">
        <button>Información de cuenta</button>
    </router-link>
    <router-link :to="{ name: 'cochinada' }">
        <button>Chismecitos publicados</button>
    </router-link>
    <!-- Luego hacemos que jale el que viene desde el login -->
    <router-link :to="{ name: 'infoCuenta'/* , params: { usuario: 'luciernaga' } */}"> 
        <button>Chismecitos guardados</button>
    </router-link>
    <router-link :to="{ name: 'cochinada' }">
        <button>Escribir chismecito</button>
    </router-link>

    <router-view></router-view>
</template>

<script setup>

</script>