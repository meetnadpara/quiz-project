import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import prize from "../components/prize.vue";
import question from "../components/question.vue";
import lastquestion from "../components/lastquestion.vue";
import congratulation from "../components/congratulation.vue";
import leaderboard from "../components/leaderboard.vue";
import history from "../components/history.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },  
  {
    path: "/prize",
    name: "prize",
    component: prize,
  },
   {
    path: "/question",
    name: "question",
    component: question,
  },
  {
    path: "/lastquestion",
    name: "lastquestion",
    component: lastquestion,
  },
   {
    path: "/congratulation",
    name: "congratulation",
    component: congratulation,
  },
   {
    path: "/leaderboard",
    name: "leaderboard",
    component: leaderboard,
  },
  {
    path: "/history",
    name: "history",
    component: history,
  },
  
  
  


];

const router = new VueRouter({
  routes,
});

export default router;
