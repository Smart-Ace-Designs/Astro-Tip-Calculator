<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";

const standardTip = ref<number>(0);
const customTip = ref<string>("");

const clearCustomTip = () => {
  customTip.value = "";
};

const tip = computed(() => {
  return customTip.value !== "" ? parseInt(customTip.value) : standardTip.value;
});
</script>

<template>
  <div class="mb-6 flex flex-col">
    <p class="text-theme-dark-grayish-cyan mb-4">Select Tip %</p>
    <div class="grid grid-cols-3 gap-4" id="tip-selector">
      <input
        @click="clearCustomTip"
        type="radio"
        id="t-5"
        name="tip"
        value="5"
        class="hidden"
        v-model="standardTip"
      />
      <label
        for="t-5"
        class="bg-theme-very-dark-cyan text-theme-white rounded p-2 text-center text-2xl hover:cursor-pointer"
        >5%</label
      >
      <input
        type="radio"
        id="t-10"
        name="tip"
        value="10"
        class="hidden"
        v-model="standardTip"
      />
      <label
        for="t-10"
        class="bg-theme-very-dark-cyan text-theme-white rounded p-2 text-center text-2xl hover:cursor-pointer"
        >10%</label
      >
      <input
        type="radio"
        id="t-15"
        name="tip"
        value="15"
        class="hidden"
        v-model="standardTip"
      />
      <label
        for="t-15"
        class="bg-theme-very-dark-cyan text-theme-white rounded p-2 text-center text-2xl hover:cursor-pointer"
        >15%</label
      >
      <input
        type="radio"
        id="t-25"
        name="tip"
        value="25"
        class="hidden"
        v-model="standardTip"
      />
      <label
        for="t-25"
        class="bg-theme-very-dark-cyan text-theme-white rounded p-2 text-center text-2xl hover:cursor-pointer"
        >25%</label
      >
      <input
        type="radio"
        id="t-50"
        name="tip"
        value="50"
        class="hidden"
        v-model="standardTip"
      />
      <label
        for="t-50"
        class="bg-theme-very-dark-cyan text-theme-white rounded p-2 text-center text-2xl hover:cursor-pointer"
        >50%</label
      >
      <input
        type="text"
        placeholder="Custom"
        id="custom"
        class="bg-theme-very-light-grayish-cyan text-theme-very-dark-cyan placeholder:text-theme-dark-grayish-cyan focus:bg-theme-very-light-grayish-cyan rounded p-2 text-center text-2xl hover:cursor-pointer focus:text-right focus:placeholder:opacity-0"
        v-model="customTip"
      />
    </div>
  </div>
</template>
