import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import useVuelidate from "@vuelidate/core";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2ljbGljYSIsImEiOiJja3l5ZTlvaTAwM2ZoMm9vMTE0NGI3ZW50In0.7GB251LSlZLmELIJ4nayVA";

createApp(App).use(router).use(useVuelidate).mount("#app");
