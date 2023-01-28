<template>
<div v-if="signup">
  <SignUp @onClick="SignUpCls"></SignUp>
</div>
<div v-if="signin">
  <SignIn @onClick="SinInCls"></SignIn>
</div>
<div v-if="Login">
  <LogInHeader></LogInHeader>
</div>
<Header @onClick="SignOpn"></Header>
  <main id="top-page">
    <section id="section1">
      <div class="koukoku">
        <a href="#" class ="linkURL"><img src="../assets/広告.jpg"></a>
      </div>
      <article class="itiran">
        <ul class="random">
          <LiveList></LiveList>
          <LiveList></LiveList>
          <LiveList></LiveList>
          <LiveList></LiveList>
        </ul>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebaseConfig";
import LiveList from  '@/components/LiveList.vue';
import Header from  '@/components/header.vue';
import LogInHeader from  '@/components/logInheader.vue';
import SignUp from  '@/components/SignUp.vue';
import SignIn from  '@/components/SignIn.vue';

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    LiveList,
    Header,
    LogInHeader,
    SignUp,
    SignIn
  },
  data: function(){
    return{
      signup: false,
      signin: false,
      Login:false
    }
  },
  methods: {
    SignOpn(value:number){
      if(value == 1){
        this.signup = true;
      } else if(value == 2){
        this.signin = true;
      };
    },
    SignUpCls(value:boolean){
      this.signup = value;
    },
    SinInCls(value:boolean){
      this.signin = value;
    },
  },
  // https://qiita.com/Shiho_anyplus/items/f76422ff3ea03f088b20
  beforeUpdate: function(){
    let userlogin = this.Login

    getAuth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('login');
        this.userlogin = true;
      } else {
        console.log('logout');
      }
    });     
  }
});
</script>

<style scoped lang="scss">

template{
  position: absolute;
  height: 100%;
}

#section1{
 font-family: 'Kosugi Maru', sans-serif;
 display: flex;
 margin-top: 3.5vw;
 background-color: #f9fcff;
}
  
 .koukoku{
 margin: 2vw 0 0 5vw;
}
  
 .koukoku img{
 border: 0.1vw solid;
 width: 17vw;
}

.itiran{
 width: 80%;
 margin-left: auto;
}

.random{
 display: flex;
 flex-wrap: wrap;
 list-style: none;
 text-align: left;
 justify-content: center;
 margin-right: 3vw;
}

.linkURL{
 text-decoration: none;
 color: #383635;
}
  
</style>

