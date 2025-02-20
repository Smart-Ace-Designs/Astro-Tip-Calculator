<script setup lang="ts">
import { computed, ref } from "vue";

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
        tip="5"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
      <StandardTip
        tip="10"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
      <StandardTip
        tip="15"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
      <StandardTip
        tip="25"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
      <StandardTip
        tip="50"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
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
