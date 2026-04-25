import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    role: 'member',
  }),
  actions: {
    login(role = 'member') {
      this.isLoggedIn = true
      this.role = role
    },
    logout() {
      this.isLoggedIn = false
      this.role = 'member'
    },
  },
})
