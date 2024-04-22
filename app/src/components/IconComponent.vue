<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="iconViewBox"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="iconSrc" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  viewBox: {
    type: String,
    default: undefined,
  },
  fill: {
    type: String,
    default: 'none',
  },
});

const iconSrc = computed(() => `${new URL('@/assets/images/icons.svg', import.meta.url).href}#${props.name}`);
const iconViewBox = computed(() => props.viewBox === undefined ? `0 0 ${props.width} ${props.height}` : props.viewBox);

</script>
