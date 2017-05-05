<template>
  <header class="headBar">
    <div class="headBar__body">
      <h1 class="headBar__headline">Search photo</h1>
      <p class="headBar__caption">Powerd by Flickr</p>
    </div>
  </header>
</template>

<style scoped>
.headBar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  &__body {
    background-color: var(--color-primary);
    padding: 30px;
  }
  &__headline {
    color: #fff;
    font-size: var(--font-size-l);
  }
  &__caption {
    margin-top: 10px;
    color: var(--color-light-primary);
  }
}
</style>
