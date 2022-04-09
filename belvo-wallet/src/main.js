import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

const $http = axios.create({
  baseURL: "https://belvo-wallet-challenge-api.herokuapp.com",
});

router.store = store;

let appContext = createApp(App).use(store).use(router);
appContext.config.globalProperties.$http = $http;
appContext.mount("#app");
