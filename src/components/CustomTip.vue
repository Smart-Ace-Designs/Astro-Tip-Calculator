<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:model-value"]);
const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  },
);

const updateValue = (event: Event) => {
  emit("update:model-value", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    :value="inputValue"
    @input="updateValue"
    type="text"
    placeholder="Custom"
    id="custom"
    class="bg-theme-very-light-grayish-cyan text-theme-very-dark-cyan placeholder:text-theme-dark-grayish-cyan focus:bg-theme-very-light-grayish-cyan focus:outline-theme-strong-cyan caret-theme-strong-cyan rounded p-2 text-center text-2xl hover:cursor-pointer focus:text-right focus:placeholder:opacity-0"
  />
</template>
