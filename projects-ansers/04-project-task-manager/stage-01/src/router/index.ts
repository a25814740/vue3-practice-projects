import { createRouter, createWebHistory } from 'vue-router'

const ProjectsView = {
  template: '<main><h1>Projects</h1></main>',
}

const TasksView = {
  template: '<main><h1>Tasks</h1></main>',
}

const routes = [
  { path: '/', name: 'projects', component: ProjectsView },
  { path: '/tasks', name: 'tasks', component: TasksView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
