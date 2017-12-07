<template>
  <section class="card">
    <div class="card__layer">
      <h2 class="card__headline">{{photo.title}}</h2>
      <input @change="UPDATE_FAVORITES(photo)" type="checkbox" :id="photo.id" :checked="photo.favorite" class="card__check">
      <label :for="photo.id" class="card__label">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </label>
    </div>
    <img :src="photo.url" :alt="photo.title" width="250" height="250" class="card__img">
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { UPDATE_FAVORITES } from '../store/mutation-types'

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
