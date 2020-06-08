import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

Vue.component("my-header",MyHeader)
Vue.component("my-footer",MyFooter)

axios.defaults.baseURL = 'http://127.0.0.1:4000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

//导入Mint UI
import MintUI from 'mint-ui';

//导入样式表文件
import "mint-ui/lib/style.min.css";

//通过Vue.ues()方法使用插件
Vue.use(MintUI);

//导入Element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
