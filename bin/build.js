/* eslint no-console:0 */
'use strict';

/* Architecture Note #1: Generating the API

Since we have a OpenAPI file, we are generating
 the API to avoid boilerplate code.

A small article (in french) about why and how
 to do that:
http://insertafter.com/fr/blog/generation_api_cliente.html

*/

const { generateSDKFromOpenAPI } = require('@sencrop/openapi-js-sdk-builder');
const path = require('path');
const fs = require('fs');
const buildVersion = require(path.join(__dirname, '..', 'package.json'))
  .version;

generateSDKFromOpenAPI(
  JSON.stringify(require('../src/openapi.api.json')),
  buildVersion,
)
  .then(content => {
    return new Promise((resolve, reject) => {
      fs.writeFile('src/index.js', content, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
