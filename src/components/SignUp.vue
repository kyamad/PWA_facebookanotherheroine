<template>
  <div id="sign" class="container mt-5">
    <div class="main">
      <div class="CloseBtn">
        <button @click="close">×</button>
      </div>
      <h class="title">ユーザーアカウントを作成</h>
      <div class="row">
          <div class="col-sm-8">
              <form v-on:submit.prevent="AddReister">
                  <div class="img-choice">
                    <label class="input-item__label">アイコンを選択
                      <input type="file" @change="onFileChange($event)" ref="preview" accept="image/png,image/jpg,image"/>
                    </label>
                    <div class="preview-item">
                      <img
                        v-show="uploadedImage"
                        class="preview-item-file"
                        :src="uploadedImage"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                      <label for="Name">ユーザー名</label>
                      <input type="text" class="form-control1" id="UserName" v-model="name" maxlength="10">
                  </div>
                  <div class="Sign-Flex-Grp">
                    <div class="form-group2">
                      <label for="Birthday">生年月日</label>
                      <select v-model="year" @change="get_days">
                        <option v-for="n in 70" :value="(NowYear + 1 ) - n" :key="n">
                          {{ (NowYear + 1 ) - n }}
                        </option>
                      </select>年
                      <select v-model="month" @change="get_days">
                        <option v-for="n in 12" :value="n" :key="n">
                          {{ n }}
                        </option>
                      </select>月
                      <select v-model="day">
                        <option v-for="n in days_max" :value="n" :key="n">
                          {{ n }}
                        </option>
                      </select>日
                    </div>
                    <div class="form-group2">
                      <label for="Gender">性別</label>
                      <select v-model="gender">
                        <option v-for="item , i in gender" :value= gender :key="i">
                          {{ item.gen }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                      <label for="Email">メールアドレス</label>
                      <input type="email" class="form-control2" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="Password1">パスワード(6文字以上英数字)※空白は消えます</label>
                    <input type="password" v-if="open ==false" class="form-control3" id="password" v-model="password">
                    <input type="text" v-if="open ==true" class="form-control3" v-model="password">
                    <div class="pw-openflg">パスワードを表示する<input type="checkbox" v-model="open"></div>
                  </div>
                  <div class="RegisterBtn">
                    <button type="submit" class="btn btn-info">登録</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import {auth} from "../../firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import firebaseUtils from '../firebaseUtils';

export default defineComponent({
  name: 'SignUp',
  data: function(){
    return{
      name: '',
      email: '',
      password: '',
      open: false,
      year: 1995,
      month: 1,
      day: 1,
      days_max: 0,
      NowYear:0,
      gender: [{gen:"男性"},{gen:"女性"},{gen:"その他"}],
      signup: false,
      uploadedImage: '',
    }
  },
  created: function () {
    this.get_days();
    const d = new Date()
    this.NowYear = d.getFullYear()
  },
  methods: {
    get_days: function () {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    },

    close: function(){
      this.$emit("onClick", this.signup)
    },

    onFileChange(e:any) {
      const files = e.target.files;

      if(files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
              this.uploadedImage = e.target!.result as string || '' ;
          };
          reader.readAsDataURL(file);
      }
    },

    AddReister: function() {
      this.name = this.name.replace(/\s+/g, "");
      this.email = this.email.replace(/\s+/g, "");
      this.password = this.password.replace(/\s+/g, "");

      const mail = this.email;
      const pass = this.password;
      const name = this.name;
      
      if(!this.name){
        alert("ユーザー名を入力してください")
      } else if(!this.email){
        alert("メールアドレスを入力してください")
      } else if(!this.password) {
        alert("パスワードを入力してください")
      } else {
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(user)
          .then(() => {
            updateProfile(user, {
              displayName: name, photoURL: ""
            }).then(() => {
              console.log(user.displayName);
            }).catch((error) => {
              alert("写真またはユーザー名登録時にエラーが起きたようです。")
            });
            alert("登録のために確認メールが送信されました！");
            firebaseUtils.onAuthStateChanged();
            this.$emit("onClick", false);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode == "auth/email-already-in-use"){
            alert("このメールアドレスは使用されています")
          } else if(errorCode == "auth/invalid-email"){
            alert("メールアドレスの形式が正しくありません")
          } else if(errorCode == "auth/user-disabled"){
            alert("サービスの利用が停止されているかもしれません")
          } else if(errorCode == "auth/weak-password"){
            alert("パスワードは6文字以上にしてください")
          } else if(errorCode == "auth/popup-blocked"){
            alert("認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください")
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
  width: 5vw;
  height: 2.2vw;
  font-size: 1vw;
  font-family: 'Kosugi Maru', sans-serif;
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

.img-choice label > input{
  display: none;
}

.img-choice label{
  width: 9vw;
  height: 1.5vw;
  margin:auto;
  text-align: center;
  font-size: 1vw;
  padding: 0.1vw;
  border: 0.1vw solid;
}

.img-choice {
  display: flex;
  width: 90%;
  background-color: #f9f9f9;
  margin-bottom: 1.3vw;
}

.preview-item img {
  margin-left: 1vw;
  width: 4vw;
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

.pw-openflg{
  display: flex;
  font-size: 1vw;
  margin-top: 0.5vw;
}

.pw-openflg input{
  width: 1vw;
  margin: auto auto 0.15vw 0.5vw;
}

.Sign-Flex-Grp{
  display: flex;
  justify-content: left;
  margin-bottom: 1.5vw;
}

</style>

