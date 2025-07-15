<template>
  <button
    :class="[
      primaryClass
        ? 'bg-brand-primary hover:bg-brand-primary-hover text-white'
        : '',
      secondaryClass
        ? 'bg-brand-secondary hover:bg-brand-secondary-hover text-gray-800'
        : '',
      outlineClass
        ? 'bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
        : '',
      'inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md px-4 py-2',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});

const primaryClass = computed(() => props.variant === "primary");
const secondaryClass = computed(() => props.variant === "secondary");
const outlineClass = computed(() => props.variant === "outline");
</script>
