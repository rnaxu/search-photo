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

<style scoped>
.searchBox {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__text {
    width: 300px;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: solid 1px var(--color-divider);
    color: var(--color-primary-text);
    &::-webkit-input-placeholder {
      color: var(--color-divider);
    }
    &:focus {
      border-bottom: solid 1px var(--color-dark-primary);
      outline: none;
    }
  }
  &__submit {
    width: 34px;
    height: 34px;
    color: var(--color-dark-primary);
    font-size: var(--font-size-base);
    cursor: pointer;
  }
}
</style>
