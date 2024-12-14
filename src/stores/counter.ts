import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//Option Stores
// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })

//setup関数↓
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  const name = 'Eduardo'
  // getter
  const doubleCount = computed(() => count.value * 2)
  // action
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
