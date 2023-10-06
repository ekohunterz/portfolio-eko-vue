/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1440px' // atau sesuaikan dengan nilai yang diinginkan
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'system-ui', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      display: ['Oswald'],
      body: ['Open Sans']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#FAF9F6',
        secondary: '#FFC300'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
