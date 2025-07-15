<script setup lang="ts">
// import {Sheet, SheetContent, SheetTrigger} from "~/components/ui/sheet";
</script>

<template>
  <nav class="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="flex items-center justify-between h-20">
        <NuxtLink href="/" class="text-2xl font-display text-white">
          <Logo class="h-8" />
          International Business Synergies
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            href="#properties"
            class="text-white hover:text-white/80 transition-colors"
            >Properties
          </NuxtLink>
          <NuxtLink
            href="#about"
            class="text-white hover:text-white/80 transition-colors"
            >About</NuxtLink
          >
          <a
            href="#testimonials"
            class="text-white hover:text-white/80 transition-colors"
          >
            Testimonials</a
          >
          <NuxtLink
            href="#contact"
            class="text-white hover:text-white/80 transition-colors"
            >Contact
          </NuxtLink>
          <Button
            variant="outline"
            class="text-white border-white hover:bg-white hover:text-black"
          >
            Get Started
          </Button>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" class="text-white">
                <Menu class="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div class="flex flex-col space-y-4 mt-8">
                <NuxtLink href="#properties" class="text-lg"
                  >Properties</NuxtLink
                >
                <NuxtLink href="#about" class="text-lg">About</NuxtLink>
                <NuxtLink href="#testimonials" class="text-lg"
                  >Testimonials</NuxtLink
                >
                <NuxtLink href="#contact" class="text-lg">Contact</NuxtLink>
                <Button class="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
