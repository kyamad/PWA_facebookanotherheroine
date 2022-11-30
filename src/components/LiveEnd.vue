<template>
    <div class="liveEndView">
        <div class="liveEndfld">
            <div class="EndfldTop">
                <p class="Endendmsg">配信終了！</p>
                <div class="endkirinuki">切り抜き</div>
                <a href="/livepage.php" class="Restart">再配信</a>
            </div>
            <div class="Endfld">
                <p class="giftmsg">ギフトをくれたユーザー</p>
                <ul class="givegiftuser"><!--ここもcomponents化-->
                    <li class="giveuser"><a href="#" class ="guserURL"><img class="giveuserimg" src="img/aikon.png"><div class="gusername">ユーザー名ユーザー名</div></a><div class="giftpoint">1500Pt</div></li>
                    <li class="giveuser"><a href="#" class ="guserURL"><img class="giveuserimg" src="img/aikon.png"><div class="gusername">ユーザー名ユーザー名ユーザー名</div></a><div class="giftpoint">1500Pt</div></li>
                </ul>
            </div>
            <div class="manneriAlert">お疲れさまでした！いい配信だったよ！</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style scoped lang="scss">
/*全般
=======================================*/

*{
 margin-block-start: 0;
 margin-block-end: 0;
 margin-inline-start: 0;
 margin-inline-end: 0;
 padding-inline-start: 0;
}

body {
  margin: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

  /*ライブ終了画面
  ---------------------------------------*/
  .liveEndView{
    display: none;
    width: 60vw;
    height: 33.75vw;
    text-align: center;
    border: 0.15vw solid;
  }

  .liveEndfld{
    background-color: #000000;
    color: #FFFFFF;
    height: 100%;
  }

  .EndfldTop{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5vw;
    padding: 1vw 0 0;
  }

  .Endendmsg{
    font-size: 1.7vw;
  }

  .endkirinuki{
    border: 0.1vw solid #FFFFFF;
    padding: 0.5vw 1vw;
    cursor: pointer;
  }

  .Restart{
    border: 0.1vw solid #FFFFFF;
    padding: 0.5vw 1.5vw;
    text-decoration: none;
    color: #FFFFFF;
  }

  .Endfld{
    margin-top: 1vw;
  }

  .giftmsg{
    font-size: 1.5vw;
  }

  .givegiftuser{
    background-color: #FFFFFF;
    justify-content: space-around;
    width: 40%;
    height: 20vw;
    margin: auto;
    margin-top: 1vw;
    list-style: none;
    overflow: scroll;
    overflow-x: hidden;
  }

  .giveuser{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5vw;
    color: #000;
  }

  .guserURL{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  .giveuserimg{
    width: 3vw;
  }

  .gusername{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 14vw;
    font-size: 1.2vw;
  }

  .giftpoint{
    font-size: 1.3vw;
  }

  .manneriAlert{
    display: inline-block;
    margin-top: 1.3vw;
    font-size: 1.3vw;
    padding: 1.2vw 1vw;
    border: 0.2vw solid;
  }

</style>
