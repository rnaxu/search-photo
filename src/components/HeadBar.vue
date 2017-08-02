<template>
  <header class="headBar">
    <div class="headBar__body">
      <h1 class="headBar__headline">Search photo</h1>
      <p class="headBar__caption">Powerd by Flickr</p>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
@import '../css/_var.css';
@import '../css/_mixin.css';

.headBar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  &__body {
    background-color: var(--color-primary);
    padding: 30px;
    @mixin max-screen $bp-sm {
      padding: 15px;
    }
  }
  &__headline {
    color: #fff;
    font-size: var(--font-size-lg);
  }
  &__caption {
    margin-top: 10px;
    color: var(--color-light-primary);
    @mixin max-screen $bp-sm {
      margin-top: 5px;
    }
  }
}
</style>
