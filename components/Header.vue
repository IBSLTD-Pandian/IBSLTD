<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md border-brand-secondary'
        : 'bg-transparent border-transparent',
    ]"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <div class="h-10 w-10">
          <BlurImage
            src="/logo.png"
            alt="IBS Logo"
            loading="lazy"
            width="40"
            height="40"
          />
        </div>
        <div class="hidden md:block">
          <h1
            class="text-lg font-semibold"
            :class="isScrolled ? 'text-gray-900' : 'text-white'"
          >
            International Business Synergies
          </h1>
          <p
            class="text-xs"
            :class="isScrolled ? 'text-gray-500' : 'text-gray-200'"
          >
            Trading FZCO
          </p>
        </div>
      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li>
            <a
              href="#about"
              class="nav-link"
              :class="{ 'nav-link-light': !isScrolled }"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#global-trade"
              class="nav-link"
              :class="{ 'nav-link-light': !isScrolled }"
              >Global Trade</a
            >
          </li>
          <li>
            <a
              href="#energy"
              class="nav-link"
              :class="{ 'nav-link-light': !isScrolled }"
              >Energy</a
            >
          </li>
          <li>
            <a
              href="#commodities"
              class="nav-link"
              :class="{ 'nav-link-light': !isScrolled }"
              >Commodities</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="nav-link"
              :class="{ 'nav-link-light': !isScrolled }"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <button
        class="block md:hidden focus:outline-none"
        :class="isScrolled ? 'text-brand-primary' : 'text-white'"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "#imports";
import BlurImage from "~/components/BlurImage.vue";

const isScrolled = ref(false);
const lastScrollPosition = ref(0);

const handleScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  // Add a small threshold (e.g., 50px) before changing the background
  isScrolled.value = currentScrollPosition > 50;

  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Check scroll position immediately in case page is loaded scrolled down
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
header {
  transition: all 0.3s ease;
}

.nav-link {
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease, background-color 0.3s ease;
  position: relative;
}

.nav-link-light {
  color: white;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.border-brand-secondary {
  border-color: var(--secondary-color);
  border-bottom-width: 3px;
}

.text-brand-primary {
  color: var(--primary-color);
}
</style>
