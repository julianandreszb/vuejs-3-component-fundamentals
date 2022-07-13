import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
  .component("click-counter", {
    template: '<button @click="counter++"  >{{ counter }}</button>',
    data() {
      return {
        counter: 0,
      };
    },
  })
  .mount("#app");
