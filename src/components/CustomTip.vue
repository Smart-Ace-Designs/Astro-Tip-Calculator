<script setup lang="ts">
const modelValue = defineModel<string>();
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    placeholder="Custom"
    id="custom"
    class="bg-theme-very-light-grayish-cyan text-theme-very-dark-cyan placeholder:text-theme-dark-grayish-cyan focus:bg-theme-very-light-grayish-cyan focus:outline-theme-strong-cyan caret-theme-strong-cyan rounded p-2 text-center text-2xl hover:cursor-pointer focus:text-right focus:placeholder:opacity-0"
  />
</template>
