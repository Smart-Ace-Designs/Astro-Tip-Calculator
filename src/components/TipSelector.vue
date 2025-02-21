<script setup lang="ts">
import { computed, ref } from "vue";

import StandardTip from "./StandardTip.vue";
import CustomTip from "./CustomTip.vue";

const standardTip = ref<string>("15");
const customTip = ref<string>("");
const standardTipsTypes = ["5", "10", "15", "25", "50"];

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
        v-for="type in standardTipsTypes"
        :key="type"
        :tip="type"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
      />
      <CustomTip v-model="customTip" />
    </div>
  </div>
</template>
