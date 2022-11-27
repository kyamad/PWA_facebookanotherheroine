<template>
    <div class="saisyo">
        <p class="mm3">残り:分</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style scoped lang="scss">
.saisyo{
  width: 100%;
  display: none;
  background-color: #383635;
  color: #FFFFFF;
  font-size: 3vw;
}

.mm3{
  margin: 1vw 0vw 1vw 10vw;
  }

</style>
