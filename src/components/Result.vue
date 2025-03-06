<script setup lang="ts">
import { computed } from "vue";
import { bill, party, customTip, standardTip, tip } from "@/stores/store";
import { useComputedStore } from "@/composables/useComputedStore";

const billValue = useComputedStore(bill);
const partyValue = useComputedStore(party);
const tipValue = useComputedStore(tip);
const customTipValue = useComputedStore(customTip);
const standardTipValue = useComputedStore(standardTip);

const tipPerPerson = computed(() => {
  if (+partyValue.value > 0 && +billValue.value > 0 && tipValue.value !== "") {
    return ((+billValue.value * (+tipValue.value / 100)) / +partyValue.value).toFixed(2);
  }
  return "0.00";
});

const totalPerPerson = computed(() => {
  if (+partyValue.value > 0 && +billValue.value > 0 && tipValue.value !== "") {
    return (+billValue.value / +partyValue.value + +tipPerPerson.value).toFixed(2);
  }
  return "0.00";
});

const billCompleted = computed(() => {
  return billValue.value && partyValue.value && tipValue.value;
});

const resetBill = () => {
  billValue.value = "";
  tipValue.value = "";
  partyValue.value = "";
  standardTipValue.value = "";
  customTipValue.value = "";
};
</script>

<template>
  <div
    class="bg-theme-very-dark-cyan my-8 mr-10 flex flex-col space-y-10 rounded-2xl px-10 pt-12 pb-8"
  >
    <div class="flex justify-between">
      <div>
        <h2 class="text-theme-light-grayish-cyan">Tip Amount</h2>
        <p class="text-theme-grayish-cyan text-sm">/ person</p>
      </div>
      <p class="text-theme-strong-cyan text-5xl">${{ tipPerPerson }}</p>
    </div>
    <div class="flex justify-between">
      <div>
        <h2 class="text-theme-light-grayish-cyan">Total</h2>
        <p class="text-theme-grayish-cyan text-sm">/ person</p>
      </div>
      <p class="text-theme-strong-cyan text-5xl">${{ totalPerPerson }}</p>
    </div>
    <div class="mt-auto"></div>
    <button
      @click="resetBill"
      class="w-full rounded-md py-2.5 text-xl uppercase"
      :class="[
        billCompleted
          ? 'hover:bg-theme-light-grayish-cyan hover:text-theme-very-dark-cyan bg-theme-strong-cyan text-theme-very-dark-cyan'
          : 'bg-theme-bath-green text-theme-very-dark-cyan/30',
      ]"
    >
      Reset
    </button>
  </div>
</template>
