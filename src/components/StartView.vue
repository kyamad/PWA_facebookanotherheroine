<template>
    <div class="BackGround">
        <div class="StartBtnFld">
            <div class="Startbtn" @click="Next">スタート</div>
        </div>
        <div class="Existing-Customer-Fld">
            <div class="Existing-Customer-Text">本アプリを既にご利用されている方</div>
        </div>
        <div class="Existing-Acount-Fld">
            <div class="Existing-Acount-Btn" @click="JumpSignInURL">既存アカウントで続行する</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EcHome',
    components: {
    },
    
    data: function(){
        return{
            SignInURL:""
        }
    },

    methods: {
        JumpSignInURL(){
            this.SignInURL = "http://abehiroshi.la.coocan.jp/"
            window.location.href = this.SignInURL
        },

        Next(){
            this.SignInURL = "http://192.168.11.12:8080/ec/p01"
            window.location.href = this.SignInURL
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

.BackGround{
    background-image: url("../assets/StartView.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
    display: flex;
    justify-content:flex-end;
    flex-flow: column;
    align-items: center;
}

.StartBtnFld{
    margin-bottom: 4vw;
}

.Startbtn{
    font-size: 8vw;
    color: #FFFFFF;
    border-radius: 4vw;
    padding: 3vw 20vw;
    background-color: #6DE67C;
}

.Existing-Customer-Fld{
    margin-bottom: 4vw;
    color: #FFFFFF;
}

.Existing-Customer-Text{
    display: flex;
    align-items: center; /* 垂直中心 */
    justify-content: center; /* 水平中心 */
    font-size:2vw;
}

.Existing-Customer-Text::before{
    border-top: 0.1vw solid;
    content: "";
    width: 21.5vw; /* 線の長さ */
    margin-right: 1vw
}

.Existing-Customer-Text::after{
    border-top: 0.1vw solid;
    content: "";
    width: 21.5vw; /* 線の長さ */
    margin-left: 1vw
}

.Existing-Acount-Fld{
    margin-bottom: calc(var(--vh, 1vh) * 20);
}

.Existing-Acount-Btn{
    color: #FFFFFF;
    font-size: 4vw;
}

</style>
