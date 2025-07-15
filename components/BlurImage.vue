<template>
  <div class="blur-image-container">
    <img
      :src="src"
      :alt="alt"
      :class="['blur-image', loaded ? 'loaded' : '']"
      :width="width"
      :height="height"
      :loading="loading"
      @load="onLoaded"
      ref="imageRef"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  loading: {
    type: String,
    default: "lazy",
  },
});

const loaded = ref(false);
const imageRef = ref(null);

onMounted(() => {
  // Check if image is already cached
  if (imageRef.value && imageRef.value.complete) {
    loaded.value = true;
  }
});

function onLoaded() {
  loaded.value = true;
}
</script>

<style scoped>
.blur-image-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

.blur-image {
  filter: blur(15px);
  transform: scale(1.05);
  transition: filter 0.5s ease, transform 0.5s ease;
  width: 100%;
  height: 100%;
}

.blur-image.loaded {
  filter: blur(0);
  transform: scale(1);
}
</style>
