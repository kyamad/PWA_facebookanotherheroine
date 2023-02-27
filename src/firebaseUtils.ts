import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from './store';
import { auth } from "../FirebaseConfig";
// 参考：https://ichi-station.com/firebase-data-in-vuex/
// 参考2：https://firebase.google.com/docs/auth/web/start?hl=ja&authuser=0#web-version-9_3　（Ver8の書き方だったので9の書き方に変更した）

export default {
  onAuthStateChanged() {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        store.commit('onAuthStateChanged', user);
        store.commit('UseridDelivery', user.uid);
        store.commit('UserNameDelivery', user.displayName);
        store.commit('UserphotoURLDelivery', user.photoURL);
        store.commit('onUserLoginStatusChanged', true);
      } else {
        store.commit('onAuthStateChanged', user);
        store.commit('UseridDelivery', "");
        store.commit('UserNameDelivery', "");
        store.commit('UserphotoURLDelivery', "");
        store.commit('onUserLoginStatusChanged', false);
      }
    });
  },
}