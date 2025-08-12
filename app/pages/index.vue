<template>
  <div class="flex flex-col gap-5 p-5 items-center justify-center">
    <h1 class="text-5xl font-black">SSG Landing Homepage</h1>
    <p>This is a template project for fast PWA shipping</p>
    <ULink>
      <NuxtLink to="/pwa">Go to App</NuxtLink>
    </ULink>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink, ULink } from "#components";
</script>

<style scoped></style>
