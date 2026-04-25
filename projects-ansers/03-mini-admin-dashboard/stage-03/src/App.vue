<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from './stores/users.store'

const usersStore = useUsersStore()

onMounted(() => {
  usersStore.fetchUsers()
})
</script>

<template>
  <main class="admin-shell">
    <h1>Pinia 與非同步流程</h1>

    <p v-if="usersStore.status === 'loading'">載入中...</p>
    <p v-else-if="usersStore.status === 'error'">發生錯誤</p>
    <p v-else-if="!usersStore.hasUsers">目前沒有資料</p>

    <ul v-else>
      <li v-for="user in usersStore.users" :key="user.id">
        {{ user.name }} / {{ user.role }}
      </li>
    </ul>
  </main>
</template>
