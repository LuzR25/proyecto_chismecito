<template>
    <div id="contenedor">
        <div id="acciones">
            <label>Escribe tu chismecito:</label>
            <textarea class="inputDatos" v-model="chismecito"></textarea>
            <boton_personalizable id="boton" texto="CHISMEAR" color="#EBCE7D" :accion="guardarChisme"></boton_personalizable>
        </div>
        <div id="advertencia">
            <!-- Poner aquí icono svg de advertencia -->
            <img  id="adver" src="../assets/advertencia.png" alt="Icono de advertencia">
            <br>
            <label>Evita:</label>
            <li>Escribir nombres (o al menos no uses los reales).</li>
            <li>Compartir datos bancarios, ya sean tuyos o de alguien más.</li>
        </div>
    </div>
</template>

<script setup>
import boton_personalizable from './boton_personalizable.vue';
import { crearChisme } from "../chismes_controller";
import { ref } from 'vue';

let chismecito = ref('');


function obtenerFechaActual() {
 
 const date = new Date();          
 const formatear = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
                   date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":"
                   + ("0" + date.getSeconds()).slice(-2);   
 // Mostramos la fecha y hora en la consola                                   
 console.log(formatear); 
 
 return formatear; 

}

function guardarChisme() {
    const chisme = {
        fechaPublicacion: obtenerFechaActual(),
        contenido: chismecito.value,
        idUsuario: localStorage.getItem('idUsuario')
    };

    crearChisme(chisme);
}

const emit = defineEmits(['guardar-chismecito']);

const enviarChismecito = () => {
    emit('guardar-chismecito', {
        elChismecito: chismecito.value,
    });
}
</script>

<style scoped>
#adver{
    left: 50%;
    position: relative;
    transform: translate(-50%, 0px);
}
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