<template>
  <div class="progress-block">
    <div
      class="progress-bar"
      :style="{
        background: `radial-gradient(closest-side, #111111 79%, transparent 80% 100%), conic-gradient(#018944 ${percents}%, #212121 0)`,
      }"
    />

    <div class="progress-block-content">
      <p>{{ name }}</p>
      <h3>{{ value }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'Количество убийств',
  },
  percents: {
    type: Number,
    default: 0,
  },
  value: {
    type: String,
    default: '0',
  },
});
</script>
