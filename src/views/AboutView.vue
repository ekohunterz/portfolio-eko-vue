<script setup>
import ButtonYellow from '../components/ButtonYellow.vue'
import SkillView from './SkillView.vue'
</script>

<template>
  <section id="about" class="bg-slate-400 bg-opacity-10 min-h-screen">
    <div class="container">
      <div className="flex flex-wrap font-poppins py-20 justify-between">
        <div class="w-full md:w-1/2 mb-10">
          <h1
            class="text-primary text-4xl font-bold"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="300"
          >
            About Me
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="300"
            class="text-primary mt-16 text-opacity-80"
          >
            Hello, my name is Eko Teguh Muhammadi. I live in Cilegon City, Banten, Indonesia. I was
            someone who has been interested in the world of computers and technology. I started
            learning programming in 2019. Since then, i gradually improve my skill until now and
            will keep improving in the future and always explore new things.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="300"
            class="text-primary text-opacity-80"
          >
            I love to learn new things, write some code, creating some bugs, and play video games.
          </p>
          <ButtonYellow
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class=""
            target="_blank"
            href="https://drive.google.com/file/d/1QAz5yHeh14VI7lwheCcYaafEGO7rhaqV/view?usp=sharing"
            title="Download CV"
          />
        </div>
        <div
          class="lg:ps-7 w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 class="text-primary lg:text-end text-4xl font-bold">Education</h1>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="border-2 mt-16 p-4 border-dashed rounded-tr-lg lg:w-2/3 lg:ms-auto hover:border-secondary hover:scale-110"
          >
            <h5 class="text-primary font-bold text-2xl leading-relaxed">Universitas Serang Raya</h5>
            <p class="text-secondary text-base">
              Informatics Enginering | <span class="font-semibold">GPA: 3.73</span>
            </p>
            <p class="text-primary text-base">2018-2023</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="border-2 mt-3 p-4 border-dashed rounded-tr-lg lg:w-2/3 lg:ms-auto hover:border-secondary hover:scale-110"
          >
            <h5 class="text-primary font-bold text-2xl leading-relaxed">
              SMK Negeri 1 Kota Cilegon
            </h5>
            <p class="text-secondary text-base">Computer Network Enginering</p>
            <p class="text-primary text-base">2014-2017</p>
          </div>
        </div>
      </div>
      <SkillView />
    </div>
  </section>
</template>
