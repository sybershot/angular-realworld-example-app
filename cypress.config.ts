import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1050,
  viewportWidth: 1680,
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: '**/examples/*/*.js',
    video: false,
  },
  "retries": {
    "runMode": 2,
    "openMode": 1
  },
  "env": {
    "username": "automationqa@gmail.com",
    "password": "automationqa",
    "apiUrl": "https://api.realworld.io"
  }
})