import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log('CYPRESS ON :', on)
      console.log('CYPRESS CONFIG :', config)
      return config
    },
  },
})
