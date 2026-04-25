<script setup>
import { computed } from 'vue'
import { useAuthStore } from './stores/auth.store'

const authStore = useAuthStore()
const statusText = computed(() => (authStore.isLoggedIn ? '已登入' : '未登入'))
</script>

<template>
  <main class="admin-shell">
    <h1>守衛與權限概念</h1>
    <p>狀態：{{ statusText }}</p>

    <button type="button" @click="authStore.login()">登入</button>
    <button type="button" @click="authStore.logout()">登出</button>
  </main>
</template>
