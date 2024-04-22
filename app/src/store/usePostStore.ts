import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { IPost } from '@/api/interfaces/responses/IPost';

export const usePostStore = defineStore('post', () => {
  const item: Ref<IPost> = ref({} as IPost);
  const items: Ref<IPost[]> = ref([] as IPost[]);

  const getItem = (): IPost => item.value;
  const setItem = (value: IPost): void => {
    item.value = value;
  };

  const getItems = (): IPost[] => items.value;
  
  const setItems = (value: IPost[]): void => {
    items.value = value;
  };

  return {
    item,
    items,
    getItem,
    setItem,
    getItems,
    setItems
  };
});