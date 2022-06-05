<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
const props = defineProps<{
  title: string;
  image: string;
  to: RouteLocationRaw;
}>();

const topicCard =
  'flex rounded-md text-2xl items-center gap-3 bg-background-lighter backdrop-blur-sm';
const topicImage = 'max-w-[30%] bg-secondary object-contain rounded-l-md';
</script>

<template>
  <router-link :to="props.to" :class="topicCard">
    <img
      :src="props.image"
      :alt="`Image of ${props.title}`"
      :class="topicImage"
    />
    <slot />
  </router-link>
</template>
