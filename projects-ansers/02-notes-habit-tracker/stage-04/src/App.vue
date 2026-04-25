<script setup>
import BaseCard from './components/BaseCard.vue'
</script>

<template>
  <main class="entries-stage">
    <h1>slots 與延伸優化</h1>

    <BaseCard>
      <template #header>
        <h2>今天的習慣</h2>
      </template>

      <p>把內容放進 slot，卡片外框就能重複使用。</p>

      <template #footer>
        <button type="button">查看詳情</button>
      </template>
    </BaseCard>
  </main>
</template>
