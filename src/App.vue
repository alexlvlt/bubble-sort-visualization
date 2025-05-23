<template>
  <div class="container">
    <h2>Bubble Sort Algorithm</h2>
    <ItemsList>
      <SortItem
        v-for="(item, index) in items"
        :key="index"
        :item="item.value"
        :state="item.state"
      />
    </ItemsList>
    <button
      @click="start"
      :disabled="isRunning"
    >
      Sort
    </button>
  </div>
</template>

<script setup lang="ts">
import SortItem from "./components/SortItem.vue";
import ItemsList from "./components/ItemsList.vue";
import { generateArray } from "./lib/generate-array.ts";
import { ref } from "vue";
import { useSortAnimator } from "./composables/useSortAnimator.ts";
import { bubbleSort } from "./lib/bubble-sort.ts";

const items = ref(generateArray());
const { start, isRunning } = useSortAnimator(items, bubbleSort);
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
}
</style>
