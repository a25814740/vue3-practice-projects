<template>
  <main class="admin-shell">
    <aside>
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
      </nav>
    </aside>

    <section>
      <RouterView />
    </section>
  </main>
</template>
