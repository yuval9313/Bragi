<script setup lang="ts">
import TopicCard from '@/components/TopicCard.vue';

const topics = ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6'];
</script>

<template>
  <div class="flex sticky justify-between mb-10">
    <h3>nav-buttons</h3>
    <h3>profile</h3>
  </div>
  <div class="grid text-3xl gap-6 grid-cols-2 lg:grid-cols-3">
    <h1 class="font-bold col-span-full">Good evening</h1>
    <TopicCard
      v-for="topic in topics"
      :title="topic"
      :to="{ name: 'playlist', query: { id: '1234' } }"
      image="src/assets/logo.png"
    >
      <h1>{{topic}}</h1>
    </TopicCard>
  </div>
</template>
