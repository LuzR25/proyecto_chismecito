<template>
    <div id="componenteVerInf">
        <!-- INPUT FECHA DE NACIMIENTO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="">Fecha de nacimiento</label>
            <!-- class="inputDatos" para agregar el diseño global para los inputs de entrada del sitio web -->
            <input class="inputDatos" type="date" v-model="localFechaNacimiento">
        </div>
        <!-- INPUT GENERO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="select">Género</label>
            <!-- Se mostrará el select -->
            <select id="select" class="inputDatos" v-model="localGenero">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="noBinario">No Binario</option>
            </select>
        </div>
        <!-- INPUT USUARIO -->
        <div class="contenedorInf">
            <label class="labelPrincipal" for="">Usuario</label>
            <input class="inputDatos" type="text" v-model="localUsuario">
        </div>
        <!-- INPUT PASSWORD -->
        <div id="ultimoContenedorInf" class="contenedorInf">
            <label class="labelPrincipal" for="">Contraseña</label>
            <input class="inputDatos" :type="mostrarPassword ? 'text' : 'password'" v-model="localPassword">
            <div id="divMostrarPassword">
                <input type="checkbox" v-model="mostrarPassword">
                <label for="">Ver contraseña</label>
            </div>
        </div>
        <div id="botones">
            <boton_personalizable id="modificar" texto="MODIFICAR DATOS DE CUENTA" color="#EBCE7D" :accion="enviarDatos">
            </boton_personalizable>
            <boton_personalizable id="eliminar" texto="ELIMINAR CUENTA" color="#C61800"></boton_personalizable>
        </div>
    </div>
</template>

<script setup>
import boton_personalizable from './boton_personalizable.vue';
import { ref } from 'vue';
import { defineProps } from 'vue';
import { obtenerUsuario, modificarUsuario, eliminarUsuario } from "../datos_controller";

//const props=defineProps(['fechaNacimiento', 'genero', 'usuario', 'password']);

const props = defineProps({
  /* fechaNacimiento: {
    type: String,
    required: false
  },
  genero: {
    type: String,
    required: false
  },
  usuario: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  }, */
  idUsuario: {
    type: Number,
    required: true
  }
})
console.log(`Id recibido: ${props.idUsuario}`);
let usuario = obtenerUsuario(props.idUsuario);

console.log(`Usuario encontrado: ${usuario}`);


//passwordFunciona = ref(props.password);

let mostrarPassword = ref(false);

// Create local data properties
/* let localFechaNacimiento = ref(props.fechaNacimiento);
let localGenero = ref(props.genero);
let localUsuario = ref(props.usuario);
let localPassword = ref(props.password); */

let localFechaNacimiento = usuario.fechaNacimiento; //'2002-11-25';
let localGenero = usuario.genero; //'femenino';
let localUsuario = usuario.nomUsuario; //'luciernaga';
let localPassword = usuario.password; //'luna';

const emit = defineEmits(['actualizar-datos']);

const enviarDatos = () => {
  emit('actualizar-datos', {
    nuevaFechaNacimiento: localFechaNacimiento.value,
    nuevoGenero: localGenero.value,
    nuevoUsuario: localUsuario.value,
    nuevoPassword: localPassword.value,
  });
};

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