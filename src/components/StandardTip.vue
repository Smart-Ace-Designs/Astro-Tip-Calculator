<script setup lang="ts">
import { ref } from "vue";

const model = defineModel<string>();
const emit = defineEmits(["clear-custom-tip"]);
defineProps<{
  tip: string;
}>();

const isActive = ref<boolean>(false);

const handleClick = () => {
  emit("clear-custom-tip");
  isActive.value = true;
};
</script>

<template>
  <input
    v-model="model"
    @change="handleClick"
    type="radio"
    :id="`t-${tip}`"
    name="tip"
    :value="tip"
    class="hidden"
  />
  <label
    :for="`t-${tip}`"
    class="hover:bg-theme-strong-cyan hover:text-theme-very-dark-cyan rounded p-2 text-center text-2xl hover:cursor-pointer"
    :class="[
      isActive
        ? 'bg-theme-strong-cyan/40 text-theme-very-dark-cyan'
        : 'bg-theme-very-dark-cyan text-theme-white',
    ]"
    >{{ tip }}%</label
  >
</template>
