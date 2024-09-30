const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  screenshotsFolder: 'cypress/screenshots',
  waitForAnimations: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'tests/test-output-[hash].xml',
    toConsole: true,
    attachments: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager',
    specPattern: [
      'cypress/e2e/Bank Manager/addCustomer.js',
    ],
    testIsolation:false,
  },

});
