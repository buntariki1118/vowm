<script setup>
import { computed } from 'vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter'
import { useGetActorsStore } from '@/stores/actor'
import { storeToRefs } from 'pinia'
// import { reactive } from 'vue'

onMounted(() => {})

useGetActorsStore().getActor()
console.log('!', useGetActorsStore().$state)

// access the `store` variable anywhere in the component ✨
const doubleValue = computed(() => store.doubleCount)
const store = useCounterStore()
// console.log(useCounterStore().$state.name)

const getText = () => {
  axios
    .get('http://localhost:3000/test')
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      throw error
    })
}

const postText = () => {
  axios
    .post('http://localhost:3000/test2', {
      text: 'postしました'
    })
    .then(function (response) {
      console.log(response.data)
    })
}

const getActor = () => {
  axios
    .get('http://localhost:3000/getActor')
    .then((res) => {
      console.log(res.data)
      this.actors = res.data
    })
    .catch((error) => {
      throw error
    })
}
</script>
<template>
  <div class="about">
    <h1>This is an dashboard page</h1>

    <h2>Pinia</h2>
    <p>name:{{ store.name }}</p>
    <p>count:{{ store.count }}</p>
    <p>doubleValue:{{ doubleValue }}</p>
    <button @click="store.increment">countup</button>

    <br />

    <h2>axios</h2>
    <button @click="getText">get</button>
    <br />
    <button @click="postText">post</button>
    <br />
    <button @click="getActor">getActor</button>

    <h2>actors</h2>
    <!-- <div v-for="(actor, index) in actorsstore.actors" :key="index">
      {{ actor.actor_id }}: {{ actor.first_name }}
    </div> -->
  </div>
</template>
<style>
h1 {
  color: white;
}
/* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
</style>
