import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { Button, NoticeBar, Field, Cell, CellGroup, RadioGroup, Radio, Checkbox, CheckboxGroup, Notify } from 'vant';
//一个个link对象 - 分类
import Questionaire from '@/components/Questionaire.vue'; // 公开课问卷
import Questionaire2 from '@/components/Questionaire2.vue'; // 内训问卷
import NotFound from '@/components/NotFound.vue'; // 404页面
import Finished from '@/components/Finished.vue'; // 过期页面
import OverDue from '@/components/OverDue.vue'; // 完成页面

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(NoticeBar);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Notify);

//安装插件
Vue.use(VueRouter);//挂载属性

let router = new VueRouter({
  //routes
  routes: [
    //一个个link对象
    {path: '/', redirect: '/innerClass'}, // 供测试用
    {path: '/openClass', component: Questionaire},
    {path: '/innerClass', component: Questionaire2},
    {path: '/overDue', component: OverDue},
    {path: '/finished', component: Finished},
    {path: '*', component: NotFound},
  ]
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
