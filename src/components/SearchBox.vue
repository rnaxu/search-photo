<template>
  <form @submit.prevent="SEARCH" class="searchBox">
    <input @change="CHANGE_KEYWORD($event.target.value)" type="text" class="searchBox__text" placeholder="e.g. cat">
    <button type="submit" class="searchBox__submit">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { CHANGE_KEYWORD, SEARCH } from '../vuex/mutation-types'

export default {
  methods: {
    ...mapActions([
      CHANGE_KEYWORD, SEARCH
    ])
  }
}
</script>

<style lang="postcss" scoped>
@import '../css/setting/_var.css';
@import '../css/setting/_media.css';
@import '../css/components/_searchBox.css';
</style>
