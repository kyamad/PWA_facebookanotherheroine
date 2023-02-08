<template>
    <header>
        <ul class="login">
            <li class="m1"><router-link to="/" class ="logo"><img src="../assets/S__10788901.jpg"></router-link></li>
            <li class="m3"><a href="#" class ="linkURL"> イベント </a></li>
            <li class="m4"><a href="#" class ="linkURL"> 雑談 </a></li>
            <li class="m5"><a href="#" class ="linkURL"> ゲーム </a></li>
            <li class="m6"><a href="#" class ="linkURL"> つゆだく </a></li>
            <li class="m7"><a href="#" class ="linkURL"> ラジオ </a></li>
            <li class="m8"><a href="#" class ="linkURL" > リクエスト部屋 </a></li>
            <li class="m2"><a href="#" class ="btn blue" @click="SignUpOpn"> 新規登録 </a></li>
            <li class="m2"><a href="#" class ="btn gold" @click="SignInOpn"> ログイン </a></li>
        </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data: function(){
        return{
        }
    },
    methods: {
        SignUpOpn: function(){
            this.$emit("onClick", 1)
        },
        SignInOpn: function(){
            this.$emit("onClick", 2)
        },
    }
});
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixin.scss';
header{
position: fixed;
top: 0;
left: 0;
width: 100%;
margin: 0 auto;
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
 
.m2{
 font-size: 1vw;
 margin-top: 1.5vw;
}

.btn{
 font-family: none;
 padding: 0.5vw 3vw; /* 上下の余白、左右の余白 */
 border-radius: 3vw; /* 角を丸くする */
 box-shadow: 0.2vw 0.35vw 0.1vw #cccccc;/* 影 */
 border:0.2vw solid #696969; /* 囲み線 */
 text-decoration: none;    
}

.blue {
 margin-right: 2.5vw;
 background: #007bbb; /* 背景赤 */
 color: #FFFFFF; /* 文字白 */
}

.gold{
 margin-right: 5vw;
 background: #f8e58c; /* 背景黄 */
 color: #383635; /* 文字黒 */
}

</style>
