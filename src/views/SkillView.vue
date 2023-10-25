<template>
  <h1
    class="text-primary text-4xl font-bold text-center"
    data-aos="fade-left"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine"
  >
    Skill
  </h1>
  <div
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine"
    className="flex font-poppins mt-5 justify-center "
  >
    <div
      class="flex-wrap rounded-md p-3 gap-6 flex justify-center border-2 border-dashed text-primary hover:border-secondary"
    >
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandHtml5 size="48" />
        <h5>HTML</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandCss3 size="48" />
        <h5>CSS</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandJavascript size="48" />
        <h5>Javascript</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandLaravel size="48" />
        <h5>Laravel</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandVue size="48" />
        <h5>Vue</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandPhp size="48" />
        <h5>PHP</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandMysql size="48" />
        <h5>MySQL</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandBootstrap size="48" />
        <h5>Bootstrap</h5>
      </div>
      <div class="flex flex-col items-center justify-center hover:scale-110 hover:text-secondary">
        <IconBrandTailwind size="48" />
        <h5>TailwindCSS</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandMysql,
  IconBrandVue,
  IconBrandBootstrap,
  IconBrandTailwind
} from '@tabler/icons-vue'
</script>
