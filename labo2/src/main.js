import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fontawsome/css/all.min.css";
import "./assets/custom.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
