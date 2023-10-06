<template>
  <nav
    :class="{
      'bg-opacity-80 bg-indigo-900 backdrop-blur-sm border-b-gray-400 shadow-sm': isScrolled,
      'bg-opacity-0': !isScrolled
    }"
    class="p-4 z-[9999] fixed top-0 right-0 left-0 transition-all duration-300"
  >
    <div class="container flex justify-between items-center">
      <div
        @click="scrollToSection('hero')"
        class="text-white font-bold text-xl hover:cursor-pointer"
      >
        EKO TEGUH MUHAMMADI
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="28px"
            height="28px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex space-x-4">
        <button
          @click="scrollToSection('about')"
          class="text-white text-lg font-semibold hover:text-gray-300"
        >
          About Me
        </button>
        <button
          @click="scrollToSection('project')"
          class="text-white text-lg font-semibold hover:text-gray-300"
        >
          Project
        </button>
        <button
          @click="scrollToSection('certificate')"
          class="text-white text-lg font-semibold hover:text-gray-300"
        >
          Certificate
        </button>
        <button
          @click="scrollToSection('contact')"
          class="text-white text-lg font-semibold hover:text-gray-300"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile menu (hidden by default) -->
  <div v-if="isMenuOpen" class="md:hidden pt-24 bg-gray-700 p-2">
    <button
      @click="scrollToSection('about')"
      class="block text-white text-lg font-semibold py-2 hover:bg-gray-600"
    >
      About
    </button>
    <button
      @click="scrollToSection('project')"
      class="block text-white text-lg font-semibold py-2 hover:bg-gray-600"
    >
      Project
    </button>
    <button
      @click="scrollToSection('certificate')"
      class="block text-white text-lg font-semibold py-2 hover:bg-gray-600"
    >
      Certificate
    </button>
    <button
      @click="scrollToSection('contact')"
      class="block text-white text-lg font-semibold py-2 hover:bg-gray-600"
    >
      Contact
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeMount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
