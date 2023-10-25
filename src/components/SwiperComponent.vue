<script setup>
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProjectCard from './ProjectCard.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

defineProps({
  projects: Array
})

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <swiper
    :modules="[Navigation, EffectCoverflow]"
    :breakpoints="{
      '1024': {
        slidesPerView: 2,
        spaceBetween: 50
      }
    }"
    :spaceBetween="50"
    navigation
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }"
    :effect="'coverflow'"
    :pagination="true"
    :grabCursor="true"
    :centeredSlides="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="mt-16"
  >
    <swiper-slide v-for="(project, index) in projects" :key="index">
      <ProjectCard :project="project" />
    </swiper-slide>
  </swiper>
</template>
