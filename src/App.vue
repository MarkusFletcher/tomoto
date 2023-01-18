<script setup>
import VTabs from './components/Tabs.vue'
import VTimer from './components/Timer.vue'
import VOptionsButton from './components/OptionsButton.vue'
import VOptionsModal from './components/OptionsModal.vue'

import { useTomotoStore } from './stores/TomotoStore.js'

const tomotoStore = useTomotoStore()
</script>

<template>
  <header class="header">
    <div class="logo header__logo">
      tomoto
    </div>
  </header>
  <div class="tomoto">
    <v-tabs class="tomoto__tabs"></v-tabs>
    <v-timer class="tomoto__timer"></v-timer>
    <v-options-button></v-options-button>
  </div>
  <v-options-modal></v-options-modal>
  <!-- v-if="tomotoStore.settingsIsOpen" -->
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .logo {
    font-size: 32px;
    font-weight: bold;
  }

  .tomoto {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    &__tabs {
      margin: 0 auto 50px;
      z-index: 10;
    }
    &__timer {
      margin: 0 auto 40px;
    }
  }
</style>
