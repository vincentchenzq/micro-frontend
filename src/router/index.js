import Vue from "vue";
import VueRouter from "vue-router";
import { getI18nData } from "@/api";
import i18n from '@/locales'
Vue.use(VueRouter);
const routes = [
  {
    path: "/page1",
    meta: {
      pageId: "page1",
    },
    component: () =>
      import(/* webpackChunkName: "page1" */ "@/views/page1.vue"),
  },
  {
    path: "/page2",
    meta: {
      pageId: "page2",
    },
    component: () =>
      import(/* webpackChunkName: "page2" */ "@/views/page2.vue"),
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

router.beforeEach(async (to, from, next) => {
  if(to.meta && to.meta.pageId){
    var  i18nData = {}
    // 开发环境直接取本地json
    if(process.env.NODE_ENV==="development"){
      i18nData = require('@/locales/zh').default
    }else{
      i18nData = await getI18nData(to.meta.pageId)
    }
    i18n.mergeLocaleMessage(i18n.locale,i18nData)
    next()
  }else{
    next()
  }
})

export default  router
