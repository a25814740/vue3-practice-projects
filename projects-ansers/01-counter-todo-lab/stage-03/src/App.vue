<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'counter-todo-lab.todos'

const todoText = ref('')
const filter = ref('all')
const todos = ref([])

const filteredTodos = computed(() => {
  if (filter.value === 'active') return todos.value.filter((todo) => !todo.done)
  if (filter.value === 'completed') return todos.value.filter((todo) => todo.done)
  return todos.value
})

const loadTodos = () => {
  const raw = localStorage.getItem(STORAGE_KEY)
  todos.value = raw ? JSON.parse(raw) : []
}

const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
}

const addTodo = () => {
  const text = todoText.value.trim()
  if (!text) return

  todos.value.unshift({ id: Date.now(), text, done: false })
  todoText.value = ''
}

const toggleTodo = (id) => {
  const targetTodo = todos.value.find((todo) => todo.id === id)
  if (targetTodo) targetTodo.done = !targetTodo.done
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

onMounted(loadTodos)
watch(todos, saveTodos, { deep: true })
</script>

<template>
  <main class="todo-stage">
    <h1>本地儲存與拆分前的整理</h1>

    <form @submit.prevent="addTodo">
      <input v-model="todoText" type="text" placeholder="輸入待辦" />
      <button type="submit">新增</button>
    </form>

    <nav>
      <button type="button" @click="filter = 'all'">全部</button>
      <button type="button" @click="filter = 'active'">未完成</button>
      <button type="button" @click="filter = 'completed'">已完成</button>
    </nav>

    <ul v-if="filteredTodos.length">
      <li v-for="todo in filteredTodos" :key="todo.id">
        <label>
          <input :checked="todo.done" type="checkbox" @change="toggleTodo(todo.id)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
        <button type="button" @click="removeTodo(todo.id)">刪除</button>
      </li>
    </ul>

    <p v-else>目前沒有符合條件的待辦。</p>
  </main>
</template>
