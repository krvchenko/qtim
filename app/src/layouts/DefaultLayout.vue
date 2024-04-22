<template>
  <perfect-scrollbar>
    <div class="page">
      <header-component />
      <div class="page__wrapper">
        <div class="page__content">
          <router-view v-slot="{ Component, route }">
            <transition name="slide-x-in" mode="out-in">
              <section class="content" :key="route.hash">
                <component :is="Component" />
              </section>
            </transition>
          </router-view>
        </div>
      </div>
      <footer-component />
    </div>
  </perfect-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
