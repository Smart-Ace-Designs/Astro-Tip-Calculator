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
    class="rounded px-3 py-1 text-center text-[25px] hover:cursor-pointer hover:bg-theme-light-grayish-cyan-hover hover:text-theme-very-dark-cyan"
    :class="[
      isActive
        ? 'bg-theme-strong-cyan text-theme-very-dark-cyan'
        : 'bg-theme-very-dark-cyan text-theme-white',
    ]"
    >{{ tip }}%</label
  >
</template>
