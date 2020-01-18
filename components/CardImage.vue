<template lang="pug">
  div.gallery-card(
    :style="{ backgroundImage: `url(${item.src})` }"
  )
    div.gallery-overlay
      a.gallery-overlay__button(
        href="#"
        @click.prevent="likeImage(item.src, toggle)"
      )
        i.fa-heart.gallery-overlay__icon(
          :class="[toggle ? 'fas' : 'far']"
        )
      span.gallery-overlay__name {{ name | uppercase }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    item: Object,
    toggleActive: Boolean,
    name: String
  },
  data: function () {
    return {
      toggle: this.toggleActive
    }
  },
  methods: {
    likeImage(src, active) {
      let arr = JSON.parse(localStorage.getItem('images')) || [];

      if (!active) {
        arr.push(src);
      } else {
        let index = arr.findIndex(item => item === src);
        arr.splice(index, 1);
      }

      localStorage.setItem('images', JSON.stringify(arr));

      this.toggle = !this.toggle;
    }
  },
  filters: {
    uppercase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery {
    
    &-title {
      .gallery-overlay__name {
        right: 50px;
        bottom: 50px;
        @include fs('big');
      }

      .gallery-overlay__button {
        left: 35px;
        top: 35px;
        @include fs('big');
      }
    }

    &-card {
        height: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        overflow: hidden;
      }

    &-overlay {
      position: relative;
      height: 100%;
      background: linear-gradient(1.42deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
      
      &__name {
        position: absolute;
        right: 25px;
        bottom: 25px;
        color: $white;
        @include fs('big-minus');
      }

      &__button {
        position: absolute;
        left: 25px;
        top: 25px;
        color: $white;
        @include fs('big-minus');
      }
    }
  }
</style>