import Vue from 'vue'
import App from './App'

import iview from './index'
Vue.use(iview)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
