<script setup>
import ClickCounter from "./components/ClickCounter.vue";
import { ref } from "vue";
import PlanPicker from "./components/PlanPicker.vue";
import GithubUserProfile from "./components/GithubUserProfile.vue";
const plans = ref(["Plan #1", "Plan #2", "Another plan"]);
</script>

<template>
  <h1>Hello world!</h1>
  <click-counter></click-counter>
  <click-counter></click-counter>
  <plan-picker :plans="plans"></plan-picker>
  <github-user-profile username="julianandreszb"></github-user-profile>
</template>

<style>
@import "./assets/base.css";
</style>
