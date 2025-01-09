import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import SendMoney from './components/SendMoney.vue';
import ReceiveMoney from './components/RecieveMoney.vue';
import MyProfile from './components/MyProfile.vue';
import Banking from './components/Banking.vue';


// Define routes
const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/send-money', component: SendMoney },
  { path: '/receive-money', component: ReceiveMoney },
  { path: '/profile', component: MyProfile },
  { path: '/banking', component: Banking },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create and mount the app
createApp(App)
  .use(router)
  .mount('#app');
