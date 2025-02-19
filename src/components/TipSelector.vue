<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";

import StandardTip from "./StandardTip.vue";

const standardTip = ref<string>("");
const customTip = ref<string>("");

const clearCustomTip = () => {
  customTip.value = "";
};

const tip = computed(() => {
  return customTip.value !== ""
    ? parseInt(customTip.value)
    : parseInt(standardTip.value);
});
</script>

<template>
  <div class="mb-6 flex flex-col">
    <p class="text-theme-dark-grayish-cyan mb-4">Select Tip %</p>
    <div class="grid grid-cols-3 gap-4" id="tip-selector">
      <StandardTip
        tipValue="5"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        >5%</StandardTip
      >
      <StandardTip
        tipValue="10"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        >10%</StandardTip
      >
      <StandardTip
        tipValue="15"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        >15%</StandardTip
      >
      <StandardTip
        tipValue="25"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        >25%</StandardTip
      >
      <StandardTip
        tipValue="50"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        >50%</StandardTip
      >
      <input
        type="text"
        placeholder="Custom"
        id="custom"
        class="bg-theme-very-light-grayish-cyan text-theme-very-dark-cyan placeholder:text-theme-dark-grayish-cyan focus:bg-theme-very-light-grayish-cyan focus:outline-theme-strong-cyan caret-theme-strong-cyan rounded p-2 text-center text-2xl hover:cursor-pointer focus:text-right focus:placeholder:opacity-0"
        v-model="customTip"
      />
    </div>
  </div>
</template>
