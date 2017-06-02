import Vue from 'vue'
import Router from 'vue-router'

// route split at front
import index from './routes/index.js'
let routes = index

Vue.use(Router)

export default new Router({
  routes: routes
})
