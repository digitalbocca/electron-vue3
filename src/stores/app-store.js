import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const version = ref('v0.4.0')

  const getVersion = computed(() => version.value)

  return {
    getVersion
  }
})
