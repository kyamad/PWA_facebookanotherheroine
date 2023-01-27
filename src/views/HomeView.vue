<template>
<div v-if="signup">
<SignUp @onClick="SignUpCls"></SignUp>
</div>
<Header></Header>

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
import LiveList from  '@/components/LiveList.vue';
import Header from  '@/components/header.vue';
import SignUp from  '@/components/SignUp.vue';

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    LiveList,
    Header,
    SignUp
  },
  data: function(){
    return{
      signup: true,
    }
  },
  methods: {
    SignUpCls(value:any) {
        this.signup = value;
    },
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

