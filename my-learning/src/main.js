// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

Vue.config.productionTip = false
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
	mode:'history',
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
