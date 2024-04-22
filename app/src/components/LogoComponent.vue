<template>
  <img
    src="@/assets/images/logo.svg"
    :width="width"
    alt="qtim"
  >
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    required: true,
  },
});
</script>
