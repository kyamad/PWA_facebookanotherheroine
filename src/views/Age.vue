<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="ProgressFld">
        <div class="progBar">
            <p class="bar"></p>
        </div>
      </div>
      <div class="QuestionFld">
        <div class="QuestionText">あなたの年齢は？</div>
      </div>
      <div class="AnserFld">
        <select v-model="InitialValue" class="AnserMenue">
          <option value="" disabled></option>  
          <option v-for="n in 100" :value="n" :key="n">
            {{ n }}
          </option>
        </select>
      </div>
      <div class="NextBtnFld">
          <div class="Nextbtn">次へ</div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'AgeView',
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
  width: 40%;
  background-color:#6DE67C;
}

.QuestionFld{
  font-size: 5vw;
}

.AnserFld{
  margin: 40vw 0 0 0;
}

.AnserMenue{
  width: 57vw;
  height: 15vw;
  border-radius: 3vw;
  overflow: scroll;
  font-size: 6vw;
  text-align: center;
}

.NextBtnFld{
  margin-top: 20vw;
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
    width: 40%;
    background-color:#6DE67C;
  }

  .AnserFld{
    margin: 100px 0 0 0;
  }

  .AnserMenue{
    width: 280px;
    height: 75px;
    border-radius: 6px;
    overflow: scroll;
    font-size: 30px;
    text-align: center;
  }

  .QuestionFld{
    margin: 10px 0 0 0;
    font-size: 25px;
  }

  .NextBtnFld{
    margin-top: 100px;
    margin-bottom: 200px;
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