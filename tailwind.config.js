/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        textColor: '#00040b',
        lightText: '#646464',
        primary: '#ffcb00',
        secondery: '#df331c',
        tertiary: '#0d57cf',
        quaternary: '#571af2',
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        merriweather: ['merriweather'],
      },
    },
    container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				sm: "16px",
				md: "16px",
				lg: "32px",
				xl: "32px",
			},
		},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
  ],
}
