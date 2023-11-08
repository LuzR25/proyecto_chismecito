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
    margin-top: 5%;
    font-family: 'Abel', sans-serif;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 50px;
    height: 7vh;
    width: 25vw;
  }
  </style>
  