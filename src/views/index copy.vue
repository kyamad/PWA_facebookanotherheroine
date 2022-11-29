<template>
  <logInheader></logInheader>
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

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    LiveList
  },
});
</script>

<style scoped lang="scss">

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

