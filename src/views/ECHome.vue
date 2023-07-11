<template>
  <main id="GroundWork">
    <section id="section1">
      <StartView></StartView>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import StartView from '@/components/StartView.vue'

export default defineComponent({
  name: 'EcHome',
  components: {
    StartView
  },
  
  data: function(){
    return{
    }
  },

  methods: {
  },

  mounted(){
  }
});
</script>

<style scoped lang="scss">

#GroundWork{
  height: calc(100% - 50px);
}

#section1{
  display: block;
  text-align: center;
}


@media (min-width: 960px) {
  #section1{
    display: block;
    text-align: center;
  }
}

</style>