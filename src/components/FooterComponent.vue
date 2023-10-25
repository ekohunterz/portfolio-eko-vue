<script setup>
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandLinkedin
} from '@tabler/icons-vue'
</script>

<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto flex flex-col items-center">
      <p class="text-center mb-2">2023 &copy; Designed with ❤️ By Eko Teguh Muhammadi</p>

      <!-- Ikonya dapat diambil dari font awesome atau ikon lainnya -->
      <div class="flex space-x-4 mt-4">
        <a
          href="https://www.instagram.com/ekoteguh.m/"
          target="_blank"
          class="text-white hover:text-gray-400 transition duration-300"
        >
          <IconBrandInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/eko-teguh-muhammadi-3614b1144/"
          target="_blank"
          class="text-white hover:text-gray-400 transition duration-300"
        >
          <IconBrandLinkedin />
        </a>
        <a
          href="https://wa.me/+6281283255389"
          target="_blank"
          class="text-white hover:text-gray-400 transition duration-300"
        >
          <IconBrandWhatsapp />
        </a>
        <a
          href="https://github.com/ekohunterz"
          target="_blank"
          class="text-white hover:text-gray-400 transition duration-300"
        >
          <IconBrandGithub />
        </a>
      </div>
    </div>
  </footer>
</template>
