import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: '',
    user: {},
  },
  getters: {
    token: (state) => {
      return state.token || localStorage.token
    },
    user: (state) => {
      return JSON.parse(localStorage.user || state.user || '{}')
    },
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
      localStorage.token = token
    },

    setMe: (state, info) => {
      info = JSON.stringify(info)
      state.user = info
      localStorage.user = info
    }

  }
})
export default store