<template>
  <div class="h-screen grid sm:grid-cols-main grid-rows-main">
    <main class="sm:row-web">
      <slot></slot>
    </main>

    <div class="hidden sm:block sm:row-web">
      <slot name="socialBar"></slot>
    </div>

    <div class="col-span-full z-50">
      <slot name="actionBar"></slot>
    </div>

    <div class="sm:order-first sm:row-web">
      <slot name="sideBar"></slot>
    </div>
  </div>
</template>
