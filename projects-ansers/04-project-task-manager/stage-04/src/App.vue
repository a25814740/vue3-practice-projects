<script setup>
import { computed } from 'vue'
import { useAuthStore } from './stores/auth.store'

const authStore = useAuthStore()
const statusText = computed(() => (authStore.isLoggedIn ? `已登入 / ${authStore.role}` : '未登入'))
</script>

<template>
  <main class="workspace-shell">
    <h1>權限與完整驗收</h1>
    <p>{{ statusText }}</p>

    <button type="button" @click="authStore.login('admin')">登入成 admin</button>
    <button type="button" @click="authStore.logout()">登出</button>
  </main>
</template>
