<template>
  <div id="app" class="container mt-5">
  <h2>ユーザ登録画面</h2>
  <div class="row">
      <div class="col-sm-8">
          <form v-on:submit.prevent="registerUser">
              <div class="form-group">
                  <label for="email">メールアドレス:</label>
                  <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">パスワード:</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>
              <button type="submit" class="btn btn-info">登録</button>
          </form>
      </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VideoComponent from '@/components/VideoComponent.vue';
import LiveList from  '@/components/LiveList.vue';
import SiteLimit from  '@/components/SiteLimit.vue';

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    VideoComponent,
    LiveList,
    SiteLimit
  },
});
</script>

<style scoped lang="scss">

#section1{
 font-family: 'Kosugi Maru', sans-serif;
 display: flex;
 margin-top: 3.5vw;
 background-color: #f9fcff;
}

</style>

