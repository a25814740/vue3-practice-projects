<script setup>
import { computed, ref } from 'vue'

const count = ref(0)
const parityLabel = computed(() => (count.value % 2 === 0 ? 'Even' : 'Odd'))

const increment = () => {
  count.value += 1
}

const decrement = () => {
  count.value -= 1
}

const reset = () => {
  count.value = 0
}
</script>

<template>
  <main class="counter-stage">
    <h1>Counter 基礎</h1>
    <p>目前數值：{{ count }}</p>
    <p>狀態：{{ parityLabel }}</p>

    <div class="actions">
      <button type="button" @click="decrement">-1</button>
      <button type="button" @click="increment">+1</button>
      <button type="button" @click="reset">歸零</button>
    </div>
  </main>
</template>
