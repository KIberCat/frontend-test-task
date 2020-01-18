<template lang="pug">
  div.main
    Navbar

    section
      components(:is="toggleComponent")

      nuxt

</template>

<script>
import Navbar from '@/components/Navbar'
import SortList from '@/components/SortList'

export default {
  components: {
    Navbar,
    SortList
  },
  computed: {
    toggleComponent() {
      return this.$route.name === 'Favorites' ? false : 'SortList';
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    min-height: 100vh;
    background: $main-bg;
  }
</style>
