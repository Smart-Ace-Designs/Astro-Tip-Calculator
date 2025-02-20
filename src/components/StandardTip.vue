<script setup lang="ts">
defineProps<{
  tip: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:model-value", "clear-custom-tip"]);
const updateValue = (event: Event) => {
  emit("update:model-value", (event.target as HTMLInputElement).value);
  emit("clear-custom-tip");
};
</script>

<template>
  <input
    @change="updateValue"
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
