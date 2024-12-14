<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()
const doubleValue = computed(() => store.doubleCount)
</script>

<template>
  <!-- <main> -->
  <div class="about">
    <h1>This is an home page</h1>
  </div>
  <!-- </main> -->
</template>
