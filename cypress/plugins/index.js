const path = require('path');

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium') {
      launchOptions.args.push('--disable-site-isolation-trials');

      console.log('------------------------>>>>>>>>> browser', browser);

      // we could also restrict the extension
      // to only load when "browser.isHeaded" is true
      let extensionFolder = path.resolve(
        __dirname,
        '..',
        '..',
        './browser_extensions',
        'hola_extension'
      );

      console.log('adding hola extension from', extensionFolder);

      launchOptions.extensions.push(extensionFolder);

      extensionFolder = path.resolve(
        __dirname,
        '..',
        '..',
        './browser_extensions',
        'react_dev_tools'
      );

      console.log('adding React DevTools extension from', extensionFolder);

      launchOptions.extensions.push(extensionFolder);

      extensionFolder = path.resolve(
        __dirname,
        '..',
        '..',
        './browser_extensions',
        'redux_dev_tools'
      );

      console.log('adding Redux DevTools extension from', extensionFolder);

      launchOptions.extensions.push(extensionFolder);

      // console.log('launchOptions args', launchOptions.args);

      // whatever you return here becomes the new launchOptions
      return launchOptions;
    }
  });
};
