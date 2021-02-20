import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";

import MenuComponent from "../components/MenuComponent.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		name: "main",
		path: "",
		redirect: (to: Route): string => `/home`,
	},
	{
		path: "/:game",
		redirect: (to: Route): string => `/${to.params.game || "home"}/home`,
	},
	{
		path: "/:game/:page",
		component: MenuComponent,
	},
];

const router = new VueRouter({
  routes,
});

export default router;
