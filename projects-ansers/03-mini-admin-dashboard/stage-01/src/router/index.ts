import { createRouter, createWebHistory } from 'vue-router'

const DashboardView = {
  template: '<main><h1>Dashboard</h1></main>',
}

const UserListView = {
  template: '<main><h1>Users</h1></main>',
}

const UserDetailView = {
  props: ['id'],
  template: '<main><h1>User detail</h1></main>',
}

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/users', name: 'users', component: UserListView },
  { path: '/users/:id', name: 'user-detail', component: UserDetailView, props: true },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
