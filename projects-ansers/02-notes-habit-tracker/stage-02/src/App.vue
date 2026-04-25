<script setup>
import { computed, reactive, ref } from 'vue'

const form = reactive({
  title: '',
  note: '',
})

const entries = ref([
  { id: 1, title: '早起喝水', note: '先從最小習慣開始' },
  { id: 2, title: '晚上寫日誌', note: '整理今天發生的事' },
])

const editingId = ref(null)

const totalEntries = computed(() => entries.value.length)

const saveEntry = () => {
  const title = form.title.trim()
  if (!title) return

  if (editingId.value) {
    const targetEntry = entries.value.find((entry) => entry.id === editingId.value)
    if (targetEntry) {
      targetEntry.title = title
      targetEntry.note = form.note.trim()
    }
    editingId.value = null
  } else {
    entries.value.unshift({
      id: Date.now(),
      title,
      note: form.note.trim(),
    })
  }

  form.title = ''
  form.note = ''
}

const startEdit = (entry) => {
  editingId.value = entry.id
  form.title = entry.title
  form.note = entry.note
}

const removeEntry = (id) => {
  entries.value = entries.value.filter((entry) => entry.id !== id)
}
</script>

<template>
  <main class="entries-stage">
    <h1>編輯與統計</h1>
    <p>總數：{{ totalEntries }}</p>

    <form @submit.prevent="saveEntry">
      <input v-model="form.title" type="text" placeholder="標題" />
      <textarea v-model="form.note" placeholder="補充說明" />
      <button type="submit">{{ editingId ? '更新' : '新增' }}</button>
    </form>

    <ul v-if="entries.length">
      <li v-for="entry in entries" :key="entry.id">
        <strong>{{ entry.title }}</strong>
        <p>{{ entry.note }}</p>
        <button type="button" @click="startEdit(entry)">編輯</button>
        <button type="button" @click="removeEntry(entry.id)">刪除</button>
      </li>
    </ul>
  </main>
</template>
