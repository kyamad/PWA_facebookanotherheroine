<template>
  <main id="GroundWork">
    <section id="section1">
      <div class="ProgressFld">
        <div class="progBar">
            <p class="bar"></p>
        </div>
      </div>
      <div class="QuestionFld">
        <div class="QuestionText">あなたが関心のある<br>トピックはどれですが？</div>
      </div>
      <div class="AnserFld">
        <div class="Topics">
          <div class="choice1">美容</div>
          <div class="choice2">健康</div>
        </div>
        <div class="Topics">
          <div class="choice1">痩身</div>
          <div class="choice2">恋愛</div>
        </div>
        <div class="Topics">
          <div class="choice1">運動</div>
          <div class="choice2">食事</div>
        </div>
        <div class="Topics">
          <div class="choice1">コスメ</div>
          <div class="choice2">お金</div>
        </div>
        <div class="Topics">
          <div class="choice1">学習</div>
          <div class="choice2">副業</div>
        </div>
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
  name: 'TopicsView',
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
  width: 60%;
  background-color:#6DE67C;
}

.QuestionFld{
  font-size: 5vw;
}

.AnserFld{
  margin: 15vw 0 0 0;
}

.Topics{
  display: flex;
  color: #000000;
}

.choice1{
  font-size: 4vw;
  width: 17vw;
  border: 1vw solid;
  border-radius: 5vw;
  padding: 4vw 3vw;
  background-color: #FFF;
  margin-right: 3vw;
}

.choice2{
  font-size: 4vw;
  width: 17vw;
  border: 1vw solid;
  border-radius: 5vw;
  padding: 4vw 3vw;
  background-color: #FFF;
}

.NextBtnFld{
  margin-top: 5vw;
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
    width: 60%;
    background-color:#6DE67C;
  }

  .AnserFld{
    margin: 50px 0 0 0;
  }

  .choice1{
  font-size: 20px;
  width: 85px;
  border: 5px solid;
  border-radius: 25px;
  padding: 20px 15px;
  background-color: #FFF;
  margin-right: 15px;
}

.choice2{
  font-size: 20px;
  width: 85px;
  border: 5px solid;
  border-radius: 25px;
  padding: 20px 15px;
  background-color: #FFF;
}

  .QuestionFld{
    margin: 10px 0 0 0;
    font-size: 25px;
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