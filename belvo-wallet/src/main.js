import { createApp } from "vue";
import axios from "axios";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const $http = axios.create({
  baseURL: "https://belvo-wallet-challenge-api.herokuapp.com",
});

router.store = store;

let appContext = createApp(App).use(store).use(router);
appContext.config.globalProperties.$http = $http;
appContext.mount("#app");
