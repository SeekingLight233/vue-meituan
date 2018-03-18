import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  suggestionLists: [],
  sortBy: '综合排序',     //当前排序方式 默认综合排序,
  delivery_address: {},   //配送地址
  pathList: []
}

import cart from './modules/cart'
import address from './modules/address'
import restaurant from './modules/restaurant'
import routerPath from './modules/routerPath'

export default new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    cart,
    address,
    restaurant,
    routerPath
  }
})
