<script setup>
import { useTomotoStore } from '../stores/TomotoStore'

const tomotoStore = useTomotoStore()
const stageList = ['tomoto', 'short break', 'long break']
</script>

<template>
	<div class="tabs">
    <div class="tabs__item" :class="{'tabs__item--active': tomotoStore.currentStep== 'work'}">tomoto</div>
    <div class="tabs__item" :class="{'tabs__item--active': tomotoStore.currentStep== 'short break'}">short break</div>
    <div class="tabs__item" :class="{'tabs__item--active': tomotoStore.currentStep== 'long break'}">long break</div>
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
    transition: .3s;

    &--active {
      background-color: var(--color-orange);
      color: var(--color-font-dark);
    }
  }
}
</style>