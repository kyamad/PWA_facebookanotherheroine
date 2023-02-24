import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    user: {},
    userid:"",
    username:"",
    isLoggedIn: false,
    etc: true
  },
  getters: {
    user(state) {
      return state.user;
    },
    userid(state) {
      return state.userid;
    },
    username(state) {
      return state.username;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; // firebaseが返したユーザー情報
    },
    UseridDelivery(state, userid:string) {
      state.userid = userid as string || "";
    },
    UserNameDelivery(state, username:string) {
      state.username = username as string || "";
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
