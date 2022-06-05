<template>
  <div class="hidden sm:block">
    <slot name="helpMenu"></slot>
  </div>
  <slot name="navigationButtons"></slot>
  <div class="flex flex-col">
    <slot name="library"></slot>
  </div>
</template>
