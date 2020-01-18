<template lang="pug">
  section.breed
    div.container
      div.breed-wrapper
        div.breed-group(v-for="(value, index) in breed" :key="index")
          CardImage(:item="value" :toggle-active="false" :name="$route.params.name")
</template>

<script>
import CardImage from '@/components/CardImage'
import {mapMutations} from 'vuex'

export default {
  async fetch({store, params}) {
    try {
      await store.dispatch('getBreed', params.name);
      await store.dispatch('getBreedAll');
    } catch (e) {}
  },
  components: {
    CardImage
  },
  methods: {
    ...mapMutations(['setButtonBreed', 'clearButtonBreed']),
  },
  computed: {
    breed() {
      return this.$store.getters['breed'];
    }
  },
  mounted() {
    this.setButtonBreed(this.$route.params.name)
  },
  destroyed() {
    this.clearButtonBreed();
  }
}
</script>

<style lang="scss" scoped>

  .breed {
    &-wrapper {
      padding: 30px 0 46px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 290px;
      grid-gap: 30px;
    }
  }

</style>