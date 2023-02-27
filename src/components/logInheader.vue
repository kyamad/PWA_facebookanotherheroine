<template>
    <header>
        <ul class="login">
            <li class="m1"><router-link to="/" class ="logo"><img src="../assets/S__10788901.jpg"></router-link></li>
            <li class="m3"><a href="#" class ="linkURL"> イベント </a></li>
            <li class="m4"><a href="#" class ="linkURL"> 雑談 </a></li>
            <li class="m5"><a href="#" class ="linkURL"> ゲーム </a></li>
            <li class="m6"><a href="#" class ="linkURL"> つゆだく </a></li>
            <li class="m7"><a href="#" class ="linkURL"> ラジオ </a></li>
            <li class="m8"><a href="#" class ="linkURL"> リクエスト部屋 </a></li>
            <li class="livem2"><router-link v-bind:to="{
                name: 'LiveStreaming',
                params: { id } }" 
                class ="livebtn blue"> 配信する！ </router-link></li>
            <li class="livem2"><a href="#" class ="livebtn" @click="Logout"> ログアウト </a></li>
            <li class="livem3"><a href="#" class ="aikon"><img :src="IconImg"></a></li>
        </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import firebaseUtils from '../firebaseUtils';
import router from '../router'
import store from '../store';

export default defineComponent({
    data: function() {
        return{
            // IconImg:"",
            id: store.getters['userid']
        }
    },
    methods: {
        Logout: function(){
            signOut(auth).then(() => {
                alert("ログアウト完了！");
                firebaseUtils.onAuthStateChanged();
                router.push('/');
            }).catch((error) => {
                alert("ログアウトがうまくいきませんでした。時間をおいて再度お試しください。")
            });
        }
    },
    setup () {
        let IconImg:any = reactive([])
        IconImg = store.getters['userphotoURL'] as string || "";

        return{
            IconImg,
        }
    },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/sass/mixin.scss';

header{
 position: fixed;
 top: 0; left: 0;
 width:100%;
 margin:0 auto;
 background-color: white;
 opacity: 1;
 z-index: 80;
}

a{
    text-decoration: none;
    color: #000000;
}

.login{
 @include KosugiMaruNotoSerifJPNomal;
 display: flex;
 list-style: none;
 font-size: 1.5vw;
 padding: 0;
 border-bottom: 0.2vw solid #a9a9a9;
}

.m1{
 text-decoration: none;
 margin: 0.5vw 4vw 0vw 1.5vw;
}

.m1 img{
 width: 10vw;
 border: 0.2vw solid
}

.logo{
 font-size: 2.2vw;
 padding: 1.5vw 1vw 0vw 2.5vw;
 text-decoration: none;
 color: #383635;
}

.m3,.m4,.m5,.m6,.m7,.m8{
 margin: 1.2vw 2.5vw 0 0;
}

.login li:nth-of-type(8) {
 margin-left: auto;
}

.login li:nth-of-type(9) {
 margin-right: 1vw;
 }

.blue {
 margin-right: 2.5vw;
 background: #007bbb; /* 背景赤 */
 color: #FFFFFF; /* 文字白 */
}

.livem2{
 font-size: 1vw;
 margin-top: 1.7vw;
}

.livebtn{
 padding: 0.5vw 2vw; /* 上下の余白、左右の余白 */
 border-radius: 0.5vw; /* 角を丸くする */
 box-shadow: 0.2vw 0.35vw 0.1vw #cccccc;/* 影 */
 border:0.2vw solid #696969; /* 囲み線 */
 text-decoration: none;    
}

.aikon img{
 width: 4vw;
 margin: 0.3vw 1.8vw 0 1vw;
}
</style>
