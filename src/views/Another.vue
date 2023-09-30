<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="MovieFld">
        <video playsinline autoplay muted v-if="!Regist">
          <source src="../assets/another/MainOP.mp4" type="video/mp4">
        </video>
        <div class="User-Fld" v-if="!Regist" >
          <div class="Log-In-Btn-Fld">
            <div class="Log-In-Btn">
              <img src="../assets/another/loginbtn.png" @click="JumpLogin">
            </div>
          </div>
          <div class="Sign-In-Btn-Fld" >
            <div class="Sign-In-Btn">
              <img src="../assets/another/signinbtn.png" @click="RegistarOn">
            </div>
          </div>
        </div>
        <Registar v-if="Regist"></Registar>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Registar from '@/components/anotherRegistar.vue'

export default defineComponent({
  name: 'Another',
  components: {
    Registar
  },
  
  data: function(){
    return{
      Open:false,
      Mute:true,
      Start:false,
      Regist:false,
      MailAdress:"",
      NickName:""
    }
  },

  methods: {
    JumpLogin(){
      const Loginurl = 'https://123chat.jp/main/'
      window.location.href = Loginurl
    },

    RegistarOn(){
      this.Regist = true
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
    }, 3);

    setTimeout(() => {
      this.Start = true;
    }, 200);

    const setFillHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 画面のサイズ変動があった時に高さを再計算する
    window.addEventListener('resize', setFillHeight);

    // 初期化
    setFillHeight();
  }
});
</script>

<style scoped lang="scss">


#section1{
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background-color: #000;
}

.MovieFld{
  position: fixed;
}

.MovieFld video{
  width: 100%;
  position: fixed;
  // position: fixed;
  // bottom: 0;
  // left: 0;
}

.User-Fld{
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
  // background-color: rgba(216, 10, 10, 0.5);
}

.Log-In-Btn-Fld{
  display: flex;
  justify-content:flex-end;
  flex-flow: column;
  align-items: center;
  font-size: 15px;
  margin-bottom: -5px;
}

.Log-In-Btn img{
  width: 60%;
}

.Sign-In-Btn-Fld{
  display: flex;
  justify-content:flex-end;
  flex-flow: column;
  align-items: center;
  font-size: 15px;
  margin-bottom: calc(var(--vh, 1vh) * 27);
}

.Sign-In-Btn img{
  width: 60%;
}

// .v-leave-active,
// .v-enter-active {
//     transition: opacity 1s;
// }
// .v-enter-from,
// .v-leave-to {
//     opacity: 0;
// }

// .OuterFrame{
//   position: absolute;
//   top: 0;
//   bottom: 3px;
//   right: 0;
//   left: 0;
// }

// .Filter{
//   width: 100%;
//   height: 100%;
//   background-color: rgba(104, 105, 101, 0.3);
//   display: flex;
//   justify-content:flex-end;
//   flex-flow: column;
//   align-items: center;
//   justify-content: center;
// }

// .Startbtn{
//   font-size: 25px;
//   width: 100%;
//   background-color: rgba(251, 251, 251, 0.5);
// }

// .Loginbtn{
//   position: absolute;
//   z-index: 100;
//   margin-top: 150px;
//   font-size: 16px;
//   width: 50%;
//   border: 1px solid;
//   padding: 13px;
//   background-color: rgba(238, 95, 95, 0.9);
// }

@media (min-width: 500px) {
  #section1{
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
    background-color: #000;
  }

  .MovieFld{
    position: fixed;
  }

  .MovieFld video{
    height: calc(var(--vh, 1vh) * 100);
  }

  .User-Fld{
    margin: 0 auto;
    left: 0;
    right: 0;
    width: calc(var(--vh, 1vh) * 46);
    height: calc(var(--vh, 1vh) * 100);
    position: fixed;
  }

  .Sign-In-Btn-Fld{
    display: flex;
    justify-content:flex-end;
    flex-flow: column;
    align-items: center;
    font-size: 15px;
    margin-bottom: calc(var(--vh, 1vh) * 25);
  }

  .Sign-In-Btn img{
    width: 240px;
  }

  .Log-In-Btn-Fld{
    display: flex;
    justify-content:flex-end;
    flex-flow: column;
    align-items: center;
    font-size: 15px;
    margin-bottom: -5px;
  }

  .Log-In-Btn img{
    width: 240px;
  }

  .MuteOffbtnFld{
    position: absolute;
    padding: 10px 10px 5px;
    bottom: 0;
    right: 0;
  }

  .MuteOffbtnFld img{
    width: 70px;
  }

  // .v-leave-active,
  // .v-enter-active {
  //   transition: opacity 1s;
  // }
  // .v-enter-from,
  // .v-leave-to {
  //   opacity: 0;
  // }

  // .OuterFrame{
  //   position: absolute;
  //   top: 0;
  //   bottom: 3px;
  //   right: 0;
  //   left: 0;
  // }

  // .Filter{
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(104, 105, 101, 0.3);
  //   display: flex;
  //   justify-content:flex-end;
  //   flex-flow: column;
  //   align-items: center;
  //   justify-content: center;
  // }

  // .Startbtn{
  //   font-size: 25px;
  //   width: 100%;
  //   background-color: rgba(251, 251, 251, 0.5);
  // }

  // .Loginbtn{
  //   position: absolute;
  //   z-index: 100;
  //   margin-top: 150px;
  //   font-size: 16px;
  //   width: 50%;
  //   border: 1px solid;
  //   padding: 13px;
  //   background-color: rgba(238, 95, 95, 0.9);
  // }
}

</style>