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
.card {
  margin: 10px;
  position: relative;
  width: 250px;
  height: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  &__img {
    object-fit: cover;
  }
  &__bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, .25);
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
  }
  &__headline {
    color: #fff;
    flex: 1;
  }
  &__button {
    color: var(--color-accent);
    font-size: var(--font-size-base);
  }
}
</style>
