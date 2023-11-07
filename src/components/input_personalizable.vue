<template>
    <div>
      <!-- 
        + v-model='modelValue' es el parametro que se pasa a traves del padre. En este se caso el padre va a pasar una variable en la cual se guardara el dato que el usuario escribe en el campo de entrada.
        + @input esta accion se realiza cuando el usuario escribe en el campo de entrada. Lo que hace es hacer el emit que en este caso usa 'update' y esto significa que actualiza el valor de la variable padre cuando cambia el valor de este componente.
        + $event.target.value es el valor que se está pasando con el evento. $event es el evento DOM original, y target.value obtiene el valor actual del elemento input.
       -->
      <input :id="id" :type="type" :placeholder="hint" v-model="variablePadre" @input="emit('update:variablePadre', $event.target.value)" />
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs, defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['id', 'type', 'hint', 'variablePadre'])
  
  const { id, type, hint, variablePadre } = toRefs(props);
  
  const emit = defineEmits(['update:variablePadre'])
  </script>
  
  <style scoped>
  /* Aquí puedes agregar tu CSS personalizado */
  input {
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding-left: 2%;
    height: 10vh;
    width: 50vw;
  }
  </style>
  