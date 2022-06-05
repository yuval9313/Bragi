<script setup lang="ts">
import {ref} from 'vue';
import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/vue/solid';
import {
  HomeIcon as HomeIconOutline,
  SearchIcon as SearchIconOutline,
  LibraryIcon as LibraryIconOutline,
} from '@heroicons/vue/outline';

const props = defineProps({
  selected: { type: String, default: 'home' },
});

const selection = ref('home');
const changeSelection = (newSelection: string) => {
  selection.value = newSelection;
}

const navButtonClass =
  'flex flex-col justify-center items-end sm:flex-row sm:items-center sm:justify-start text-xl mx-2 py-2 text-gray-400 hover:text-white transition ease-in-out duration-500';
const iconsClass = 'w-8 h-8 mr-4';
</script>

<template>
  <div class="flex sm:flex-col gap-1">
    <router-link :class="navButtonClass" to="/home" @click="changeSelection('home')">
      <HomeIcon v-if="props.selected === 'home'" :class="iconsClass" />
      <HomeIconOutline v-else :class="iconsClass" />
      Home
    </router-link>
    <router-link :class="navButtonClass" to="/search" @click="changeSelection('search')">
      <SearchIcon v-if="props.selected === 'search'" :class="iconsClass" />
      <SearchIconOutline v-else :class="iconsClass" />
      Search
    </router-link>
    <router-link :class="navButtonClass" to="/library" @click="changeSelection('library')">
      <LibraryIcon v-if="props.selected === 'library'" :class="iconsClass" />
      <LibraryIconOutline v-else :class="iconsClass" />
      Your Library
    </router-link>
  </div>
</template>
