<template>
  <div id="sign" class="container mt-5">
    <div class="main">
      <h class="title">ユーザーアカウントを作成</h>
      <div class="row">
          <div class="col-sm-8">
              <form v-on:submit.prevent="registerUser">
                  <div class="form-group">
                      <label for="name">ユーザー名</label>
                      <input type="text" class="form-control" id="email" v-model="text">
                  </div>
                  <div class="form-group">
                      <label for="email">メールアドレス</label>
                      <input type="email" class="form-control" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password1">パスワード</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                  </div>
                  <div class="form-group">
                    <label for="password2">パスワード(確認)</label>
                    <input type="password" class="form-control" id="password" v-model="password">
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
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'SignUp',
  components: {
  },
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
}

input {
  width: 90%;
  height: 1.8vw;
  padding: 0 0 0 0.5vw;
  font-size: 1.3vw;
  background-color: #f2f2f2;
}

label{
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
}

#sign{
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: left;
  background-color: #7b7c7d;
}

.container{
  display: flex;
}

.main{
  width: 25%;
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
}

.row{
  margin-top: 2vw;
}

.form-group{
  margin: auto auto 1.5vw auto;
}

.RegisterBtn{
  text-align: center;
}

</style>

