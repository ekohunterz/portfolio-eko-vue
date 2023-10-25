<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import FooterComponent from './components/FooterComponent.vue'
import LoadingPage from './components/LoadingPage.vue'

import { ref, onMounted } from 'vue'

const isLoad = ref(true)
onMounted(async () => {
  await simulateAsyncTask()

  isLoad.value = false
})

async function simulateAsyncTask() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
</script>

<template>
  <div v-if="isLoad">
    <LoadingPage />
  </div>
  <div v-else class="magicpattern">
    <HeaderNav />
    <RouterView />
    <FooterComponent />
  </div>
</template>
