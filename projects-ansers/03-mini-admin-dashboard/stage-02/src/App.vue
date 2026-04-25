<script setup>
import { computed, reactive, ref } from 'vue'

const form = reactive({
  name: '',
  role: 'member',
})

const users = ref([
  { id: 1, name: 'Ada', role: 'admin' },
  { id: 2, name: 'Ben', role: 'member' },
])

const editingId = ref(null)
const selectedUserId = ref(null)

const selectedUser = computed(() => users.value.find((user) => user.id === selectedUserId.value))

const saveUser = () => {
  const name = form.name.trim()
  if (!name) return

  if (editingId.value) {
    const targetUser = users.value.find((user) => user.id === editingId.value)
    if (targetUser) {
      targetUser.name = name
      targetUser.role = form.role
    }
    editingId.value = null
  } else {
    users.value.unshift({
      id: Date.now(),
      name,
      role: form.role,
    })
  }

  form.name = ''
  form.role = 'member'
}

const startEdit = (user) => {
  editingId.value = user.id
  form.name = user.name
  form.role = user.role
}

const removeUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id)
}
</script>

<template>
  <main class="admin-shell">
    <section>
      <form @submit.prevent="saveUser">
        <input v-model="form.name" type="text" placeholder="名稱" />
        <select v-model="form.role">
          <option value="admin">admin</option>
          <option value="member">member</option>
        </select>
        <button type="submit">{{ editingId ? '更新' : '新增' }}</button>
      </form>

      <ul>
        <li v-for="user in users" :key="user.id">
          <button type="button" @click="selectedUserId = user.id">{{ user.name }}</button>
          <span>{{ user.role }}</span>
          <button type="button" @click="startEdit(user)">編輯</button>
          <button type="button" @click="removeUser(user.id)">刪除</button>
        </li>
      </ul>
    </section>

    <aside v-if="selectedUser">
      <h2>詳情</h2>
      <p>{{ selectedUser.name }}</p>
      <p>{{ selectedUser.role }}</p>
    </aside>
  </main>
</template>
