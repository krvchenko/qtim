import { defineStore } from 'pinia';
import { LayoutEnum } from '@/layouts/LayoutEnum';
import { Ref, ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const currentLayout: Ref<LayoutEnum> = ref(LayoutEnum.Clear);

  const setCurrentLayout = (layoutName: LayoutEnum) => {
    currentLayout.value = layoutName;
  };

  return {
    currentLayout,
    setCurrentLayout,
  };
});
