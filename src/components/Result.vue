<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@nanostores/vue";
import { bill, tip, party } from "@/stores/store";

const $bill = useStore(bill);
const $tip = useStore(tip);
const $party = useStore(party);

const tipPerPerson = ref<string>("0.00");
const totalPerPerson = ref<string>("0.00");

const resetBill = () => {
  if (+$party.value > 0 && +bill.value > 0) {
    tipPerPerson.value = ((+$bill.value * (+$tip.value / 100)) / +$party.value).toFixed(2);
    totalPerPerson.value = (+$bill.value / +$party.value + +tipPerPerson.value).toFixed(2);
  } else {
    tipPerPerson.value = "0.00";
    totalPerPerson.value = "0.00";
  }
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
      class="bg-theme-bath-green text-theme-very-dark-cyan/30 hover:bg-theme-light-grayish-cyan hover:text-theme-very-dark-cyan w-full rounded-md py-2.5 text-xl uppercase"
    >
      Reset
    </button>
  </div>
</template>
