<template>
  <DefaultLayout v-if="currentLayout === LayoutEnum.Default" />
  <ClearLayout v-else />
</template>

<script lang="ts" setup>
import ClearLayout from '@/layouts/ClearLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useLayoutStore } from '@/store/useLayoutStore';
import { storeToRefs } from 'pinia';
import { LayoutEnum } from '@/layouts/LayoutEnum';

const { currentLayout } = storeToRefs(useLayoutStore());
</script>

<style lang="scss">
@import 'assets/sass/app';
</style>
