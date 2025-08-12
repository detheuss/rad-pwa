<template>
  <NuxtPwaManifest />
  <div class="flex flex-col gap-5 p-5 items-center justify-center">
    <h1 class="text-5xl font-black">PWA Page</h1>
    <Installer />
  </div>
</template>

<script setup lang="ts">
import Installer from "~/components/PwaInstaller.vue";
</script>

<style scoped></style>
