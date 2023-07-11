<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="MovieFld">
        <video playsinline autoplay muted>
          <source src="../assets/nijikanoOP.mp4" type="video/mp4">
        </video>
        <div class="MuteOffbtnFld" v-if="Open === false && Start ===true " @click="VolChange">
          <img src="../assets/MuteOff.png" v-if="Mute === true">
          <img src="../assets/Mute.png" v-if="Mute === false">
        </div>
        <transition>
          <div class="OuterFrame" v-if="Open === true">
            <div Class="Filter" @click="JumpURL">
              <div class="Startbtn">Touch to Screen</div>
            </div>
            <div class="MuteOffbtnFld" @click="VolChange">
              <img src="../assets/MuteOff.png" v-if="Mute === true">
              <img src="../assets/Mute.png" v-if="Mute === false">  
            </div>
            <div class="Loginbtn" @click="JumpLogin">登録済みの方はこちらから</div>
          </div>
        </transition>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Nijikano',
  components: {
  },
  
  data: function(){
    return{
      Open:false,
      Mute:true,
      Start:false
    }
  },

  methods: {
    JumpURL(){
      const url = 'http://abehiroshi.la.coocan.jp/'
      window.location.href = url
    },

    JumpLogin(){
      const Loginurl = 'https://mai.co.jp/'
      window.location.href = Loginurl
    },

    VolChange(){
      const videoTag = document.querySelector("video");
      if(videoTag!.muted === true){
        videoTag!.muted = false;
        this.Mute = false;
      } else {
        videoTag!.muted = true;
        this.Mute = true;
      }
    }
  },

  mounted(){
    setTimeout(() => {
      this.Open = true;
    }, 35500);

    setTimeout(() => {
      this.Start = true;
    }, 200);
  }
});
</script>

<style scoped lang="scss">


#section1{
  display: block;
  text-align: center;
}

.MovieFld{
  position: relative;
  margin: auto;
  max-width: 950px;
  min-width: 320px;
  }

.MovieFld video{
  width: 100%;
  height: auto;
  max-width: 950px;
  min-width: 320px;
}

.MuteOffbtnFld{
  position: absolute;
  border: 1vw solid;
  background-color: #FFF;
  padding: 2vw 2vw 1vw;
  bottom: 3vw;
  right: 7vw;
}

.MuteOffbtnFld img{
  width: 10vw;
}

.v-leave-active,
.v-enter-active {
    transition: opacity 1s;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.OuterFrame{
  position: absolute;
  top: 0;
  bottom: 3px;
  right: 0;
  left: 0;
}

.Filter{
  width: 100%;
  height: 100%;
  background-color: rgba(104, 105, 101, 0.3);
  display: flex;
  justify-content:flex-end;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.Startbtn{
  margin-top: 15vw;
  font-size: 6vw;
  width: 100%;
  background-color: rgba(251, 251, 251, 0.5);
}

.Loginbtn{
  position: absolute;
  z-index: 100;
  margin: -80vw auto 0 20vw;
  font-size: 4.1vw;
  width: 50%;
  border: 0.5vw solid;
  padding: 3vw 3vw;
  background-color: rgba(238, 95, 95, 0.9);
}

@media (min-width: 960px) {
  #section1{
    display: block;
    text-align: center;
  }

  .MovieFld{
    position: relative;
    margin: auto;
    max-width: 950px;
    min-width: 320px;
  }

  .MovieFld video{
    width: 100%;
    height: auto;
    max-width: 950px;
    min-width: 320px;
  }

  .v-leave-active,
  .v-enter-active {
    transition: opacity 1s;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .OuterFrame{
    position: absolute;
    top: 0;
    bottom: 3px;
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
    margin-top: -60px;
    font-size: 60px;
    width: 100%;
    // border: 5px solid;
    // padding: 5px 30px;
    background-color: rgba(251, 251, 251, 0.5);
  }
  .Loginbtn{
    position: absolute;
    z-index: 100;
    margin: -800px auto 0 200px;
    font-size: 39px;
    width: 50%;
    border: 5px solid;
    padding: 30px 30px;
    background-color: rgba(238, 95, 95, 0.9);
  }
}

</style>