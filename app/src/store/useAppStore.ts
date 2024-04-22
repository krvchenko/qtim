import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const isLoaded: Ref<boolean> = ref(false);

  const setIsLoaded = (value: boolean) => {
    isLoaded.value = value;
  };

  return {
    isLoaded,
    setIsLoaded,
  };
});
