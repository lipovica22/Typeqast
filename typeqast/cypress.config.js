const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: '4d3re5',
  e2e: {
    setupNodeEvents(on, config) {
      projectId: '4d3re5'
    },
  },
});
