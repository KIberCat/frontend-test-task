<template lang="pug">

  section.navigation
    div.container
      nav.navigation-wrapper

        nuxt-link.navigation-logo(to="/")
          img(src="@/static/img/logo.png").navigation-logo__image
        
        nuxt-link.navigation-link.active-link(
          to="favorites"
          active-class="focus-link"
        )
          span.navigation-link__text Избранные песики
          i.far.fa-heart.navigation-link__icon

</template>

<style lang="scss" scoped>
  .navigation {
    background-color: $navigation-bg;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);

    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 100px;
      padding: 34px 0;
    }

    &-logo {
      width: 120px;
      height: 30px;
    }

    &-link {
      display: flex;
      align-items: center;
      color: $grey;

      &__text {
        margin-right: 10px;
        @include fs('base');
      }

      &__icon {
        font-size: 16px;
      }
    }
  }
</style>
