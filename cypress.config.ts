import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1050,
  viewportWidth: 1680,
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: '**/examples/*/*.js',
  },
})