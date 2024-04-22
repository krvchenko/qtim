<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link
          class="header__logo"
          :to="{
            name: RouteNameEnum.Home
          }">
          <logo-component :width="84" />
        </router-link>
        <nav class="header__nav">
          <ul class="menu-main">
            <li
              v-for="item, index in menuItems"
              :key="index"
              class="menu-main__item"
            >
              <router-link
                :to="item.url"
                class="menu-main__link"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__actions">
          <button class="btn btn-icon btn-icon_border header__lang">
            <icon-component
              :height="24"
              :width="24"
              name="uk"
            />
          </button>
          <button class="btn btn-rounded">
            Let's work
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouteNameEnum } from '@/router/RouteNameEnum';
import { IMenuItem } from '@/types';
import LogoComponent from '@/components/LogoComponent.vue';
import IconComponent from '@/components/IconComponent.vue';

const menuItems: IMenuItem[] = [
  { url: '/', title: 'Works' },
  { url: '/', title: 'About' }
];
</script>

<style lang="scss">
.header {
  margin-bottom: 120px;

  .container {
    max-width: 1360px;
  }

  &__wrap {
    padding: 35px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    font-size: 0;
  }

  &__nav {
    margin: 0 90px 0 auto;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__lang {
    margin-right: 16px;
  }
}

.menu-main {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    margin-right: 58px;
    &:last-child {
      margin: 0;
    }
  }

  &__link {
    text-decoration: none;
    color: #101010;
    line-height: 100%;
    font-size: 20px;
    font-weight: normal;
    font-family: 'TT Commons';
  }
}
</style>