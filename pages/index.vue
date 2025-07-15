<script setup lang="ts">
// Use auto-imports for all components
// Nuxt will handle the component resolution
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <BlurImage
          src="/hero-bg.jpg"
          alt="IBS Trading Ship"
          class="object-cover h-full w-full opacity-40 scale-110 animate-slow-pan"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"
      ></div>
      <div class="container mx-auto px-6 z-10 text-center">
        <h1
          class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in"
        >
          International Business Synergies
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-delayed"
        >
          A global trading company specializing in energy, agriculture, and
          aquaculture commodities
        </p>
        <BrandButton variant="primary" class="animate-fade-in-delayed-more">
          <a href="#about">Learn More</a>
        </BrandButton>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About IBS
            </h2>
            <p class="text-lg text-gray-700 mb-6">
              International Business Synergies Trading FZCO (IBS) is
              headquartered in Dubai, United Arab Emirates. We are a global
              trading company with a significant presence across Asia, Europe,
              and Africa.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              At IBS, we specialize in providing comprehensive solutions in the
              energy, agriculture, and aquaculture sectors. Our team has over 30
              years of experience in trade and finance, leveraging deep market
              insights, large buying power, and a robust global network.
            </p>
            <p class="text-lg text-gray-700">
              If there is one word that summarizes IBS, it is PASSION: Passion
              for Quality, Passion for Excellence, and Passion for Progress. We
              believe in progress not only for IBS but for the communities we
              serve.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl h-full">
            <BlurImage
              src="/about-image.png"
              alt="IBS Office"
              class="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Global Trade Section -->
    <section id="global-trade" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Global Trade
        </h2>
        <p class="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          As the demands of the marketplace change, we are focused on continuing
          to provide quality products at the best possible prices for our
          customers. With an international presence based out of Dubai, we are
          committed to personalized customer service, in-stock products,
          merchandise, and commodities.
        </p>
        <div class="relative rounded-lg overflow-hidden shadow-xl">
          <BlurImage
            src="/global-map.png"
            alt="IBS Global Presence"
            class="w-full object-contain"
            loading="lazy"
            width="1600"
            height="900"
          />
        </div>
      </div>
    </section>

    <!-- Energy Section -->
    <section id="energy" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Energy Division
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Energy Card 1 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/oil-gas.jpg"
                alt="Oil & Gas"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Oil & Gas</CardTitle>
              <CardDescription
                >In-depth knowledge of global oil & gas
                business</CardDescription
              >
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                We trade petroleum products like EN-590 (10 ppm & 50 ppm), crude
                oil, and additives with partners in Europe, the Middle East, and
                Asia.
              </p>
            </CardContent>
          </Card>

          <!-- Energy Card 2 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/petroleum.jpg"
                alt="Petroleum Products"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Petroleum Products</CardTitle>
              <CardDescription>Comprehensive logistics network</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                In the UAE, we have partners that allow us to leverage their
                logistics network, tank farms, and shipping agreements for
                efficient distribution.
              </p>
            </CardContent>
          </Card>

          <!-- Energy Card 3 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/generators.jpg"
                alt="Generators"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Generators</CardTitle>
              <CardDescription>High-quality power solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                We are a leading distributor of residential, commercial, and
                industrial generators manufactured in India, fitted with major
                components like the Yanmar engine from Japan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Commodities Section -->
    <section id="commodities" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Commodities Division
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Commodities Card 1 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/agriculture.jpg"
                alt="Agriculture"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Agriculture</CardTitle>
              <CardDescription>Global trade network</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                We have a strong network of buyers and suppliers in Africa,
                Europe, and Asia that allow us to trade agriculture commodities
                like soya bean, corn, maize, coffee, and cashew.
              </p>
            </CardContent>
          </Card>

          <!-- Commodities Card 2 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/aquaculture.jpg"
                alt="Aquaculture"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Aquaculture</CardTitle>
              <CardDescription>Sustainable seafood solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                Our aquaculture division trades tilapia, mackerels, croakers,
                crab, and shrimp through our established network of suppliers
                and buyers.
              </p>
            </CardContent>
          </Card>

          <!-- Commodities Card 3 -->
          <Card>
            <div class="h-48 overflow-hidden">
              <BlurImage
                src="/fertilizers.jpg"
                alt="Fertilizers & Animal Feed"
                class="w-full h-full object-cover"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <CardHeader>
              <CardTitle>Fertilizers & Animal Feed</CardTitle>
              <CardDescription
                >Supporting agricultural productivity</CardDescription
              >
            </CardHeader>
            <CardContent>
              <p class="text-gray-700">
                We provide Urea, NPK, DAP, and other agriculture fertilizers for
                farming, along with quality animal feed products with a focus on
                poultry feed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact Us
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Get in Touch</h3>
              <p class="text-gray-400 mb-6">
                Send us a message and we'll get back to you
              </p>
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-white"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-white"
                    required
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium mb-2"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-brand-primary hover:bg-brand-primary-hover text-white py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div
            class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden"
          >
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Our Office</h3>
              <p class="text-gray-400 mb-6">Visit or contact us directly</p>
              <address class="not-italic text-gray-400 mb-8">
                <p class="mb-2">
                  International Business Synergies Trading FZCO
                </p>
                <p class="mb-2">Dubai Silicon Oasis</p>
                <p class="mb-2">DBP Building, A1</p>
                <p>Dubai, United Arab Emirates</p>
              </address>
              <div class="mb-8">
                <p class="mb-2">
                  <strong>Email:</strong>
                  <a
                    href="mailto:info@ibsltd.com"
                    class="text-brand-primary hover:text-brand-primary-hover ml-2"
                    >info@ibsltd.com</a
                  >
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a
                    href="tel:+971586271722"
                    class="text-brand-primary hover:text-brand-primary-hover ml-2"
                    >+971 58-627-1722</a
                  >
                </p>
              </div>
              <div class="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5322456237316!2d55.371861!3d25.123084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f63d9b32d7373%3A0x5a6e7e0bae998d33!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1646383524861!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen="true"
                  loading="lazy"
                  class="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Animation styles */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slowPan {
  0% {
    transform: scale(1.1) translate(0, 0);
  }
  50% {
    transform: scale(1.15) translate(-1%, -1%);
  }
  100% {
    transform: scale(1.1) translate(0, 0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
}

.animate-fade-in-delayed-more {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.6s forwards;
}

.animate-slow-pan {
  animation: slowPan 30s ease-in-out infinite;
}
</style>
