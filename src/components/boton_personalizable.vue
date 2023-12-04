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
  margin: 3% auto 0 auto;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 50px;
  width: 47.5%;
  padding: 1% 3%;
  cursor: pointer;
}
</style>
  