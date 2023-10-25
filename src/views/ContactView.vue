<script setup>
import { ref } from 'vue'
import { IconBrandWhatsapp, IconMail } from '@tabler/icons-vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const successMessage = ref('')
const errorMessage = ref('')

const sendEmail = () => {
  emailjs.sendForm('service_30ghp26', 'template_fkz8nqx', form.value, 'o2fVgPqnXgrsimN67').then(
    (result) => {
      successMessage.value = 'Email berhasil terkirim!'
      console.log(result.text)
    },
    (error) => {
      errorMessage.value = 'Gagal mengirim email. Silakan coba lagi.'
      console.log(error.text)
    }
  )
}
</script>

<template>
  <section id="contact" class="min-h-[90vh]">
    <div class="container py-20 font-poppins">
      <div class="flex flex-wrap">
        <div class="p-8 w-full lg:w-1/3">
          <h1
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            class="text-primary text-4xl font-bold"
          >
            Contact Me
          </h1>
          <p
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            class="text-lg 2xl:text-xl md:max-w-lg mt-16 text-primary mb-8"
          >
            Feel free to contact me if you're interested in what I have to offer, or if you have any
            questions.
          </p>
          <div class="flex items-center gap-5 mb-10">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              class="px-3 py-2 bg-redcake rounded-full"
            >
              <IconBrandWhatsapp color="white" size="48" />
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in-out" class="">
              <p class="text-sm text-secondary xl:text-base font-semibold">WhatsApp</p>
              <p class="text-base text-primary font-pops xl:text-lg">+62 812-8325-5389</p>
            </div>
          </div>
          <div class="flex items-center gap-5 mb-10">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              class="px-3 py-2 bg-redcake rounded-full"
            >
              <IconMail color="white" size="48" />
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-in-out" class="">
              <p class="text-sm text-secondary xl:text-base font-semibold">Email</p>
              <p class="text-base text-primary font-pops xl:text-lg">ekohunterz@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="p-8 w-full lg:w-3/5">
          <h1
            class="text-primary text-4xl font-bold"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
          >
            Drop A Line
          </h1>
          <form ref="form" @submit.prevent="sendEmail">
            <div class="mb-4 mt-16" data-aos="zoom-in-up" data-aos-easing="ease-in-out">
              <input
                type="text"
                name="name"
                placeholder="Insert name here..."
                class="mt-1 p-2 w-full text-primary border-2 rounded-md bg-transparent focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div class="mb-4" data-aos="zoom-in-up" data-aos-easing="ease-in-out">
              <input
                type="email"
                name="email"
                placeholder="Insert email here..."
                class="mt-1 p-2 w-full text-primary border-2 rounded-md bg-transparent focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div class="mb-4" data-aos="zoom-in-down" data-aos-easing="ease-in-out">
              <textarea
                name="message"
                placeholder="Insert message here..."
                class="mt-1 p-2 w-full text-primary border-2 rounded-md bg-transparent focus:ring focus:ring-primary focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-out"
              type="submit"
              class="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-primary"
            >
              Submit
            </button>
          </form>
          <div v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</div>
          <div v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
