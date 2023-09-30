<template>
  <main id="SCT-Fld">
    <section id="SCT-Section">
      <div class="SCT-Ground-Work">
        <div class="Header-Area">
          <div class="Close-Back-Btn" @click="Close">戻る</div>
          <div class="SCT-Header-Fld">
            <div class="SCT-Header-Text">特定商取引法に基づく表記</div>
          </div>
          <div class="Under-Line"></div>
        </div>
        <div class="SCTText">
          ■販売業者<br>
          株式会社カラット<br>
          <br>
          ■販売責任者<br>
          吉住　慎太郎<br>
          <br>
          ■所在地<br>
          東京都新宿区高田馬場3丁目3番23号 シャトレ高田馬場402<br>
          <br>
          ■電話番号<br>
          03-5358-9845<br>
          <br>
          ■お問い合わせ先<br>
          support@123chat.jp<br>
          ※お手数では御座いますが「@123chat.jp」のドメイン受信設定を行って下さいませ。<br>
          サポート対応時間：平日9：00～18：00<br>
          メール対応時間：7：00～23：00<br>
          <br>
          ■販売価格<br>
          商品ごとに設定。該当ページにて販売価格（消費税を含む）を表示。（各サービス提供は、10個～1000個）<br>
          ゴールドコインは、取得した日から180日を有効期間とします。<br>
          <br>
          ■販売価格以外の費用<br>
          インターネット接続に関わる通信回線等の諸費用。<br>
          <br>
          ■代金のお支払い時期及びお支払い方法<br>
          （１）お支払い時期<br>
          ・クレジット決済<br>
          ・ビットキャッシュ決済(電子マネー決済)<br>
          スマートフォンからの利用時は「購入する」ボタン、PCにおいては「アイテムを購入する」ボタン押下時<br>
          <br>
          （２）お支払い方法<br>
          ・クレジット決済(VISA/MASTER/JCB)<br>
          ・ビットキャッシュ決済(電子マネー決済)<br>
          <br>
          ■提供時間<br>
          画面での購入手続き終了後、すぐにお引渡しいたします。<br>
          ※システム上の都合により、付与に若干お時間を頂く場合がございます。<br>
          <br>
          ■商品等の返品の可否<br>
          商品の性質上、購入後の返品、キャンセルは出来ません。<br>
          <br>
          ■対応機種<br>
          iOS：iOS 6以上/safari（最新版）<br>
          Android：Android 4.1以降/Google Chrome（最新版）<br>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'SCT',
  components: {
  },
  
  data: function(){
    return{
    }
  },

  methods: {
    Close: function(){
      this.$emit("onClick", false);
    }
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

#SCT-Fld{
  position: fixed;
  bottom: 0;
  background-color: rgba(255,255,255,0.9);
  overflow-x: hidden;
  width: 90%;
  height: calc(var(--vh, 1vh) * 99);
}

#SCTSection{
  overflow: scroll;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.SCT-Ground-Work{
}

.Header-Area{
  position: sticky;
  top: 0;
  width: 100%;
}

.Close-Back-Btn{
  font-size: 10pt;
  position: absolute;
  background-color: #FFFFFF;
  color: #000000;
  padding: 0px 15px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  top: 16px;
  left: 16px;
  z-index: 1;
}

.SCT-Header-Fld{
  border-radius: 15px 15px 0 0;
  background-image: url("../assets/another/notionheader.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
}

.Under-Line{
  background-color: rgba(255,255,255,0.9);
  height: 15px;
  width: 100%;
}

.SCT-Header-Text{
  padding: 25px;
  padding-top: 15px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 15px;
  color: #FFFFFF;
}

.SCTText{
  font-size: 12pt;
  padding: 0 8px;
  display: flex;
  flex-flow: column;
  text-align: left;
}

@media (min-width: 500px) {
  #section1{
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
    background-color: #000;
  }
}

</style>