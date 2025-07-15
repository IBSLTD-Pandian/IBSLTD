<template>
  <footer class="relative text-white py-16">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <BlurImage
        src="/footer-bg.jpg"
        alt="Shipping Background"
        class="w-full h-full object-cover opacity-30"
        loading="lazy"
        width="1920"
        height="1080"
      />
    </div>

    <!-- Dark overlay with logo-matching colors -->
    <div class="absolute inset-0 footer-overlay z-0"></div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="h-12 w-12">
              <BlurImage
                src="/logo.png"
                alt="IBS Logo"
                loading="lazy"
                width="48"
                height="48"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">
                International Business Synergies
              </h3>
              <p class="text-xs text-gray-300">Trading FZCO</p>
            </div>
          </div>
          <p class="text-gray-300 max-w-xs">
            International Business Synergies Trading FZCO (IBS) is a global
            trading company specializing in energy, agriculture, and aquaculture
            commodities.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-6 text-white">Contact Us</h3>
          <address class="not-italic text-gray-300">
            <p>International Business Synergies Trading FZCO</p>
            <p>Dubai Silicon Oasis</p>
            <p>DBP Building, A1</p>
            <p>Dubai, United Arab Emirates</p>
            <p class="mt-4">Phone: +971 58-627-1722</p>
            <p class="mt-1">Email: info@ibsltd.com</p>
          </address>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4 text-white">Stay up to date</h3>
          <form class="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Email"
              required
              class="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-l"
            />
            <button type="submit" class="brand-button">Sign Up</button>
          </form>
        </div>
      </div>
      <div
        class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
      >
        <p>© 2025 International Business Synergies. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BlurImage from "~/components/BlurImage.vue";
// Footer functionality can be added here
</script>

<style scoped>
/* Add your styles here */
footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color)
  );
}

/* Footer overlay with logo-complementary colors */
.footer-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.9)
  );
}

/* Brand-colored button */
.brand-button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.brand-button:hover {
  background-color: var(--primary-hover);
}

/* Additional background image styling */
footer {
  background-position: center;
  background-size: cover;
}
</style>
