<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "@nanostores/vue";
import { bill, party, tip } from "@/stores/store";

import dollar from "../assets/icon-dollar.svg?url";
import person from "../assets/icon-person.svg?url";

import StandardTip from "./StandardTip.vue";
import CustomTip from "./CustomTip.vue";

const standardTipsTypes = ["5", "10", "15", "25", "50"];
const standardTip = ref<string>("15");
const activeTip = ref<string>("15");
const customTip = ref<string>("");

const $bill = useStore(bill);
const billValue = computed({
  get: () => $bill.value,
  set: (value) => bill.set(value),
});

const $party = useStore(party);
const partyValue = computed({
  get: () => $party.value,
  set: (value) => party.set(value),
});

const clearCustomTip = () => {
  customTip.value = "";
};

const updateActiveTip = (tipValue: string) => {
  activeTip.value = tipValue;
  tip.set(tipValue);
};

const clearStandardTip = () => {
  activeTip.value = "";
  standardTip.value = "";
};
</script>

<template>
  <form class="flex h-full flex-col justify-between p-12">
    <!-- Bill Cost -->
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
          :is-active="activeTip === type"
          v-model="standardTip"
          @clear-custom-tip="clearCustomTip"
          @update-active-tip="updateActiveTip"
        />
        <CustomTip v-model="customTip" @clear-standard-tip="clearStandardTip" />
      </div>
    </div>

    <!-- Party Size -->
    <div class="relative mb-4 flex flex-col">
      <label for="people" class="text-theme-dark-grayish-cyan mb-2"
        >Number of People</label
      >
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
