<script setup lang="ts">
const emit = defineEmits(["clear-custom-tip", "update-tip"]);
const model = defineModel<string>();
const props = defineProps<{
  tip: string;
  isActive: boolean;
}>();

const handleClick = () => {
  emit("clear-custom-tip");
  emit("update-tip", props.tip);
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
        ? 'bg-theme-strong-cyan text-theme-very-dark-cyan'
        : 'bg-theme-very-dark-cyan text-theme-white',
    ]"
    >{{ tip }}%</label
  >
</template>
