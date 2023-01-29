<template>
  <div id="sign" class="container mt-5">
    <div class="main">
      <div class="CloseBtn">
        <button @click="close">×</button>
      </div>
      <h class="title">ログイン</h>
      <div class="row">
          <div class="col-sm-8">
              <form v-on:submit.prevent="SignIn">
                  <div class="form-group">
                      <label for="Email">メールアドレス</label>
                      <input type="email" class="form-control2" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="Password1">パスワード</label>
                    <input type="password" class="form-control3" id="password" v-model="password">
                  </div>
                  <div class="RegisterBtn">
                    <button type="submit" class="btn btn-info">ログイン</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getDatabase, ref, set , push } from "firebase/database";
import app from "../../firebaseconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseUtils from '../firebaseUtils';

export default defineComponent({
  name: 'SignIn',
  data: function(){
    return{
      email: '',
      password: '',
      signin: false,
    }
  },
  methods: {
    close: function(){
      this.$emit("onClick", this.signin);
    },
    SignIn: function() {
      this.email = this.email.replace(/\s+/g, "");
      this.password = this.password.replace(/\s+/g, "");
      
      const auth = getAuth(app);
      const mail = this.email;
      const pass = this.password;
      
      
      if(!this.email){
        alert("メールアドレスを入力してください")
      } else if(!this.password) {
        alert("パスワードを入力してください")
      } else {
        signInWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          firebaseUtils.onAuthStateChanged();
          this.$emit("onClick", false);
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/email-already-in-use"){
            alert("メールアドレスまたはパスワードが違います")
          } else if(errorCode == "auth/user-not-found"){
            alert("メールアドレスまたはパスワードが違います")
          } else if(errorCode == "auth/user-disabled"){
            alert("サービスの利用が停止されているかもしれません")
          } else if(errorCode == "auth/user-mismatch"){
            alert("メールアドレスまたはパスワードが違います")
          } else if(errorCode == "auth/popup-blocked"){
            alert("認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください")
          } else if(errorCode == "auth/wrong-password"){
            alert("メールアドレスまたはパスワードが違います")
          } else {
            alert("何かしらのエラーが起きました。時間を置くか、最初からやり直してください。")
          }
        });
      }
    }
  }
});

</script>

<style scoped lang="scss">

label, input {
  display: block;
  text-align: left;
}

button{
  margin-top: 1vw;
  padding: 0.2vw 1vw;
  width: 7vw;
  height: 2.6vw;
  font-size: 1vw;
  font-family: 'Kosugi Maru', sans-serif;
  background-color: lightskyblue;
}

input {
  width: 90%;
  height: 1.3vw;
  padding: 0 0 0 0.5vw;
  font-size: 1vw;
  background-color: #f2f2f2;
}

label{
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
}

select{
  height: 1.4vw;
  width: 4vw;
  font-size: 1vw;
}

#sign{
  position: absolute;
  height: 60vw;
  width: 100%;
  text-align: left;
  background-color: rgb(123, 124, 125, 0.6);
}

.container{
  display: flex;
}

.main{
  width: 22%;
  margin: 3vw auto auto auto;
  background-color: #FFFFFF;
  padding: 2vw;
  border-radius: 1vw;
}

.title{
  display: block;
  font-size: 1.2vw;
  font-weight: bold;
  width: 90%;
  padding-bottom: 0.6vw;
  border-bottom: 0.15vw solid #7b7c7d;
  margin-bottom: 2vw;
}

.CloseBtn{
  margin: -1vw -0.75vw -0.5vw auto;
  display: table;
  margin-left: auto;
}

.CloseBtn button{
  margin-top: 0;
  padding: 0;
  border: 0.1vw solid;
  width: 1.5vw;
  height: 1.5vw;
  background-color: #FFFFFF;
  font-size: 1vw;
  font-family: 'Kosugi Maru', sans-serif;
}

.row{
  margin-top: 1.5vw;
}

.form-group{
  margin-bottom: 1.3vw;
}

.form-group2{
  font-size: 1vw;
}

.form-group2:nth-child(2){
  margin-left: 0.5vw;
}

.form-control1{
  font-size: 0.8vw;
}

.RegisterBtn{
  text-align: center;
}

.Sign-Flex-Grp{
  display: flex;
  justify-content: left;
  margin-bottom: 1.5vw;
}

</style>

