<template lang="pug">
  section.favorites
    div.container
      div.favorites-wrapper
        div.favorites-group(
          v-for="(value, index) in images"
          :key="index"
        )
          CardImage(:item="value" :toggle-active="true" :name="value.src | spliceName")
</template>

<script>
import CardImage from '@/components/CardImage'

export default {
  components: {
    CardImage
  },
  data: () => ({
    images: []
  }),
  mounted() {
    let arr = JSON.parse(localStorage.getItem('images')) || [];
    this.images = arr.map(item => ({src: item}));
  }
}
</script>

<style lang="scss" scoped>
  .favorites {
    padding: 100px 0;
    &-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 290px;
      grid-gap: 30px;
    }
  }
</style>