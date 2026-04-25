import { computed, ref } from 'vue'

export function useEntries() {
  const entries = ref([
    { id: 1, title: '早起喝水', note: '先從最小習慣開始' },
  ])

  const totalEntries = computed(() => entries.value.length)

  const addEntry = (entry) => {
    entries.value.unshift({
      id: Date.now(),
      title: entry.title.trim(),
      note: entry.note.trim(),
    })
  }

  const updateEntry = (id, payload) => {
    const targetEntry = entries.value.find((entry) => entry.id === id)
    if (!targetEntry) return

    targetEntry.title = payload.title.trim()
    targetEntry.note = payload.note.trim()
  }

  const removeEntry = (id) => {
    entries.value = entries.value.filter((entry) => entry.id !== id)
  }

  return {
    entries,
    totalEntries,
    addEntry,
    updateEntry,
    removeEntry,
  }
}
