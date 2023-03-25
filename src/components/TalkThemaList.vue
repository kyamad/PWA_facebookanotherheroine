<template>
  <ul class="TalkThema-List-ul">
    <li v-for="item , i in topics" v-bind:key="i" class="TalkThema-List-li" @click="ThemaChoice(item.name)">
      <div class="TalkThema-List-div">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRoute} from 'vue-router';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: 'TalkThemaList',
  data: function(){
    return{
      topics: [
        {name:"自分が体験した衝撃的な話"},
        {name:"聞いた中で一番衝撃的な話"},
        {name:"大変だった話"},
        {name:"大変だったらしい話"},
        {name:"大変そうだった話"},
        {name:"許せない話"},
        {name:"許されたい話"},
        {name:"一生忘れない話"},
        {name:"人生の話"},
        {name:"我慢できない話"},
        {name:"大体ウケる話"},
        {name:"ここだけの話"},
        {name:"しょうもない話"},
        {name:"怖かった話"},
        {name:"怖い話"},
        {name:"好きなものの話"},
        {name:"痛い話"},
        {name:"イタい話"},
        {name:"墓場まで持っていく話"},
        {name:"オカンの話"},
        {name:"オトンの話"},
        {name:"友達の話"},
        {name:"想いが爆発した話"},
        {name:"物が爆発した話"},
        {name:"むず痒い話"},
        {name:"美味しかった話"},
        {name:"天然な人の話"},
        {name:"飯テロ話"},
        {name:"苦労した話"},
        {name:"推しの話"},
        {name:"自分の家族観"},
        {name:"特殊な話"},
        {name:"短い話"},
        {name:"一か八かの話"},
        {name:"細かすぎる話"},
        {name:"悲しい話"},
        {name:"過去一番遠出をした時の話"},
        {name:"変な先輩の話"},
        {name:"盛大にミスった人の話"},
        {name:"潔癖症を見た話"},
        {name:"浮気をした話"},
        {name:"浮気をされた話"},
        {name:"会社で熱くなった話"},
        {name:"抽選(懸賞)に当たった話"},
        {name:"不思議な話"},
        {name:"若干損した話"},
        {name:"最高にロックな話"},
        {name:"好きな音楽とそれを知ったきっかけ"},
        {name:"好きなゲームの好きなとこ"},
        {name:"好きな映画の好きなとこ"},
        {name:"好きな漫画の好きなとこ"},
        {name:"自分だけの地味な趣味"},
        {name:"理解されない趣味"},
        {name:"これのここが好きなんです"},
        {name:"くぅ〜！この瞬間よ！！"},
        {name:"ぜってぇ忘れねぇからな！！！！"},
        {name:"うるさいうるさい！！"},
        {name:"だぁ！かぁ！らぁ！！"},
        {name:"一番○○！！"},
        {name:"はぁ！！（クソデカため息）"},
        {name:"マジで大好き！！"},
        {name:"マジかよ！！"},
        {name:"またかよ！！"},
        {name:"最強かよ！！"},
        {name:"ねぇちょっと聞いて！！"},
        {name:"よーし、推し活しちゃお！！"},
        {name:"懲り懲りだよ！！"},
        {name:"見ちゃった！！"},
        {name:"快...感...！！"},
        {name:"だから言ったのに！！"},
        {name:"信じてたのに！！"},
        {name:"人生で一番しんどかった瞬間"},
        {name:"失敗談"},
        {name:"甘酸っぱい思い出"},
        {name:"これだけはヤメておけ！"},
        {name:"人生で輝いた瞬間"},
        {name:"自分はこれで泣きました"},
        {name:"周りにいたぶっ飛んだ人の話"},
        {name:"学校の良い思い出"},
        {name:"学校の嫌なエピソード"},
        {name:"人生を変えた○○"},
        {name:"人生最大の興奮"},
        {name:"私の人生目次録"},
        {name:"正直この人に嫉妬してる"},
        {name:"会社の嫌いな上司"},
        {name:"過去最大の怒り"},
        {name:"アレンジレシピを教えて！"},
        {name:"もしも海外に永住するなら"},
        {name:"もしも校長になったら"},
        {name:"もしも首相になったら"},
        {name:"もしも宝くじが当たったら"},
        {name:"もしもドラえもんがいたら"},
        {name:"もしも願いが叶うなら"},
        {name:"もしも○○が○○なら"},
        {name:"もしも学生に戻ったら"},
        {name:"もしも一つだけ才能が芽生えたら"},
        {name:"もしも何でも1匹ペットを飼えるなら？"},
        {name:"もしも皆で文化祭をやるなら？"},
        {name:"もしも皆で修学旅行に行くなら？"},
        {name:"人生の野望"},
        {name:"今の悩み"},
        {name:"半生を語って！"},
        {name:"あの時、ああしておけば良かったなぁ"},
        {name:"人生で吐いた一番強い言葉"},
        {name:"人生１番の波乱"},
        {name:"人生で影響を受けた作品"},
        {name:"キチゲの発散方法"},
        {name:"歳とったな〜と思う瞬間"},
        {name:"自分、めっちゃ良い奴ですわ"},
        {name:"自分、めっちゃクズですわ"},
        {name:"私のトラウマ"},
        {name:"私の黒歴史"},
        {name:"子供の頃の誕生日エピソード"},
        {name:"子供の頃のクリスマスエピソード"},
        {name:"私、潔癖症なんです"},
        {name:"私、ズボラなんです"},
        {name:"私だけのヒーローのエピソード"},
        {name:"私が持ってる強迫観念"},
        {name:"私のアレルギー"},
        {name:"私の初恋"},
        {name:"私の変かもしれないところ"},
        {name:"これだけはやめておけ"},
        {name:"これだけは言わせてくれ"},
        {name:"これだけはやめてくれ"},
        {name:"これだけのために頑張った話"},
        {name:"これだけは捨てられねんだ"},
        {name:"え、これだけ？"},
        {name:"※「はぁ！！？」でオチます"},
        {name:"※オチはありません"},
        {name:"※ただの虫でした"},
        {name:"※ただの勘違いでした"},
        {name:"※夢オチ"},
        {name:"※作り話です"},
        {name:"※キレイな表現を使っています"},
        {name:"※偏った考え方です"},
        {name:"※らしいです"},
        {name:"※めちゃくちゃ盛ってます"},
        {name:"※真面目に話してます"},
        {name:"※ド主観です"},
        {name:"※ですよね"},
        {name:"※偏見です"},
        {name:"※嘘です"},
        {name:"※マジの話です"},
        {name:"化け物の声で今日あった話"},
        {name:"裏声で話す噂話"},
        {name:"ひそひそ声で話すどうでもいい話"},
        {name:"嫌な話を良い話風に"},
        {name:"感動的な雰囲気でしょうもない話し"},
        {name:"楽しみにしてることをダルそうに話してください"},
        {name:"怖い話風な面白い話"},
        {name:"嬉しい話を怒りながら話してください"},
        {name:"モノマネタイム"},
        {name:"一人芝居タイム"},
        {name:"過去最高のイケボタイム"},
        {name:"過去最高のカワボタイム"},
        {name:"自己紹介テンプレを作ろう！"},
        {name:"私の年代あるある"},
        {name:"短い話"},
        {name:"過去最大のフラグ発言タイム"},
        {name:"過去最大の思わせぶりタイム"},
        {name:"もう好きって言いなよ！"},
        {name:"語尾に「ヤンス」をつけてシビアな話"},
        {name:"春にまつわるエピソード"},
        {name:"夏にまつわるエピソード"},
        {name:"秋にまつわるエピソード"},
        {name:"冬にまつわるエピソード"},
        {name:"雨にまつわるエピソード"},
        {name:"雪にまつわるエピソード"},
        {name:"繁華街にまつわるエピソード"},
        {name:"電車にまつわるエピソード"},
        {name:"海にまつわるエピソード"},
        {name:"プールにまつわるエピソード"},
        {name:"深夜にまつわるエピソード"},
        {name:"夜明けにまつわるエピソード"},
        {name:"タバコにまつわるエピソード"},
        {name:"遊園地にまつわるエピソード"},
        {name:"自転車にまつわるエピソード"},
        {name:"痛みにまつわるエピソード"},
        {name:"クリスマスにまつわるエピソード"},
        {name:"部活にまつわるエピソード"},
        {name:"漫画にまつわるエピソード"},
        {name:"鍵にまつわるエピソード"},
        {name:"会社にまつわるエピソード"},
        {name:"給食にまつわるエピソード"},
        {name:"テレビにまつわるエピソード"},
        {name:"おもちゃにまつわるエピソード"},
        {name:"ゲームにまつわるエピソード"},
        {name:"犬にまつわるエピソード"},
        {name:"猫にまつわるエピソード"},
        {name:"ゲームセンターにまつわるエピソード"},
        {name:"屋上にまつわるエピソード"},
        {name:"映画にまつわるエピソード"},
        {name:"秘密にまつわるエピソード"},
        {name:"一難去ってまた一難なエピソード"},
        {name:"怪我の功名 なエピソード"},
        {name:"地獄で仏に会う なエピソード"},
        {name:"事実は小説よりも奇なり なエピソード"},
        {name:"血で血を洗う なエピソード"},
        {name:"泣きっ面にハチ なエピソード"},
        {name:"好きな歴史エピソード"},
        {name:"一番太ってた時のエピソード"},
        {name:"一番痩せてた時のエピソード"},
        {name:"大怪我をした時のエピソード"},
        {name:"好きなアニメのエピソード"},
        {name:"好きな漫画のエピソード"},
        {name:"お母さんになりきっています"},
        {name:"お父さんになりきっています"},
        {name:"ご老人になりきっています"},
        {name:"5歳になりきっています"},
        {name:"先生になりきっています"},
        {name:"おっちゃんになりきっています"},
        {name:"おばちゃんになりきっています"},
        {name:"天才になりきっています"},
        {name:"アーティストになりきっています"},
        {name:"カリスマになりきっています"},
        {name:"世界で一番モテてる人になりきっています"},
        {name:"バターの香り...思い出したのは？"},
        {name:"プールの香り...思い出したのは？"},
        {name:"祭りの喧騒...思い出したのは？"},
        {name:"笑い声...思い出したのは？"},
        {name:"怒鳴り声...思い出したのは？"},
        {name:"どうしてそうなった"},
        {name:"まさかこんなことになるとは・・・"},
        {name:"これ、おすすめ！"},
        {name:"自分だけの人生ライフハック"},
        {name:"これは【あくまで】友達の話なんですけど…"},
        {name:"私だけが知ってる注意点"},
        {name:"駅で見かけた良い感じの異性"},
        {name:"街で見かけた癒やし"},
        {name:"ねえ、知ってる？"},
        {name:"最高の誕生日サプライズシチュエーション"},
        {name:"私の推しポイント"},
        {name:"プラマイ0でした"},
        {name:"天は二物を与えないんじゃないの！？"},
        {name:"過去の自分に声をかけてあげてください"},
        {name:"案件のつもりで何かを紹介してください"},
        {name:"存分にオタクを発揮してください"},
        {name:"私の取扱説明書"},
        {name:"うめぇ飯の話をしてください"},
        {name:"フェチについて熱く語って！"},
        {name:"考えないようにしてること"},
        {name:"これできる人ほんとすごいと思う"},
        {name:"2000円以内のおすすめ商品"},
        {name:"5000円以内のおすすめ商品"},
        {name:"おすすめの10,000円の使い方"},
        {name:"特別に教える裏ワザ"},
        {name:"おばあちゃんの奇特な行動"},
        {name:"おじいちゃんの奇特な行動"},
        {name:"あの頃はこれが怖かったなぁ"},
        {name:"真理を教えてあげる。みんなには内緒だよ？"},
        {name:"あなたの個人的ニュース！！"},
      ],
      num:0,
      Randomitem:"",
    }
  },
  methods:{
    ThemaChoice(name:string){
      FBRTDB.ThemaChoice("Talk",name,this.id)
      this.$emit("onClick", "false");
    },

    RandomChoice(){
      this.num = Math.floor(Math.random() * this.topics.length)
      this.Randomitem = this.topics[this.num].name
      this.ThemaChoice(this.Randomitem)
    }
  },
  setup () {
    const route = useRoute();
    let  id  = JSON.stringify(route.params.id).replace(/"/g, "");
    
    return {
      id,
    }
  },

});
</script>

<style scoped lang="scss">

body {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

template {
  display: block;
}

.TalkThema-List-ul{
 display: flex;
 position: absolute;
 width: 100%;
 height: 85%;
 list-style: none;
 flex-wrap: wrap;
 overflow: scroll;
 overflow-x: hidden;
 justify-content: space-around;
}

.TalkThema-List-li{
 display: flex;
 margin: 0.5vw;
 height: 20%;
 width: 30%;
 border-radius: 1vw;
 background-color: rgb(56, 54, 53, 0.8);
 color: #FFFFFF;
 cursor: pointer;
}

.TalkThema-List-li:hover{
  background-color: rgb(56, 54, 53, 1);
}

.TalkThema-List-div{
 display: block;
 margin: auto;
 padding: 0 1vw;
 font-size: 1vw;
}

</style>
