<script setup lang="ts">
import { ref } from "vue";
import dollar from "../assets/icon-dollar.svg?url";
import person from "../assets/icon-person.svg?url";
import TipSelector from "@/components/TipSelector.vue";

const bill = ref<string>("0");
const partySize = ref<string>("0");

const calculateTotalBill = (tipPercent: number) => {
  return parseInt(bill.value) * (tipPercent / 100) + parseInt(bill.value);
};
</script>

<template>
  <form class="flex h-full flex-col justify-between p-12">
    <div class="relative mb-6 flex flex-col">
      <label for="bill" class="text-theme-dark-grayish-cyan mb-2">Bill</label>
      <input
        v-model="bill"
        id="bill"
        type="text"
        name="bill"
        class="bg-theme-very-light-grayish-cyan placeholder:text-theme-dark-grayish-cyan/50 focus:outline-theme-strong-cyan caret-theme-strong-cyan py-2 pr-4 pl-10 text-right text-[25px] placeholder:mr-1"
        maxlength="6"
        placeholder="0"
      />
      <img :src="dollar" alt="Dolar sign" class="absolute top-12.5 left-4" />
    </div>
    <TipSelector client:load @update-tip="calculateTotalBill($event)" />
    <div class="relative mb-4 flex flex-col">
      <label for="people" class="text-theme-dark-grayish-cyan mb-2"
        >Number of People</label
      >
      <input
        v-model="partySize"
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
