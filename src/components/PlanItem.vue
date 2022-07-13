<script setup>
import { defineProps } from "vue";
const emit = defineEmits(["select"]);
const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  selected: {
    required: true,
    type: Boolean,
    default: false,
  },
});
const select = () => {
  emit("select", props.name);
};
</script>

<template>
  <div @click="select" :class="{ 'active-plan': props.selected }">
    {{ props.name }}
  </div>
</template>

<style scoped>
.active-plan {
  background-color: coral;
  color: white;
}
</style>
