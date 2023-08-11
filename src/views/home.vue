<script setup>

import { useAppStore } from '@/stores/app-store.js'

const appStore = useAppStore()

</script>

<template lang="pug">
.home-container
  h1.page-title Hello Vue 3
  .install-code
    p npm init @digitalbocca/edb-app electron-vue3 .
  .copy-text
    p &copy;2023 - Estúdio Digital Bocca - {{ appStore.getVersion }}
</template>
