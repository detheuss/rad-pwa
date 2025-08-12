<template>
  <div
    class="flex flex-col gap-5 p-5 items-center text-center justify-center min-h-screen"
  >
    <h1 class="text-5xl font-black">SSG Landing Homepage</h1>
    <p>This is a template project for fast PWA shipping</p>
    <p class="text-primary">
      nuxt + @nuxt/image + @nuxt/ui + @tailwindcss/vite + @vite-pwa/nuxt
    </p>

    <div class="flex gap-5">
      <NuxtLink to="/typography">
        <UButton variant="outline" size="xl"> Typography </UButton>
      </NuxtLink>
      <NuxtLink to="/pwa">
        <UButton size="xl"> Go to App </UButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink, ULink } from "#components";
</script>

<style scoped></style>
