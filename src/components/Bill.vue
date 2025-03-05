<script setup lang="ts">
import { bill, party, customTip, standardTip, tip } from "@/stores/store";
import { useComputedStore } from "@/composables/useComputedStore";

import dollar from "../assets/icon-dollar.svg?url";
import person from "../assets/icon-person.svg?url";

import StandardTip from "./StandardTip.vue";
import CustomTip from "./CustomTip.vue";

const standardTipsTypes = ["5", "10", "15", "25", "50"];

const billValue = useComputedStore(bill);
const partyValue = useComputedStore(party);
const customTipValue = useComputedStore(customTip);
const standardTipValue = useComputedStore(standardTip);

const clearCustomTip = () => {
  customTipValue.value = "";
};

const updateTip = (tipValue: string) => {
  standardTipValue.value = tipValue;
  tip.set(tipValue);
};

const clearStandardTip = () => {
  standardTipValue.value = "";
};

const testCustomTip = () => {
  if (customTipValue.value === "") {
    standardTipValue.value = "15";
    tip.set("15");
  }
};
</script>

<template>
  <form class="flex h-full flex-col justify-between p-12">
    <!-- Bill Amount -->
    <div class="relative mb-6 flex flex-col">
      <label for="bill" class="text-theme-dark-grayish-cyan mb-2">Bill</label>
      <input
        v-model="billValue"
        id="bill"
        type="text"
        name="bill"
        class="bg-theme-very-light-grayish-cyan placeholder:text-theme-dark-grayish-cyan/50 focus:outline-theme-strong-cyan caret-theme-strong-cyan py-2 pr-4 pl-10 text-right text-[25px] placeholder:mr-1"
        maxlength="6"
        placeholder="0"
      />
      <img :src="dollar" alt="Dolar sign" class="absolute top-12.5 left-4" />
    </div>

    <!-- Tip Selection -->
    <div class="mb-6 flex flex-col">
      <p class="text-theme-dark-grayish-cyan mb-4">Select Tip %</p>
      <div class="grid grid-cols-3 gap-4" id="tip-selector">
        <StandardTip
          v-for="type in standardTipsTypes"
          :key="type"
          :tip="type"
          :is-active="standardTipValue === type"
          v-model="standardTipValue"
          @clear-custom-tip="clearCustomTip"
          @update-tip="updateTip"
        />
        <CustomTip
          v-model="customTipValue"
          @clear-standard-tip="clearStandardTip"
          @test-custom-tip="testCustomTip"
        />
      </div>
    </div>

    <!-- Party Size -->
    <div class="relative mb-4 flex flex-col">
      <label for="people" class="text-theme-dark-grayish-cyan mb-2">Number of People</label>
      <input
        v-model="partyValue"
        id="people"
        type="text"
        name="people"
        class="bg-theme-very-light-grayish-cyan placeholder:text-theme-dark-grayish-cyan/50 focus:outline-theme-strong-cyan caret-theme-strong-cyan py-2 pr-4 pl-10 text-right text-[25px] placeholder:mr-1"
        maxlength="3"
        placeholder="0"
      />
      <img :src="person" alt="Dinner party" class="absolute top-12.5 left-4" />
    </div>
  </form>
</template>
