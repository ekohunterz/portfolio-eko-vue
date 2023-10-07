<template>
  <div class="bg-primary">
    <div class="flex justify-center items-center h-screen">
      <div>
        <img :src="gif" alt="load" />
      </div>
    </div>
  </div>
</template>

<script setup>
import gif from '/loading.gif'
</script>
