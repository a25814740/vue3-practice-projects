import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    status: 'idle',
    error: null,
  }),
  getters: {
    hasUsers: (state) => state.users.length > 0,
  },
  actions: {
    async fetchUsers() {
      this.status = 'loading'
      this.error = null

      try {
        await new Promise((resolve) => setTimeout(resolve, 300))
        this.users = [
          { id: 1, name: 'Ada', role: 'admin' },
          { id: 2, name: 'Ben', role: 'member' },
        ]
        this.status = 'success'
      } catch (error) {
        this.error = error
        this.status = 'error'
      }
    },
  },
})
