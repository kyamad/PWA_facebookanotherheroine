<template>
  <div id="sign" class="container mt-5">
    <div class="main">
      <div class="CloseBtn">
        <button @click="close">×</button>
      </div>
      <h class="title">ユーザーアカウントを作成</h>
      <div class="row">
          <div class="col-sm-8">
              <form v-on:submit.prevent="registerUser">
                  <div class="form-group">
                      <label for="Name">ユーザー名</label>
                      <input type="text" class="form-control1" id="UserName" v-model="name" maxlength="10">
                  </div>
                  <div class="Sign-Flex-Grp">
                    <div class="form-group2">
                      <label for="Birthday">生年月日</label>
                      <select v-model="year" @change="get_days">
                        <option v-for="n in 70" :value="(NowYear + 1 ) - n">
                          {{ (NowYear + 1 ) - n }}
                        </option>
                      </select>年
                      <select v-model="month" @change="get_days">
                        <option v-for="n in 12" :value="n">
                          {{ n }}
                        </option>
                      </select>月
                      <select v-model="day">
                        <option v-for="n in days_max" :value="n">
                          {{ n }}
                        </option>
                      </select>日
                    </div>
                    <div class="form-group2">
                      <label for="Gender">性別</label>
                      <select v-model="gender">
                        <option v-for="i in gender" :value= gender>
                          {{ i.gen }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                      <label for="Email">メールアドレス</label>
                      <input type="email" class="form-control2" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="Password1">パスワード</label>
                    <input type="password" class="form-control3" id="password" v-model="password">
                  </div>
                  <div class="form-group">
                    <label for="Password2">パスワード(確認)</label>
                    <input type="password" class="form-control4" id="password" v-model="password2">
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
  data: function(){
    return{
      name: '',
      email: '',
      password: '',
      password2: '',
      year: 0,
      month: 1,
      day: 1,
      days_max: 0,
      NowYear:0,
      gender: [{gen:"男性"},{gen:"女性"},{gen:"その他"}],
      signup: false,
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

