<template>
  <div class="bg-white shadow-lg h-auto rounded-lg overflow-hidden">
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full object-cover transition duration-300 ease-in-out hover:opacity-0"
    />
    <div class="p-4 font-poppins">
      <h2 class="text-2xl font-semibold mb-4">{{ project.title }}</h2>
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="text-primary px-2 py-1 rounded-3xl me-2 text-sm bg-gray-700"
      >
        {{ tech }}
      </span>
    </div>
    <div
      class="absolute flex-col items-start w-full rounded-md top-0 h-full bg-primary opacity-0 transition ease-in-out duration-300 hover:opacity-100"
    >
      <div class="p-8 font-poppins">
        <h1 class="text-secondary text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-1 font-extrabold">
          {{ project.title }}
        </h1>
        <div class="flex gap-2 mb-5">
          <p class="text-black text-base md:text-lg xl:text-xl 2xl:text-2xl">
            {{ project.technologies.join(', ') }}
          </p>
        </div>
        <div class="flex gap-4 mb-3">
          <div class="h-[2px] w-[30px] rounded-md bg-black"></div>
          <div class="h-[2px] w-[15px] rounded-md bg-black"></div>
        </div>
        <p
          class="text-black xs:leading-relaxed xl:leading-loose 2xl:leading-10 text-base md:text-lg 2xl:text-xl mb-3 xs:mb-4 md:mb-5 xl:mb-7"
        >
          {{ project.description }}
        </p>
        <div class="flex gap-4">
          <a
            v-if="project.demoLink"
            :href="project.demoLink"
            target="_blank"
            class="block items-center bg-secondary tracking-wide hover:bg-opacity-80 duration-300 px-4 py-1 xl:px-7 xl:py-3 ease-in-out font-semibold text-black rounded"
          >
            Demo</a
          >
          <a
            :href="project.githubLink"
            target="_blank"
            class="block items-center bg-secondary tracking-wide hover:bg-opacity-80 duration-300 px-4 py-1 xl:px-7 xl:py-3 ease-in-out font-semibold text-black rounded"
          >
            Github</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object // Objek proyek untuk ditampilkan dalam kartu
  }
}
</script>
