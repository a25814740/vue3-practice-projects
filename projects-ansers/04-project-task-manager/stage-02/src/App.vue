<script setup>
import { computed, reactive, ref } from 'vue'

const projectForm = reactive({
  name: '',
})

const taskForm = reactive({
  title: '',
  projectId: 1,
})

const projects = ref([
  { id: 1, name: 'Vue 練功倉庫' },
  { id: 2, name: 'Side Project' },
])

const tasks = ref([
  { id: 1, title: '做出路由骨架', projectId: 1 },
])

const selectedProjectId = ref(1)

const visibleTasks = computed(() => tasks.value.filter((task) => task.projectId === selectedProjectId.value))

const addProject = () => {
  const name = projectForm.name.trim()
  if (!name) return
  projects.value.unshift({ id: Date.now(), name })
  projectForm.name = ''
}

const addTask = () => {
  const title = taskForm.title.trim()
  if (!title) return

  tasks.value.unshift({
    id: Date.now(),
    title,
    projectId: taskForm.projectId,
  })

  taskForm.title = ''
}
</script>

<template>
  <main class="workspace-shell">
    <section>
      <h1>任務與專案資料流</h1>

      <form @submit.prevent="addProject">
        <input v-model="projectForm.name" type="text" placeholder="新增專案" />
        <button type="submit">新增專案</button>
      </form>

      <form @submit.prevent="addTask">
        <input v-model="taskForm.title" type="text" placeholder="新增任務" />
        <select v-model="taskForm.projectId">
          <option v-for="project in projects" :key="project.id" :value="project.id">
            {{ project.name }}
          </option>
        </select>
        <button type="submit">新增任務</button>
      </form>
    </section>

    <aside>
      <button
        v-for="project in projects"
        :key="project.id"
        type="button"
        @click="selectedProjectId = project.id"
      >
        {{ project.name }}
      </button>

      <ul>
        <li v-for="task in visibleTasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </aside>
  </main>
</template>
