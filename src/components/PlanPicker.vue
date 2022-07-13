<script setup>
import PlanItem from "./PlanItem.vue";
import { ref } from "vue";
const props = defineProps({
  plans: {
    type: Array,
    required: true,
    default: () => [],
  },
});
const selectedPlan = ref(null);
const selectPlan = (planName) => {
  selectedPlan.value = planName;
  console.log("selectPlan invoked", planName);
};
</script>

<template>
  <div class="plans">
    <plan-item
      v-on:select="selectPlan"
      v-for="plan in props.plans"
      :name="plan"
      :key="plan"
      :selected="selectedPlan === plan"
    ></plan-item>
  </div>
</template>

<style scoped></style>
