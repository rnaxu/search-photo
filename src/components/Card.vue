<template>
  <section class="card">
    <img v-bind:src="photo.url" alt="" width="250" height="250" class="card__img">
    <div class="card__bottom">
      <h2 class="card__headline">{{photo.title}}</h2>
      <button class="card__button">
        <!-- <i class="fa fa-heart" aria-hidden="true"></i> -->
        <i @click="UPDATE_FAVORITES(photo)" class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { UPDATE_FAVORITES } from '../vuex/mutation-types'

export default {
  methods: {
    ...mapActions([
      UPDATE_FAVORITES
    ])
  },
  props: {
    photo: Object
  }
}
</script>

<style lang="postcss" scoped>
@import '../css/setting/_var.css';
@import '../css/setting/_media.css';
@import '../css/components/_card.css';
</style>
