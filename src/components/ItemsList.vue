<template>
  <div class="items-list">
    <Slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.items-list {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>
