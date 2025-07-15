<script setup lang="ts">
// Components are auto-imported with script setup
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global brand colors */
:root {
  --primary-color: #e33323; /* Red from logo */
  --secondary-color: #f9ca0f; /* Yellow from logo */
  --primary-hover: #c62a1b; /* Darker shade of primary for hover */
  --secondary-hover: #e0b70e; /* Darker shade of secondary for hover */
  --text-on-primary: white;
  --text-on-secondary: #333;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
