<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  // App全体の基本書体指定。
  // ただ、他の箇所の設定を見る限り Noto Sans JP , M Plus Rounded , Kosugi Maruの
  // いずれかを指定した方がいいかな？製作者の設定意図次第。
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
 margin-block-start: 0;
 margin-block-end: 0;
 margin-inline-start: 0;
 margin-inline-end: 0;
 padding-inline-start: 0;
}
</style>
