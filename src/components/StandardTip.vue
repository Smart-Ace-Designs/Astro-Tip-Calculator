<script setup lang="ts">
const modelValue = defineModel<string>();
defineEmits(["clear-custom-tip"]);
defineProps<{
  tip: string;
}>();
</script>

<template>
  <input
    v-model="modelValue"
    @change="$emit('clear-custom-tip')"
    type="radio"
    :id="`t-${tip}`"
    name="tip"
    :value="tip"
    class="hidden"
  />
  <label
    :for="`t-${tip}`"
    class="bg-theme-very-dark-cyan text-theme-white hover:bg-theme-strong-cyan hover:text-theme-very-dark-cyan rounded p-2 text-center text-2xl hover:cursor-pointer"
    >{{ tip }}%</label
  >
</template>
