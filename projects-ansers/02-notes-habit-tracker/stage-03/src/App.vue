<script setup>
import { reactive, ref } from 'vue'
import { useEntries } from './composables/useEntries'

const form = reactive({
  title: '',
  note: '',
})

const editingId = ref(null)
const { entries, totalEntries, addEntry, updateEntry, removeEntry } = useEntries()

const saveEntry = () => {
  const title = form.title.trim()
  if (!title) return

  if (editingId.value) {
    updateEntry(editingId.value, form)
    editingId.value = null
  } else {
    addEntry(form)
  }

  form.title = ''
  form.note = ''
}

const startEdit = (entry) => {
  editingId.value = entry.id
  form.title = entry.title
  form.note = entry.note
}
</script>

<template>
  <main class="entries-stage">
    <h1>composables 與共享邏輯</h1>
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
