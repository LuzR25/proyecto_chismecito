<template>
    <div id="contenedor">
        <div id="acciones">
            <label>Escribe tu chismecito:</label>
            <textarea class="inputDatos" v-model="chismecito"></textarea>
            <boton_personalizable id="boton" texto="CHISMEAR" color="#EBCE7D" :accion="enviarChismecito"></boton_personalizable>
        </div>
        <div id="advertencia">
            <!-- Poner aquí icono svg de advertencia -->
            <img src="src/assets/advertencia.png" alt="Icono de advertencia">
            <br>
            <label>Evita:</label>
            <li>Escribir nombres (o al menos no uses los reales).</li>
            <li>Compartir datos bancarios, ya sean tuyos o de alguien más.</li>
        </div>
    </div>
</template>

<script setup>
import boton_personalizable from './boton_personalizable.vue';
import { ref } from 'vue';

let chismecito = ref('');

const emit = defineEmits(['guardar-chismecito']);

const enviarChismecito = () => {
    emit('guardar-chismecito', {
        elChismecito: chismecito.value,
    });
}
</script>

<style scoped>
#contenedor {
    display: flex;
}

#acciones {
    display: grid;
    margin-right: 1%;
}

label {
    font-weight: bolder;
    margin-bottom: 1%;
}

textarea {
    margin: 0;
    width: 800px;
    height: 450px;
    padding: 1%;
}

#boton {
    margin: 0;
    margin-top: 2%;
    margin-left: 27%;
    width: 40%;
}

img {
    width: 130px;
    height: 150px;
    margin: 0;
}
</style>