<script setup lang="ts">
import { ref } from "vue";
import { bill, party, customTip, standardTip, tip } from "@/stores/store";
import { useComputedStore } from "@/composables/useComputedStore";

import dollar from "../assets/icon-dollar.svg?url";
import person from "../assets/icon-person.svg?url";

import StandardTip from "./StandardTip.vue";
import CustomTip from "./CustomTip.vue";

const billValue = useComputedStore(bill);
const invalidBillSize = ref<boolean>(false);
const handleBillSizeChange = (): void => {
  invalidBillSize.value = !(billValue.value === "" || billValue.value > 0);
};

const partyValue = useComputedStore(party);
const invalidPartySize = ref<boolean>(false);
const handlePartySizeChange = (): void => {
  const number = Number(partyValue.value);
  invalidPartySize.value = !(partyValue.value === "" || (Number.isInteger(number) && number > 0));
};

const customTipValue = useComputedStore(customTip);
const clearCustomTip = (): void => {
  customTipValue.value = "";
};
const testCustomTip = (): void => {
  if (customTipValue.value === "") {
    standardTipValue.value = "";
    tip.set("");
  }
};

const standardTipsTypes = ["5", "10", "15", "25", "50"];
const standardTipValue = useComputedStore(standardTip);
const clearStandardTip = (): void => {
  standardTipValue.value = "";
};

const updateTip = (tipValue: string): void => {
  standardTipValue.value = tipValue;
  tip.set(tipValue);
};
</script>

<template>
  <form class="flex h-full flex-col justify-between p-12">
    <!-- Bill Amount -->
    <div class="relative mb-6 flex flex-col">
      <div class="flex justify-between">
        <label for="bill" class="text-theme-dark-grayish-cyan mb-2">Bill</label>
        <p v-if="invalidBillSize" class="mb-2 text-orange-400">Invalid input</p>
      </div>
      <input
        v-model="billValue"
        id="bill"
        type="text"
        name="bill"
        class="bg-theme-very-light-grayish-cyan placeholder:text-theme-dark-grayish-cyan/50 focus:outline-theme-strong-cyan caret-theme-strong-cyan py-2 pr-4 pl-10 text-right text-[25px] placeholder:mr-1 hover:cursor-pointer"
        maxlength="6"
        placeholder="0"
        @input="handleBillSizeChange"
      />
      <img :src="dollar" alt="Dolar sign" class="absolute top-12.5 left-4" />
    </div>

    <!-- Tip Selection -->
    <div class="mb-6 flex flex-col">
      <p class="text-theme-dark-grayish-cyan mb-4">Select Tip %</p>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3" id="tip-selector">
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
      <div class="flex justify-between">
        <label for="people" class="text-theme-dark-grayish-cyan mb-2">Number of People</label>
        <p v-if="invalidPartySize" class="mb-2 text-orange-400">Invalid input</p>
      </div>
      <input
        v-model="partyValue"
        id="people"
        type="text"
        name="people"
        class="bg-theme-very-light-grayish-cyan placeholder:text-theme-dark-grayish-cyan/50 focus:outline-theme-strong-cyan caret-theme-strong-cyan py-2 pr-4 pl-10 text-right text-[25px] placeholder:mr-1 hover:cursor-pointer"
        maxlength="3"
        placeholder="0"
        @input="handlePartySizeChange"
      />
      <img :src="person" alt="Dinner party" class="absolute top-12.5 left-4" />
    </div>
  </form>
</template>
