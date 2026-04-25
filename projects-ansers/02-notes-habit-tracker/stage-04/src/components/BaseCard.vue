<template>
  <section class="base-card">
    <header v-if="$slots.header">
      <slot name="header" />
    </header>

    <div class="base-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </section>
</template>
