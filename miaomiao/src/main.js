import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.prototype.baseUrl = "https://mockapi.eolinker.com/6bSx7Afdb3d0356201003058ae87cfe77bab2f2c0898e8b";


//全局过滤器
Vue.filter('setWH',(url,arg)=>{
    return url.replace('/w\.h/',arg);//将url中的/w.h/部分替换为arg自定义参数，使用时:{{url|setWH('128.180')}}
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
