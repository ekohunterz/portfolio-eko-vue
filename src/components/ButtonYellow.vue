<template>
  <a
    :href="href"
    class="bg-secondary mt-6 py-2 px-10 text-xl text-white rounded-full shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out inline-block hover:scale-110"
  >
    {{ title }}
  </a>
</template>

<script setup>
defineProps({
  href: String,
  title: String
})
</script>
