<template>
  <NuxtPwaManifest />
  <div
    class="flex flex-col gap-5 p-5 items-center text-center justify-center min-h-screen"
  >
    <h1 class="text-5xl font-black">PWA Page</h1>
    <p>This page contains PWA manifest and Installer.</p>
    <Installer />
  </div>
</template>

<script setup lang="ts">
import Installer from "~/components/PwaInstaller.vue";
</script>

<style scoped></style>
