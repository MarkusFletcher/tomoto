<script setup>
</script>

<template>
	<div class="tabs">
    <div class="tabs__item tabs__item--active">tomoto</div>
    <div class="tabs__item">short break</div>
    <div class="tabs__item">long break</div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: inline-flex;
  background-color: var(--color-dark-blue);
  height: 64px;
  border-radius: 32px;
  padding: 8px;

  &__item {
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 24px;
    cursor: pointer;

    &--active {
      background-color: var(--color-orange);
      color: var(--color-font-dark);
    }
  }
}
</style>