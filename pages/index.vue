<template lang="pug">
  section.gallery
    div.container
      div.gallery-title
        CardImage(:item="imagesOne" :toggle-active="false" :name="imagesOne.src | spliceName")
        
      div.gallery-wrapper
        div.gallery-group(
          v-for="(value, index) in imagesRest" 
          :key="index"
        )
          CardImage(
            :item="value" 
            :toggle-active="false" 
            :name="value.src | spliceName"
          )
      
      footer.footer(ref="footer")

</template>

<script>
// import lazyLoad from '@/plugins/lazy.loading'
import CardImage from '@/components/CardImage'
import {mapActions} from 'vuex'

export default {
  async fetch({store}) {
    try {
      await store.dispatch('getBreedAll');
      await store.dispatch('getImages');
    } catch (e) {}
  },
  components: {
    CardImage
  },
  computed: {
    imagesRest() {
      return this.$store.getters['imagesRest'];
    },
    imagesOne() {
      return this.$store.getters['imagesOne'];
    }
  },
  methods: {
    ...mapActions(['getImages']),

    downloadImage() {
      this.getImages('updateImages');
    }
  },
  mounted() {
    this.$lazyLoad(this.downloadImage, this.$refs.footer);
  }
  // directives: {
  //   lazyLoad
  // }
}
</script>

<style lang="scss" scoped>
  .gallery {
    &-title {
      height: 512px;
    }

    &-wrapper {
      padding: 30px 0 46px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: 290px;
      grid-gap: 30px;
    }
  }

  .footer {
    padding: 20px;
  }

</style>