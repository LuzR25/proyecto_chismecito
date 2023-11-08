<template>
  <div>
    <!-- 
        + :value="variablePadre" es el parametro que se pasa a traves del padre. En este se caso el padre va a pasar una variable en la cual se guardara el dato que el usuario escribe en el campo de entrada.
        + @input esta accion se realiza cuando el usuario escribe en el campo de entrada y cuando sucede esto se ejecuta la función "updateValue".
    -->
    <input v-if="type !== 'select'" :id="id" :type="type" :placeholder="hint" :value="variablePadre" @input="updateValue" />
    <!-- Cuando el input sea de tipo 'select' -->
    <select v-else :id="id" :value="variablePadre" @change="updateValue">
      <option value="" disabled selected>{{ hint }}</option>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="lgtbiq+">LGTBIQ+</option>
    </select>
  </div>
</template>

<script setup>
import { toRefs, defineEmits } from 'vue';

// Parametros
const props = defineProps(['id', 'type', 'hint', 'variablePadre'])

const { id, type, hint, variablePadre } = toRefs(props);

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
</script>

<style scoped>

div {
  margin-top: 5%;
}
input, select {
  font-family: 'Abel', sans-serif;
  font-size: 20px;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 15px;
  padding-left: 5%;
  height: 8vh;
  width: 50vw;
}

</style>

<!-- <template>
  <div>
    <input :id="id" :type="type" :placeholder="hint" v-model="modelValue" @input="emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmits } from 'vue';

const props = defineProps(['id', 'type', 'hint', 'modelValue'])

const { id, type, hint, modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Aquí puedes agregar tu CSS personalizado */
</style> -->
