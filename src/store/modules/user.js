import { login } from '@/api/login'

const state = {
  token: ''
}

const mutations = {
  // 设置token
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
  async loginAction({ commit }, data) {
    try {
      const res = await login(data)
      console.log(res)
      commit('SET_TOKEN', res.data.token)
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
