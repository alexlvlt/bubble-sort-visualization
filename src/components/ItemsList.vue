<template>
  <div class="items-list">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.items-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
</style>
