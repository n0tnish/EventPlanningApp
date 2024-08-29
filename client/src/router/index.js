// client/src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreateEvent from '../components/CreateEvent.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/create-event', component: CreateEvent },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
