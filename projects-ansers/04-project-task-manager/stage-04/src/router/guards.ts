export function createAuthGuard(authStore) {
  return (to) => {
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      return { name: 'login' }
    }

    if (to.meta.requiredRole && authStore.role !== to.meta.requiredRole) {
      return { name: 'forbidden' }
    }

    return true
  }
}
