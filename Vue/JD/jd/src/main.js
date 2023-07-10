import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './store/index.js'


//使用Element框架
import {Row,Button,Table,TableColumn} from 'element-ui';
Vue.use(Row)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)



new Vue({
  render: h => h(App), store,
  // render: h => h(App)
}).$mount('#app')


