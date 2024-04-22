<template>
  <div class="pagination">
    <ul class="pagination__list">
      <!-- Prev -->
      <li
        v-if="prevUrl"
        class="pagination__item pagination__item_prev"
      >
        <router-link
          :to="prevUrl"
          class="btn btn-pagination btn-pagination_prev"
        >
          <icon-component
            :height="13"
            :width="8"
            name="arrowLeft"
          />
        </router-link>
      </li>
      <!-- Pages -->
      <li
        v-for="(item, index) in pages"
        :key="index"
        :class="[
          'pagination__item',
          item.number === current && 'pagination__item_active',
        ]"
      >
        <router-link
          :to="{
            name: item.number > 1 ? route : routeIndex,
            params: {
              page: item.number > 1 ? item.number : null
            },
          }"
          :class="[
            'btn btn-pagination',
            item.number === current && 'btn-pagination_active',
          ]"
        >
          {{ item.number }}
        </router-link>
      </li>
      <!-- Next -->
      <li
        v-if="nextUrl"
        class="pagination__item pagination__item_next"
      >
        <router-link
          :to="nextUrl"
          class="btn btn-pagination btn-pagination_next"
        >
          <icon-component
            :height="13"
            :width="8"
            name="arrowRight"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, Ref, PropType } from 'vue';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import IconComponent from '@/components/IconComponent.vue';

interface Props {
  last: number;
  route: string;
  routeIndex: string;
  current: number;
  prevUrl: string | null;
  nextUrl: string | null;
  from: number;
  to: number;
  total: number;
}

const props = defineProps<Props>();

const pages = computed(() => {
  let range = [];

  for (let i = 0; i < props.last; i++) {
    range.push({
      number: i + 1
    });
  }

  if (props.current > 3 && props.current + 3 <= props.last) {
    range = range.slice(props.current - 3, props.current + 2);
  } else if (props.current + 2 >= props.last) {
    range = range.slice(Math.max(0, props.last - 5), props.last);
  } else {
    range = range.slice(0, 5);
  }

  return range;
});

</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    width: 100%;

    &__list {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__item {
      list-style: none;
      overflow: hidden;
    }
  }
</style>
