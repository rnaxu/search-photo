<template>
  <div id="app">
    <head-bar></head-bar>
    <search-box></search-box>
    <container></container>
    <foot-bar></foot-bar>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HeadBar from './components/HeadBar'
import SearchBox from './components/SearchBox'
import Container from './components/Container'
import FootBar from './components/FootBar'

export default {
  name: 'app',
  components: {
    HeadBar,
    SearchBox,
    Container,
    FootBar
  }
}
</script>

<style lang="postcss">
@import './css/setting/_var.css';
@import './css/setting/_media.css';
@import './css/base/_reset.css';
@import './css/base/_default.css';
</style>
