<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="Movie">
        <video playsinline autoplay muted loop>
          <source src="../assets/新規FMT01c1.mp4" type="video/mp4">
        </video>
        <div class="OuterFrame">
          <div Class="Filter">
            <div class="Startbtn" @click="JumpURL">start</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PWATest',
  components: {
  },
  
  data: function(){
  },

  methods: {
    JumpURL(){
      const url = 'http://abehiroshi.la.coocan.jp/'
      window.location.href = url
    }
  }
});
</script>

<style scoped lang="scss">

#section1{
  width: 100%;
}

.Movie{
  position: relative;
  // background-image: url(../assets/people_0020_popcorn.gif);
  // background-repeat: no-repeat;
  // background-size: contain;
  }

  .Movie video{
    width: 100%;
    height: auto;
  }

.OuterFrame{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.Filter{
  width: 100%;
  height: 100%;
  background-color: rgba(104, 105, 101, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.Startbtn{
  margin-top: 150px;
  margin-right: 15px;
  font-size: 35px;
  border: 5px solid;
  padding: 5px 30px;
  background-color: rgba(187, 34, 0, 0.9);
}

</style>