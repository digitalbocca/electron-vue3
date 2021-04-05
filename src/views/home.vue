<template lang="pug">
.home-container
  h1.page-title Hello Vue 3
  .install-code
    p npm init @digitalbocca/edb-app electron-vue3 .
  .copy-text
    p &copy;2021 - Estúdio Digital Bocca - {{ version }}
</template>

<script>

import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const version = store.getters.appVersion

    return {
      version
    }
  }
}

</script>