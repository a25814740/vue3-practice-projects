export function createAuthGuard(authStore) {
  return (to) => {
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      return { name: 'login' }
    }

    return true
  }
}
