<script setup>
import SwiperComponent from '../components/SwiperComponent.vue' // Pastikan path import sesuai dengan struktur folder Anda

const projectsData = [
  {
    title: 'Absensi Siswa',
    description:
      'This system provides an efficient way for teachers  to manage attendance records, monitor students punctuality, and generate attendance reports.',
    image: '/absen-laravel.png',
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com/ekohunterz/absensi-siswa-laravel',
    demoLink: ''
  },
  {
    title: 'Perpustakaan Sekolah',
    description:
      'This system aims to automate library operations, enhance accessibility to resources, and promote a culture of reading and learning among students and staff.',
    image: '/perpus.png',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    githubLink: 'https://github.com/ekohunterz/perpustakaan',
    demoLink: ''
  },
  {
    title: 'Sistem Pakar Teorema Bayes',
    description:
      'This system aims to assist cat owners and veterinarians in making informed decisions about their pets health by offering reliable diagnostic suggestions.',
    image: '/bayes.png',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    githubLink: '#',
    demoLink: ''
  }
]
</script>

<template>
  <section id="project" class="lg:min-h-screen">
    <div class="container py-20">
      <h1
        class="text-primary text-4xl text-center font-bold"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
      >
        Project
      </h1>
      <swiper-component
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        :projects="projectsData"
        class=""
      />
    </div>
  </section>
</template>
