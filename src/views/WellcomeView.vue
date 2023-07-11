<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="ProgressFld">
        <div class="progBar">
            <p class="bar"></p>
        </div>
      </div>
      <div class="WellcomeTextArea">
        <div class="WellcomeText">ようこそ</div>
      </div>
      <div class="QuestionTextArea">
        <div class="QuestionText">いくつかの質問であなたのことを教えてください<br>AIがあなたのデータを学習します</div>
      </div>
      <div class="StartBtnFld">
          <div class="Startbtn" @click="">スタート</div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'WellcomeView',
  components: {
  },
  
  data: function(){
    return{
    }
  },

  methods: {
  },

  mounted(){
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

#GroundWork{
  color: #FFF;
}

#section1{
  background-color: #29204E;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  display: flex;
  justify-content:flex-start;
  flex-flow: column;
  align-items: center;
}

.ProgressFld{
  margin: 6vw 0 auto 0;
}

.progBar{
  width:70vw;
  height:3vw;
  background-color:#ececec;
  position:relative;
  border-radius:25vw;
  overflow: hidden;
}
.progBar .bar{
  position:absolute;
  height:100%;
  width: 0%;
  background-color:#6DE67C;
}

.WellcomeTextArea{
  margin: 1vw 0 0 0;
  font-size: 7vw;
}

.QuestionTextArea{
  margin: 4vw 0 0 0;
  font-size: 4vw;
}

.StartBtnFld{
  margin-top: 20vw;
  margin-bottom: calc(var(--vh, 1vh) * 25);
}

.Startbtn{
  font-size: 8vw;
  color: #FFFFFF;
  border-radius: 4vw;
  padding: 3vw 20vw;
  background-color: #6DE67C;
}


@media (min-width: 507px) {
  #GroundWork{
    color: #FFF;
  }

  #section1{
    background-color: #29204E;
    height: 768px;
    width: 507px;
    overflow: hidden;
    display: flex;
    justify-content:flex-end;
    flex-flow: column;
    align-items: center;
  }

  .ProgressFld{
    margin: 30px 0 auto 0;
  }

  .progBar{
    width:355px;
    height:15px;
    background-color:#ececec;
    position:relative;
    border-radius:25vw;
    overflow: hidden;
  }
  .progBar .bar{
    position:absolute;
    height:100%;
    width: 0%;
    background-color:#FFCA28;
  }

  .WellcomeTextArea{
    margin: 10px 0 0 0;
    font-size: 35px;
  }

  .QuestionTextArea{
    margin: 20px 0 0 0;
    font-size: 20px;
  }

  .StartBtnFld{
    margin-top: 100px;
    margin-bottom: 200px;
  }

  .Startbtn{
    font-size: 40px;
    color: #FFFFFF;
    border-radius: 20px;
    padding: 15px 100px;
    background-color: #6DE67C;
  }

}

</style>