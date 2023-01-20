import { createApp } from "vue";
import App from "./App.vue";
import headerApp from "./assets/components/header/header.vue";
import MusclesApp from "./assets/components/Muscles/muscles.vue";
import footerApp from "./assets/components/footer/footer.vue";
createApp(App).mount("#App");
createApp(headerApp).mount("#headerApp");
createApp(MusclesApp).mount("#MusclesApp");
createApp(footerApp).mount("#footerApp");
