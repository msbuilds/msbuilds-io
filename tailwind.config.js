module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",    
    "./layouts/**/*.vue",    
    "./pages/**/*.vue",    
    "./plugins/**/*.{js,ts}",   
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '225ms'
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
    },
    extend: {
      screens: {
        'xs': '450px'
      },
      borderWidth: {
        '3': '3px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      maxWidth: {
        '8xl': '1540px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
