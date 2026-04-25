<script setup>
import { computed, ref } from 'vue'
import BaseCard from './components/BaseCard.vue'
import { useTaskForm } from './composables/useTaskForm'

const { form, resetForm } = useTaskForm()
const tasks = ref([{ id: 1, title: '拆出共用邏輯', projectId: 1 }])

const taskCount = computed(() => tasks.value.length)

const addTask = () => {
  const title = form.title.trim()
  if (!title) return

  tasks.value.unshift({
    id: Date.now(),
    title,
    projectId: form.projectId,
  })

  resetForm()
}
</script>

<template>
  <main class="workspace-shell">
    <h1>共享邏輯與可重用元件</h1>

    <BaseCard>
      <template #header>
        <h2>任務統計：{{ taskCount }}</h2>
      </template>

      <form @submit.prevent="addTask">
        <input v-model="form.title" type="text" placeholder="任務名稱" />
        <button type="submit">新增</button>
      </form>
    </BaseCard>
  </main>
</template>
