<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__col footer__col_hero">
          <div class="footer__small">Is there a project?</div>
          <h2 class="footer__title">
            <span>Let’s work</span>
            <br>
            <span>together</span>
          </h2>
        </div>
        <div class="footer__col footer__col_contacts">
          <div
            v-for="item, index in contactItems"
            :key="index"
            class="footer-contact"
          >
            <div class="footer-contact__title">{{ item.title }}</div>
            <div class="footer-contact__text" v-html="item.text" />
            <button
              v-if="item.isLocation"
              class="btn btn-icon btn-location footer-contact__btn"
            >
              <icon-component
                :height="12"
                :width="12"
                name="location"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__col">
          <nav class="footer-nav">
            <ul class="footer-nav__list"> 
              <li
                v-for="item, index in menuItems.slice(0, 3)"
                :key="index"
                class="footer-nav__item"
              >
                <a :href="item.url" class="footer-nav__link" rel="nofollow" target="_blank">{{ item.title }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__col">
          <button class="btn footer__action">
            <span>Go</span>
          </button>
        </div>
        <div class="footer__col">
          <ul class="footer-nav__list"> 
            <li
              v-for="item, index in menuItems.slice(3, 6)"
              :key="index"
              class="footer-nav__item"
            >
              <a :href="item.url" class="footer-nav__link" rel="nofollow" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IMenuItem, IContactFooter } from '@/types';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import LogoComponent from '@/components/LogoComponent.vue';
import IconComponent from '@/components/IconComponent.vue';

const menuItems: IMenuItem[] = [
  { url: '/', title: 'Facebook' },
  { url: '/', title: 'Instagram' },
  { url: '/', title: 'Telegram' },
  { url: '/', title: 'Behance' },
  { url: '/', title: 'Linkedn' },
  { url: '/', title: 'Privacy Policy' }
];

const contactItems: IContactFooter[] = [
  { title: 'For all questions', isLocation: false, text: '+7 (920) 278—00—68<br>qtim@agency.com' },
  { title: 'Office in Russia', isLocation: true, text: '139 Ruben Station Lake Drew, NM 52678' },
  { title: 'Office in Dubai', isLocation: true, text: '139 Ruben Station Lake Drew, NM 52678' }
];

</script>

<style lang="scss">
.footer {
  margin: 140px 0 0 0;
  padding: 140px 0 30px 0;
  background-color: #e2beff;
  overflow: hidden;
  &__top {
    margin-bottom: 143px;
    max-width: 984px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 648px) {
      gap: 0;
      flex-flow: column;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__col {
    position: relative;
    &_contacts {
      margin-top: 75px;
      max-width: 150px;
      @media (max-width: 648px) {
        max-width: 100%;
        display: flex;
        gap: 16px;
      }
    }
  }

  &__small {
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.16px;
  }

  &__title {
    margin: 56px 0 0 0;
    font-family: 'TT Commons';
    font-size: 112px;
    font-weight: normal;
    line-height: 1;
    color: #101010;

    span {
      position: relative;

      &:first-child {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 20px;
          width: 100%;
          height: 1px;
          background: #101010;
        }
      }

      &:last-child {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 20px;
          width: 80px;
          height: 1px;
          background: #101010;
        }

        &:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 20px;
          width: 225px;
          height: 1px;
          background: #101010;
        }
      }
    }
  }

  &-contact {
    margin: 0 0 36px;

    &:last-child {
      margin: 0;
    }

    &__title {
      margin: 0 0 12px;
      letter-spacing: 0.16px;
      line-height: 1.2;
      font-size: 16px;
    }

    &__btn {
      margin: 8px 0 0;
    }
  }

  &-nav {
    &__list {
      margin: 0;
      padding: 0;
      gap: 32px;
      display: flex;
      list-style: none;
      @media (max-width: 950px) {
        gap: 16px;
        flex-flow: column;
      }
    }

    &__link {
      font-size: 16px;
      line-height: 1.2;
      letter-spacing: 0.16px;
    }
  }

  &__action {
    width: 358px;
    height: 358px;
    display: block;
    left: 50%;
    bottom: calc(50% - 30px);
    position: absolute;
    transform: translate3d(-50%, 50%, 0);
    border-radius: 50%!important;
    span {
      top: -30px;
      position: relative;
      font-family: 'TT Commons';
      font-size: 32px !important;
      font-weight: normal;
      line-height: 1;
      color: #f3f3f3;
    }
  }
}
</style>