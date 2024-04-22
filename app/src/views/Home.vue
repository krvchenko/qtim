<template>
  <div class="container">
    <h1>Articles</h1>
    <div class="posts">
      <post-card-component
        v-for="(item, index) in data.items"
        :key="index"
        :id="item.id"
        :title="item.title"
        :image="item.image"
        :preview="item.preview"
      />
    </div>
    <pagination
      v-if="data.items"
      :route="RouteNameEnum.PostsPage"
      :route-index="RouteNameEnum.Home"
      :last="data.last"
      :current="data.current"
      :prevUrl="data.prevUrl"
      :nextUrl="data.nextUrl"
      :from="data.from"
      :to="data.to"
      :total="data.total"
    />
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, ref, Ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useLayoutStore } from '@/store/useLayoutStore';
import { LayoutEnum } from '@/layouts/LayoutEnum';
import { IPaginator } from '@/types';
import { usePostStore } from '@/store/usePostStore';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import { useRoute } from 'vue-router';
import { usePaginate } from '@/composables/usePaginate';
import { storeToRefs } from 'pinia';
import PostCardComponent from '@/components/post/PostCardComponent.vue';
import Pagination from '@/components/Pagination.vue';

useHead({
  title: 'Articles',
});

const { setCurrentLayout } = useLayoutStore();

setCurrentLayout(LayoutEnum.Default);

const route = useRoute();

const { getItems, setItems } = usePostStore();

const { paginate } = usePaginate();

const data: Ref<IPaginator> = ref({} as IPaginator);

watch(
  () => route.params.page,
  () => {
    updateItems();
  }
);

onMounted(async () => {
  updateItems();
});

const updateItems = () => {
  const items = getItems();
  const page = route.params.page ? Number(route.params.page) : 1;
  data.value = paginate(items, page, 8, RouteNameEnum.Home, RouteNameEnum.PostsPage);
};

</script>

<style lang="scss">
.posts {
  margin: 0 0 12px 0;
  display: grid;
  gap: 32px;
  row-gap: 22px;
  grid-template-columns: repeat(4, 1fr);
}
</style>