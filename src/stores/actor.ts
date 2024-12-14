import { ref, reactive, computed } from 'vue'
// import { onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { storeToRefs } from 'pinia'

// export const useGetActorsStore = defineStore('actor', () => {
export const useGetActorsStore = defineStore('actor', () => {
  // state
  const actors = ref({})
  // getter
  //   const act = computed(() => (actors.value = getActor))
  // action
  function getActor() {
    axios
      .get('http://localhost:3000/getActor')
      .then((res) => {
        actors.value = res.data
        // console.log(actors)
      })
      .catch((error) => {
        throw error
      })
  }
  return { actors, getActor }
})

//Option Stores↓
// export const useGetActorsStore = defineStore('actor', {
//   state: () => ({
//     actors: {}
//   }),
//   getters: {},
//   actions: {
//     getActor() {
//       axios
//         .get('http://localhost:3000/getActor')
//         .then((res) => {
//           this.actors = res.data
//           //   console.log(res.data)
//         })
//         .catch((error) => {
//           throw error
//         })
//     }
//   }
// })

//setup関数↓
// export const useCounterStore = defineStore('counter', () => {
//     // state
//     const count = ref(0)
//     // getter
//     const doubleCount = computed(() => count.value * 2)
//     // action
//     function increment() {
//         count.value++
//     }

//   return { count, doubleCount, increment }
// })

// export default defineStore('test-store', () => {
//     const arr = ref([])

//    // init data after mount
//    onMounted(async () => {
//      const data = await apiReq()
//      arr.value = data
//   })

//    return {arr}
// })
