import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import NotFound from "./components/Reuseable/NotFound.vue";
import TheBest from "./components/Reuseable/TheBest.vue";
import TheShop from "./components/Reuseable/TheShop.vue";
import HomePage from "./components/Home/HomePage.vue";
import HeadPhones from "./components/Home/HeadPhones.vue";
import TheSpeakers from "./components/Home/TheSpeakers.vue";
import EarPhones from "./components/Home/EarPhones.vue";
import CheckOut from "./components/Reuseable/CheckOut.vue";

import HeadPhoneD1 from "./components/Home/ProductDetails/HeadPhoneD1.vue";
import TheSpeakerD1 from "./components/Home/ProductDetails/TheSpeakerD1.vue";
import EarPhonesD1 from "./components/Home/ProductDetails/EarPhonesD1.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/homepage" },
    { path: "/homepage", component: HomePage },
    { path: "/headphones", component: HeadPhones },
    { path: "/speakers", component: TheSpeakers },
    { path: "/earphones", component: EarPhones },
    { path: "/checkout", component: CheckOut },

    { path: "/headphones/:phoneId", component: HeadPhoneD1 },
    { path: "/speakers/:speakerId", component: TheSpeakerD1 },
    { path: "/earphones/:earphoneId", component: EarPhonesD1 },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(_, _2, savedposition) {
    // console.log(to, from, savedposition);
    if (savedposition) {
      return savedposition;
    }
    return { left: 0, top: 0 };
  },
});
app.use(router);
app.mount("#app");
app.component("the-shop", TheShop);
app.component("the-best", TheBest);
