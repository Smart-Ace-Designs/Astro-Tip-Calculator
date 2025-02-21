<script setup lang="ts">
import { computed, ref } from "vue";

import StandardTip from "./StandardTip.vue";
import CustomTip from "./CustomTip.vue";

const standardTip = ref<string>("15");
const customTip = ref<string>("");
const activeTip = ref<string>("15");
const standardTipsTypes = ["5", "10", "15", "25", "50"];

const clearCustomTip = () => {
  customTip.value = "";
};

const updateActiveTip = (tip: string) => {
  activeTip.value = tip;
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
        :is-active="activeTip === type"
        v-model="standardTip"
        @clear-custom-tip="clearCustomTip"
        @update-active-tip="updateActiveTip"
      />
      <CustomTip v-model="customTip" />
    </div>
  </div>
</template>
