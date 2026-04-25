<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  title: '',
  note: '',
})

const entries = ref([
  { id: 1, title: '早起喝水', note: '先從最小習慣開始' },
])

const addEntry = () => {
  const title = form.title.trim()
  if (!title) return

  entries.value.unshift({
    id: Date.now(),
    title,
    note: form.note.trim(),
  })

  form.title = ''
  form.note = ''
}
</script>

<template>
  <main class="entries-stage">
    <h1>資料模型與列表</h1>

    <form @submit.prevent="addEntry">
      <input v-model="form.title" type="text" placeholder="標題" />
      <textarea v-model="form.note" placeholder="補充說明" />
      <button type="submit">新增</button>
    </form>

    <ul v-if="entries.length">
      <li v-for="entry in entries" :key="entry.id">
        <strong>{{ entry.title }}</strong>
        <p>{{ entry.note }}</p>
      </li>
    </ul>

    <p v-else>目前還沒有資料。</p>
  </main>
</template>
