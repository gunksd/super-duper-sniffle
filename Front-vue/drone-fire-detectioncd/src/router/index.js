import Vue from 'vue';
import VueRouter from 'vue-router';
import ImageList from '../components/ImageList.vue';
import ImageView from '../components/ImageView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ImageList },
  { path: '/image/:id', name: 'image', component: ImageView },
];

const router = new VueRouter({
  routes,
});

export default router;
