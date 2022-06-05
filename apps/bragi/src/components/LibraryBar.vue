<script setup lang="ts">
import SideBar from '@/layouts/SideBarLayout.vue';
import NavigationButtons from '@/components/NavigationButtons.vue';
</script>

<template>
  <SideBar>
    <template #helpMenu> Help Menu </template>
    <template #navigationButtons>
      <NavigationButtons />
    </template>
    <template #library> Library buttons </template>
  </SideBar>
</template>
