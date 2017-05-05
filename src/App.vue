<template>
  <div id="app">
    <head-bar></head-bar>
    <search-box></search-box>
    <card v-for="photo in photos" :photo="photo"></card>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HeadBar from './components/HeadBar'
import SearchBox from './components/SearchBox'
import Card from './components/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['photos'])
  },
  components: {
    HeadBar,
    SearchBox,
    Card
  }
}
</script>

<style>
@import './css/_var.css';
@import './css/_reset.css';
@import './css/_default.css';
</style>
