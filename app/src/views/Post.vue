<template>
  <div class="container">
    <article
      class="post"
    >
      <h1 class="post__title">{{ item.title }}</h1>
      <img
        decoding="async"
        loading="lazy"
        :src="src"
        :alt="item.title"
        class="post__img"
      >
      <div class="post__text-label">About</div>
      <div class="post__text" v-html="item.description" />
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onMounted, ref, Ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useLayoutStore } from '@/store/useLayoutStore';
import { usePostStore } from '@/store/usePostStore';
import { LayoutEnum } from '@/layouts/LayoutEnum';
import { storeToRefs } from 'pinia';

const { setCurrentLayout } = useLayoutStore();

setCurrentLayout(LayoutEnum.Default);

const { getItem } = usePostStore();

const item = getItem();

const src = computed(() => {
  let result = item.image;
  const replace = ['https://placeimg.com', 'http://lorempixel.com'];

  for (let i = 0; i < replace.length; i++) {
    result = result.replace(replace[i], 'https://loremflickr.com');
  }

  return result;
});

</script>

<style lang="scss">
  .post {
    &__title {
      margin-bottom: 73px;
    }

    &__img {
      margin-bottom: 80px;
      width: 100%;
    }

    &__text {
      max-width: 695px;
      font-family: 'TT Commons';
      font-size: 36px;
      font-weight: normal;
      line-height: 1.24;
      color: #101010;
      &-label {
        margin-bottom: 32px;
        font-family: 'TT Commons';
        font-size: 16px;
        line-height: 1;
        color: #101010;
      }
    }
  }
</style>