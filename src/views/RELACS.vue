<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="BackGroudFld">
        <div class="BackScreen">
          <transition>
          <div class="OuterFrame" v-if="Open === true">
            <div Class="Filter">
              <div class="FirstTimeBtn" @click="JumpSignUpURL">予約する</div>
              <select v-model="InitialValue" class="LogInBtn" @change="PlaceChoice">
                <option value="" disabled>登録済みの方はこちらから</option>  
                <option v-for="item, i in OptionPlace" 
                  v-bind:kye="i"
                  v-bind:value="item.value">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          </transition>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'RELACS',
  components: {
  },
  
  data: function(){
    return{
      Open:false,
      SignUpURL:"",
      InitialValue:"",
      OptionPlace: [
        {value:"https://lin.ee/k94PqtC", name:'仙台'},
        {value:"https://lin.ee/WpzGSMD", name:'千葉'},
        {value:"https://lin.ee/qNDTNdW", name:'新宿'},
        {value:"https://lin.ee/2vFeppa", name:'北千住'},
        {value:"https://lin.ee/jbzSWqu", name:'厚木'},
        {value:"https://lin.ee/t18G9uS", name:'大宮'},
      ]
    }
  },

  methods: {
    JumpSignUpURL(){
      this.SignUpURL = "https://relacs.jp/reserve_form/shop?cid=64a668c990e84&p=5c4169f7a1b06"
      window.location.href = this.SignUpURL
    },

    PlaceChoice(e:any){
      window.location.href = e.target.value
    }
  },

  mounted(){
    setTimeout(() => {
      this.Open = true;
    }, 1);

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
  display: block;
  text-align: center;
}

.BackGroudFld{
  margin: auto;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000000;
}

.BackScreen{
  background-image: url("../assets/リラクス_Pt01B.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.BackGroudFld video{
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
  font-family:'CorporateLogo';
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.Filter{
  height: calc(var(--vh, 1vh) * 100);
  background-image: url("../assets/リラクス_下部白部.png");
  background-repeat: no-repeat;
  background-size:   cover;
  background-position: bottom;
  display: flex;
  justify-content:flex-end;
  flex-flow: column;
  align-items: center;
}

.FirstTimeBtn{
  margin-bottom: 10vw;
  font-size: 6vw;
  width: 50%;
  border: 0.5vw solid;
  border-radius: 25vw;
  padding: 2.5vw 0;
  background-color: #f85c82;
}

.LogInBtn{
  color: #f85c82;
  font-size: 19px;
  border: 0.5vw solid #000;
  padding: 2px 20px 2px 2px;
  background-color: rgb(255, 255, 255);
}

@media (min-width: 960px) {
  #section1{
    display: block;
    text-align: center;
  }

  .BackGroudFld{
    position: relative;
    margin: auto;
    max-width: 950px;
    min-width: 320px;
  }

  .BackGroudFld video{
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

  .FirstTimeBtn{
    margin-bottom: 100px;
    font-size: 58px;
    width: 50%;
    border: 5px solid;
    border-radius: 100px;
    padding: 24px 0;
    background-color: rgba(223, 234, 70, 1.0);
  }

  .LogInBtn{
    font-size: 38px;
    margin-bottom: -600px;
    border: 5px solid;
    padding: 20px 30px;
    background-color: rgb(255, 255, 255);
  }
}

</style>