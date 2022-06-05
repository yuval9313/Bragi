<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import LibraryBar from "@/components/LibraryBar.vue";
</script>

<template>
  <BaseLayout class="text-white bg-background">
    <template #sideBar>
      <LibraryBar />
    </template>
    <template #default>
      <router-view />
    </template>
    <template #socialBar>
      <div>Hello3</div>
    </template>
    <template #actionBar>
      <div>Hello4</div>
    </template>
  </BaseLayout>
</template>
