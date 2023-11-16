import { defineConfig } from 'cypress'
// import * from 'fs'

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    video: true,
    pageLoadTimeout: 12000,
  },

  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://automationexercise.com',
  },
})
