import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    isLoggedIn: false,
    etc: true
  },
  getters: {
    user(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; // firebaseが返したユーザー情報
      if(user){
        state.isLoggedIn = true;
      }
    },
    onUserLoginStatusChanged(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn; // ログインしているかどうか
    },
 },
  actions: {
  },
  modules: {
  }
})
