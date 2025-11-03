<script setup lang="ts">
import { tip } from "@/stores/store";
import { ref } from "vue";

const emit = defineEmits(["clear-standard-tip", "test-custom-tip"]);
const model = defineModel<string>();

const invalidCustomTip = ref<boolean>(false);

const updateTip = (event: Event): void => {
  const value = Number((event.target as HTMLInputElement).value);
  if (Number.isInteger(value) && value > 0 && value <= 100) {
    tip.set(value.toString());
    invalidCustomTip.value = false;
  } else {
    tip.set("");
    invalidCustomTip.value = true;
  }
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
    maxlength="3"
    class="rounded-md bg-theme-very-light-grayish-cyan px-2 py-1 text-center text-[25px] text-theme-very-dark-cyan caret-theme-strong-cyan placeholder:text-theme-dark-grayish-cyan hover:cursor-pointer focus:bg-theme-very-light-grayish-cyan focus:text-right focus:outline-theme-strong-cyan focus:placeholder:opacity-0"
    :class="{ '!text-orange-400': invalidCustomTip }"
  />
</template>
