<template>
    <button :style="{ backgroundColor: color }" @click="accion">
      {{ texto }}
    </button>
  </template>
  
  <script setup>
  
  const props = defineProps({
    texto: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    accion: {
      type: Function,
      required: true
    }
  })
  </script>
  
  <style scoped>
  button {
    border: 1px solid black;
    border-radius: 20px;
    padding: 1%;
    width: 40vw;
  }
  </style>
  