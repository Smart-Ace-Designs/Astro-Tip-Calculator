<script setup lang="ts">
import { tip } from "@/stores/store";

const emit = defineEmits(["clear-standard-tip", "test-custom-tip"]);
const model = defineModel<string>();

const updateTip = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  tip.set(value);
};
</script>

<template>
  <input
    v-model="model"
    @input="updateTip"
    @focus="$emit('clear-standard-tip')"
    @blur="$emit('test-custom-tip')"
    type="text"
    placeholder="Custom"
    id="custom"
    class="bg-theme-very-light-grayish-cyan text-theme-very-dark-cyan placeholder:text-theme-dark-grayish-cyan focus:bg-theme-very-light-grayish-cyan focus:outline-theme-strong-cyan caret-theme-strong-cyan rounded p-2 text-center text-2xl hover:cursor-pointer focus:text-right focus:placeholder:opacity-0"
  />
</template>
