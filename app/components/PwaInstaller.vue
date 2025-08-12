<template>
  <UButton v-if="canInstall" size="xl" @click="installPWA"> Install </UButton>
</template>

<script setup lang="ts">
const deferredPrompt = ref<Event | null>(null);
const canInstall = ref(false);
const isIOS = ref(false);

onBeforeMount(() => {
  isIOS.value = checkIsIOS();

  window.addEventListener("beforeinstallprompt", (e: Event) => {
    e.preventDefault();
    deferredPrompt.value = e;
    canInstall.value = true;
    console.debug("🔥 beforeinstallprompt captured in Installer.vue");
  });
});

const installPWA = () => {
  const promptEvent = deferredPrompt.value as any;
  if (!promptEvent) return;

  promptEvent.prompt();

  promptEvent.userChoice.then((result: any) => {
    if (result.outcome === "accepted") {
      console.debug("✅ User accepted the install prompt");
    } else {
      console.debug("❌ User dismissed the install prompt");
    }

    canInstall.value = false;
    deferredPrompt.value = null;
  });
};
</script>

<style scoped></style>
