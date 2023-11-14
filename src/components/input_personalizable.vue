<template>
  <div>
    <!-- 
        + :value="variablePadre" es el parametro que se pasa a traves del padre. En este se caso el padre va a pasar una variable en la cual se guardara el dato que el usuario escribe en el campo de entrada.
        + @input esta accion se realiza cuando el usuario escribe en el campo de entrada y cuando sucede esto se ejecuta la función "updateValue".
    -->
    <input v-if="type !== 'select' && type !== 'date'" :id="id" class="inputDatos" :type="type" :placeholder="hint"
      :value="variablePadre" @input="updateValue" />
    <!-- input de tipo date (fecha) -->
    <input v-else-if="type === 'date'" :id="id" class="inputDatos" :type="fechaEnTipo" :placeholder="hint"
      :value="variablePadre" @focus="cambiarFechaADate" @input="updateValue" />
    <!-- input de tipo select (seleccion) -->
    <select v-else :id="id" class="inputDatos" :value="variablePadre" @change="updateValue">
      <option value="" disabled selected>{{ hint }}</option>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="noBinario">No Binario</option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

// Parametros
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    required: true
  },
  variablePadre: {
    type: null, //acepta cualquier tipo de dato
    required: true
  }
})

const emit = defineEmits(['update:variablePadre'])

/*
updateValue: emite un evento al componente padre cada vez que el valor del input cambia, y luego manejar ese evento en el componente padre para actualizar el valor de la propiedad. 
*/
const updateValue = (event) => {
  /* 
  + El'update' significa que actualiza el valor de la variable padre cuando cambia el valor de este componente.
  + $event.target.value es el valor que se está pasando con el evento. $event es el evento DOM original, y target.value obtiene el valor actual del elemento input. 
  */
  emit('update:variablePadre', event.target.value)
}

// constantes para hacer que el input de fecha muestre un placeholder
let fechaEnTipo = ref('text')

/* Al inicializarse el input de la fecha esta en tipo techo, pero una vez que se da clic sobre el input de fecha esta funcion la cambiara a tipo date */
const cambiarFechaADate = () => {
  fechaEnTipo.value = 'date';
}

</script>

<style scoped>
input,
select {
  margin-top: 5%;
}
</style>