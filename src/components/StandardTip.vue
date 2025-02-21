<script setup lang="ts">
import { ref } from "vue";

const model = defineModel<string>();
const emit = defineEmits(["clear-custom-tip", "update-active-tip"]);
const props = defineProps<{
  tip: string;
  isActive: boolean;
}>();

const handleClick = () => {
  emit("clear-custom-tip");
  emit("update-active-tip", props.tip);
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
