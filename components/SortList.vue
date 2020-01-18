<template lang="pug">
  section.sort
    div.container
      div.sort-wrapper
        div.sort-action
          div.sort-action__group
            a.sort-action__list-button.active-link(
              href="#"
              :class="{'focus-link': tab}"
              @click.prevent="(tab = !tab)"
            )
              span.sort-action__list-text Породы
              i.fas.fa-chevron-down.sort-action__list-icon
            a.sort-action__change-button.button-rounded.button-rounded--blue(
              href="#"
              @click.prevent="closePage"
              v-if="buttonBreed"
            )
              span.sort-action__change-text {{ buttonBreed }}
              i.fas.fa-times.sort-action__change-icon

          a(href="#" @click.prevent="setVoid").sort-action__check-button.active-link
            span.sort-action__check-text Сортировка по породе
            i.far.fa-check-square.sort-action__check-icon
        
        div.sort-list(
          v-if="tab"
        )
          div.sort-list__group(
            v-for="(value, index) in breedAll" 
            :key="index"
          )
            span.sort-list__group-title(v-if="value.length === 1") {{ value }}
            a.button-rounded.button-rounded--grey.active-link(
              v-else 
              href="#"
              @click.prevent="openBreed(value)"
            ) {{ value | uppercase }}
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data: () => ({
    tab: false
  }),
  methods: {
    ...mapMutations(['setButtonBreed', 'clearButtonBreed']),

    openBreed(name) {
      this.tab = false;
      this.setButtonBreed(name);
      this.$router.push('/' + name);
    },

    closePage() {
      this.tab = false;
      this.clearButtonBreed();
      this.$router.push('/');
    },

    setVoid() {
      alert('Просто кнопка!');
    }
  },
  computed: {
    breedAll() {
      return this.$store.getters['breedAll'];
    },
    buttonBreed() {
      return this.$store.getters['buttonBreed'];
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

.sort {
  &-wrapper {
    padding: 50px 0;
  }

  &-action {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__group {
      display: flex;
      align-items: center;
    }

    &__change-button {
      display: flex;
      align-items: center;
    }

    &__change-text {
      margin-right: 8px;
    }

    &__change-icon {
      @include fs('small');
    }

    &__list {
      &-button {
        display: flex;
        align-items: center;
        color: $grey;
        padding-bottom: 2px;
        border-bottom: 1px dashed $grey;
        margin-right: 20px;
      }

      &-text {
        margin-right: 10px;
        @include fs('base');
      }

      &-icon {
        font-size: 10px;
      }
    }

    &__check {
      &-button {
        color: $grey;
      }

      &-text {
        margin-right: 14px;
        @include fs('base');
      }

      &-icon {
        font-size: 14px;
      }
      
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 34px;
    margin-bottom: -16px;

    &__group {
      display: flex;
      margin-bottom: 16px;

      &-title {
        text-transform: uppercase;
        margin-right: 16px;
        color: $grey;
        @include fs('base-plus');
      }
    }
  }
}

.focus-link {
  .sort-action__list-icon {
    transition: .3s;
    transform: rotate(180deg);
  }
}

</style>