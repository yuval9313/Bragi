<script setup lang="ts">
import { ref, computed } from 'vue';
import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/vue/solid';
import {
  HomeIcon as HomeIconOutline,
  SearchIcon as SearchIconOutline,
  LibraryIcon as LibraryIconOutline,
} from '@heroicons/vue/outline';

const selection = ref('home');

const navButtonClass =
  'flex flex-col sm:flex-row items-center sm:items-end sm:justify-start text-xl mx-2 py-2 transition ease-in-out duration-500';
const iconsClass = 'w-8 h-8 sm:mr-4';

const navClasses = (link: string) => {
  const isSelected = selection.value === link;
  return [
    navButtonClass,
    {
      'text-gray-400': !isSelected,
      'hover:text-white': !isSelected,
      'text-white': isSelected,
    },
  ];
};
</script>

<template>
  <div class="flex sm:flex-col gap-1 justify-around">
    <router-link
      :class="navClasses('home')"
      to="/home"
      @click="selection = 'home'"
    >
      <HomeIcon v-if="selection === 'home'" :class="iconsClass" />
      <HomeIconOutline v-else :class="iconsClass" />
      Home
    </router-link>
    <router-link
      :class="navClasses('search')"
      to="/search"
      @click="selection = 'search'"
    >
      <SearchIcon v-if="selection === 'search'" :class="iconsClass" />
      <SearchIconOutline v-else :class="iconsClass" />
      Search
    </router-link>
    <router-link
      :class="navClasses('library')"
      to="/library"
      @click="selection = 'library'"
    >
      <LibraryIcon v-if="selection === 'library'" :class="iconsClass" />
      <LibraryIconOutline v-else :class="iconsClass" />
      Your Library
    </router-link>
  </div>
</template>
