<template>
  <div>
    <input :id="id" :type="type" :placeholder="hint" :value="variablePadre" @input="updateValue" />
  </div>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmits } from 'vue';

const props = defineProps(['id', 'type', 'hint', 'variablePadre'])

const { id, type, hint, variablePadre } = toRefs(props);

const emit = defineEmits(['update:variablePadre'])

const updateValue = (event) => {
  emit('update:variablePadre', event.target.value)
}
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
