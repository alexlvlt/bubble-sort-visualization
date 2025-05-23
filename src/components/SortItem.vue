<template>
  <div
    class="sort-item"
    :class="computedClasses"
  >
    <span class="sort-item__label">
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ArrayValuesStates } from "../types/types.ts";

interface Props {
  item: number;
  state: ArrayValuesStates;
}

const props = defineProps<Props>();

const computedClasses = computed(() => {
  const classes: {
    borderStyle?: string;
    animationStyle?: string;
  } = {};

  const BORDER_STYLE: Record<ArrayValuesStates, string> = {
    [ArrayValuesStates.First]: "sort-item_chosen",
    [ArrayValuesStates.Second]: "sort-item_chosen",
    [ArrayValuesStates.Off]: "sort-item_off",
    [ArrayValuesStates.Checked]: "sort-item_checked",
  };

  const ANIMATION_STYLE: Partial<Record<ArrayValuesStates, string>> = {
    [ArrayValuesStates.First]: "sort-item__first-animation",
    [ArrayValuesStates.Second]: "sort-item__second-animation",
  };

  if (props.state in ANIMATION_STYLE) {
    classes.animationStyle = ANIMATION_STYLE[props.state];
  }

  classes.borderStyle = BORDER_STYLE[props.state];

  return [classes.borderStyle, classes.animationStyle].filter(Boolean);
});
</script>

<style scoped lang="less">
.sort-item {
  user-select: none;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid var(--color-border);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;

  background: black;

  transition: all 0.2s linear;

  &__label {
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  &_checked {
    --color-border: #ffffff;
  }

  &_chosen {
    --color-border: #008000;
  }

  &_off {
    --color-border: #808080;
  }

  &__first-animation {
    animation: first 500ms forwards;
  }

  &__second-animation {
    animation: second 500ms forwards;
  }

  @keyframes first {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(40px);
    }
  }

  @keyframes second {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(-20px, 15px);
    }
    100% {
      transform: translate(-40px, 0);
    }
  }
}
</style>
