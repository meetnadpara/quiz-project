import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniCarWash, uniRupeeSign,uniCaretRight,uniArrowLeft,uniGraphBar,uniCircle  } from 'vue-unicons/dist/icons'
// import { UilRupeeSign } from '@iconscout/vue-unicons'
import Tabs from "vue-material-tabs";

Vue.use(Tabs);
Unicon.add([uniCarWash, uniRupeeSign, uniCaretRight,uniArrowLeft,uniGraphBar,uniCircle  ])
Vue.use(Unicon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
