import Vue from "vue";
import App from "./App.vue";
import {init,requestPermission} from "@/firebaseFunction"
Vue.config.productionTip = false;


init();

//* NO need to create another service worker!
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('firebase-messaging-sw.js')
//     .then(function(registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function(err) {
//       console.log('Service worker registration failed, error:', err);
//     });
//   }

  

requestPermission();




new Vue({
  render: (h) => h(App),
}).$mount("#app");
