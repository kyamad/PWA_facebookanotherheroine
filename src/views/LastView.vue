<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="ProgressFld">
        <div class="progBar">
            <p class="bar"></p>
        </div>
      </div>
      <div class="MsgFld">
        <div class="MsgText">さあ<br>はじめよう</div>
        <div class="Cracker">🎉</div>
      </div>
      <div class="AppealFld">
        <div class="Topics">✅ 無期限無料カウンセリング</div>
        <div class="Topics">✅ AIコーチによる完全サポート</div>
        <div class="Topics">✅ あなた専用のレッスンプラン</div>
        <div class="Topics">✅ LINEでカンタンやり取り</div>
      </div>
      <div class="NextBtnFld">
          <div class="Nextbtn">LINE登録</div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'LastView',
  components: {
  },
  
  data: function(){
    return{
      InitialValue:"",
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
  justify-content:flex-end;
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
  width: 100%;
  background-color:#6DE67C;
}

.MsgFld{
  font-size: 6vw;
  display: flex;
  justify-content: space-between;
  text-align: initial;
  width: 60vw;
}

.Cracker{
  font-size: 14vw;
}

.AppealFld{
  margin: 15vw 0 0 0;
  display: flex;
  justify-content: space-between;
  text-align: initial;
  flex-flow: column;
}

.Topics{
  width: 75vw;
  font-size: 5vw;
  margin-bottom: 2vw;
  margin-left: 2vw;
}

.NextBtnFld{
  margin-top: 10vw;
  margin-bottom: calc(var(--vh, 1vh) * 15);
}

.Nextbtn{
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
    width: 100%;
    background-color:#6DE67C;
  }

  .MsgFld{
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    text-align: initial;
    width: 300px;
  }

  .Cracker{
    font-size: 70px;
  }

  .AppealFld{
    margin: 75px 0 0 0;
    display: flex;
    justify-content: space-between;
    text-align: initial;
    flex-flow: column;
  }

  .Topics{
    width: 370px;
    font-size: 25px;
    margin-bottom: 10px;
    margin-left: 10px;
    }

  .NextBtnFld{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .Nextbtn{
    font-size: 40px;
    color: #FFFFFF;
    border-radius: 20px;
    padding: 15px 100px;
    background-color: #6DE67C;
  }

}

</style>