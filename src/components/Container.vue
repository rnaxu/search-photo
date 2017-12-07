<template>
  <div class="container">
    <card v-for="photo in photos" :photo="photo" :key="photo.id"></card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card'

export default {
  computed: {
    ...mapGetters(['photos'])
  },
  components: {
    Card
  }
}
</script>

<style lang="postcss" scoped>
@import '../css/setting/_var.css';
@import '../css/setting/_media.css';
@import '../css/components/_container.css';
</style>
