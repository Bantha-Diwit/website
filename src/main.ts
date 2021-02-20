import Vue, { VNode } from "vue";

import AppComponent from "./components/AppComponent.vue";
import router from "./router";

Vue.config.productionTip = false;

const app: Vue = new Vue({
	el: "#app",
	render: (h): VNode => h(AppComponent),
	router,
});

app;
