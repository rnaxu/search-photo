<template>
  <div class="container">
    <card v-for="photo in photos" :photo="photo"></card>
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

<style scoped>
@import '../css/_var.css';
@import '../css/_mixin.css';

.container {
  width: 810px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @mixin max-screen $bp-md {
    width: 540px;
  }
  @mixin max-screen $bp-sm {
    width: 270px;
  }
}
</style>
