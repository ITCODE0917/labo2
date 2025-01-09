import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import BookDetails from "../views/BookDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/books", component: Books },
  { path: "/books/:id", component: BookDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
