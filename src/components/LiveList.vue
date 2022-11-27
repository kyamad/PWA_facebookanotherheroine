<template>
    <li class="list">
        <div class="samuneset">
            <a href="#" class ="userURL"><img src="../assets/aikon.png"></a>
            <div class="taiandsam">
                <a href="#" class ="userURL"><p class="username">ユーザー名ユーザー名ユーザー名</p></a>
                <a href="#" class ="linkURL"><p class="samunemoji">タイトルタイトルタイトルタイトル</p></a>
            </div>
        </div>
        <a href="#" class ="linkURL"><img src="../assets/サムネ.jpg"></a>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/sass/mixin.scss';

.linkURL{
 text-decoration: none;
 color: #383635;
}

.list{
 width: 30vw;
 white-space: nowrap;
 overflow: hidden;
 margin: 1vw;
 margin-bottom: 0;
 border-radius: 0.5vw;
 font-size: 1vw;
 background-color: #FFFFFF;
}

.linkURL img{
 width: 100%;
 border-radius: 0.5vw;
}

.samuneset{
 display: flex;
}

.userURL{
 display: flex;
 text-decoration: none;
 color: #a3a3a2;
}

.userURL img{
 width: 5vw;
}

.username{
 margin-top: 1vw; 
}

.taiandsam{
 margin: auto 0;
}

</style>