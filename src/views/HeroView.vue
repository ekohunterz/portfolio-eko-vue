<template>
  <section id="hero" class="min-h-screen">
    <div className="container ">
      <div className="flex flex-wrap font-poppins justify-between">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="w-full mt-48 lg:w-1/2 "
        >
          <h1
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="500"
            className="font-bold text-4xl text-primary leading-relaxed"
          >
            Hi, <span className="text-secondary">I'am</span>
            <span className="block text-5xl">
              Eko Teguh<span className="text-secondary"> Muhammadi</span>
            </span>
          </h1>
          <div class="bg-primary h-1 w-24 mt-3"></div>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-2xl text-primary font-semibold mt-3 "
          >
            Junior <span className="text-red-800">Web Developer</span>
          </p>
          <br />
          <ButtonYellow href="#about" title="About Me" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="w-full  mt-48 mb-10  lg:w-1/3 "
        >
          <div className="w-full grid place-items-center">
            <img
              src="/foto.png"
              width="300"
              className="lg:hover:scale-150 lg:hover:-rotate-6 transition duration-300 overflow-auto"
            />
          </div>
        </div>
      </div>
      <h1
        class="mt-20 text-center font-poppins text-2xl text-primary"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        Follow Me On :
      </h1>
      <div
        class="flex gap-2 mb-3 justify-center mx-auto text-primary"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <a href="https://www.instagram.com/ekoteguh.m/" class="hover:text-yellow-500">
          <IconBrandInstagram size="28" />
        </a>
        <a href="https://wa.me/+6281283255389" class="hover:text-green-500">
          <IconBrandWhatsapp size="28" />
        </a>
        <a href="https://github.com/ekohunterz/" class="hover:text-gray-500">
          <IconBrandGithub size="28" />
        </a>
        <a
          href="https://www.linkedin.com/in/eko-teguh-muhammadi-3614b1144/"
          class="hover:text-blue-500"
        >
          <IconBrandLinkedin size="28" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonYellow from '../components/ButtonYellow.vue'
import '/foto.png' // Impor gambar agar dapat digunakan
</script>

<script>
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandLinkedin
} from '@tabler/icons-vue'

export default {
  components: {
    IconBrandInstagram,
    IconBrandGithub,
    IconBrandWhatsapp,
    IconBrandLinkedin
  }
}
</script>
