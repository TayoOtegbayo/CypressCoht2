const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
