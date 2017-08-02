<template>
  <div id="app">
    <head-bar></head-bar>
    <search-box></search-box>
    <container></container>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HeadBar from './components/HeadBar'
import SearchBox from './components/SearchBox'
import Container from './components/Container'

export default {
  name: 'app',
  components: {
    HeadBar,
    SearchBox,
    Container
  }
}
</script>

<style lang="postcss">
@import './css/_customProperty.css';
@import './css/_reset.css';
@import './css/_default.css';
</style>
