<template>
  <button @click="counter++">{{ counter }}</button>
</template>

<script>
export default {
  name: "ClickCounter",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style scoped></style>
