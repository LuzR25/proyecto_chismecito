<template>
    <div id="componenteVerInf">
        <!-- INPUT FECHA DE NACIMIENTO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="">Fecha de nacimiento</label>
            <!-- class="inputDatos" para agregar el diseño global para los inputs de entrada del sitio web -->
            <input class="inputDatos" type="date" v-model="props.fechaNacimiento">
        </div>
        <!-- INPUT GENERO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="select">Género</label>
            <!-- Se mostrará el select -->
            <select v-if="genero == 'masculino'" id="select" class="inputDatos">
                <option value="masculino" selected>Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="noBinario">No Binario</option>
            </select>
            <select v-else-if="genero == 'femenino'" id="select" class="inputDatos">
                <option value="masculino">Masculino</option>
                <option value="femenino" selected>Femenino</option>
                <option value="noBinario">No Binario</option>
            </select>
            <select v-else="genero == 'noBinario'" id="select" class="inputDatos">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="noBinario" selected>No Binario</option>
            </select>
        </div>
        <!-- INPUT USUARIO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="">Usuario</label>
            <input class="inputDatos" type="text" v-model="props.usuario">
        </div>
        <!-- INPUT PASSWORD -->
        <div id="ultimoContenedorInf" class="contenedorInf">
            <label class="labelPrincipal" for="">Contraseña</label>
            <input class="inputDatos" :type="mostrarPassword ? 'text' : 'password'" v-model="props.password">
            <div id="divMostrarPassword">
                <input type="checkbox" v-model="mostrarPassword">
                <label for="">Ver contraseña</label>
            </div>
        </div>
        <div id="botones">
            <boton_personalizable id="modificar" texto="MODIFICAR DATOS DE CUENTA" color="#EBCE7D" accion="">
            </boton_personalizable>
            <boton_personalizable id="eliminar" texto="ELIMINAR CUENTA" color="#C61800"></boton_personalizable>
        </div>
    </div>
</template>

<script setup>
import boton_personalizable from './boton_personalizable.vue';
import { ref } from 'vue';

 let mostrarPassword = ref(false);

 const props = defineProps({
  fechaNacimiento: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})
</script>

<style scoped>
#componenteVerInf {
    width: fit-content;
}

.contenedorInf {
    display: grid;
    margin-bottom: 2%;
}

#ultimoContenedorInf {
    margin-bottom: 0;
}

.labelPrincipal {
    font-weight: bolder;
}

.inputDatos {
    width: 60vw;
}

#divMostrarPassword {
    margin: 1% 1%;
    display: grid;
    grid-template-columns: 15% 85%;
    width: 20vw;
}

#modificar {
    margin-right: 2.5%;
}

#eliminar {
    margin-left: 2.5%;
}
</style>