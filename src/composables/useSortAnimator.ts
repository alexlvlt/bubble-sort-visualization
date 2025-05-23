import { type Ref, ref } from "vue";

export function useSortAnimator<T>(
  items: Ref<T[]>,
  generatorFactory: (arr: T[]) => Generator<T[]>,
  delayMs: number = 500,
) {
  const isRunning = ref(false);

  const start = () => {
    if (isRunning.value) {
      return;
    }

    isRunning.value = true;
    const generator = generatorFactory(items.value);
    let res = generator.next();

    const step = () => {
      if (res.value) {
        items.value = [...res.value];
      }

      res = generator.next();

      if (!res.done) {
        setTimeout(step, delayMs);
      } else {
        isRunning.value = false;
      }
    };

    setTimeout(step, delayMs);
  };

  return {
    start,
    isRunning,
  };
}
