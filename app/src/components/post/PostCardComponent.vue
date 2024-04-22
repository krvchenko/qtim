<template>
  <article
    :class="[
      'post-card',
      hovered && 'post-card_hovered',
    ]"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <img
      decoding="async"
      loading="lazy"
      :src="src"
      :alt="title"
      class="post-card__img"
    >
    <div class="post-card__wrap">
      <h2 class="post-card__title">{{ summary }}</h2>
      <div
        class="post-card__more"
        :class="[
          'post-card__more',
          hovered && 'post-card__more_hovered'
        ]"
      >
        <router-link
          class="post-card__link"
          :to="{ name: RouteNameEnum.Post, params: { id: id } }"
        >
          Read more
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onMounted, ref, Ref } from 'vue';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import { useHead } from '@vueuse/head';
import { useLayoutStore } from '@/store/useLayoutStore';
import { LayoutEnum } from '@/layouts/LayoutEnum';
import { storeToRefs } from 'pinia';

interface Props {
  id: number;
  title: string;
  preview: string;
  image: string;
}

const props = defineProps<Props>();

const hovered: Ref<boolean> = ref(false);

const src = computed(() => {
  let result = props.image;
  const replace = ['https://placeimg.com', 'http://lorempixel.com'];

  for (let i = 0; i < replace.length; i++) {
    result = result.replace(replace[i], 'https://loremflickr.com');
  }

  return result;
});

const summary = computed(() => {
  return props.preview.length > 95
         ? `${props.preview.substring(0, 95)}...`
         : props.preview
});

const { setCurrentLayout } = useLayoutStore();

setCurrentLayout(LayoutEnum.Default);

</script>

<style lang="scss">
.post-card {
  position: relative;
  transition: transform .3s ease;

  &_hovered {
    transform: translateY(-20px);
  }

  &__img {
    margin-bottom: 24px;
    display: block;
    max-width: 100%;
    height: 280px;
    object-fit: cover;
    @media (max-width: 1199.98px){
      height: 200px;
    }
  }
  
  &__wrap {
    height: 116px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    overflow: hidden;
    max-height: 72px;
    margin: 0;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2;
    font-family: 'TT Commons';
  }

  &__more {
    padding: 12px 0;
    opacity: 0;
    transition: opacity .3s ease;

    &_hovered {
      opacity: 1;
    }
  }

  &__link {
    color: #e2beff;
    text-decoration: none;
    font-weight: normal;
    line-height: 1.2;
    font-size: 20px;
    &:hover,
    &:active,
    &:focus,
    &:visited {
      color: #e2beff;
    }
  }
}
  
</style>