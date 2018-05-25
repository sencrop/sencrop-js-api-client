'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const inquirer = require('inquirer');

const { getSwaggerOperations } = require('swagger-http-router/src/utils');

var questions = [
  {
    type: 'input',
    name: 'url',
    message: "What's the api doc endpoint?",
    default: 'http://localhost:1337/master/openAPI',
  },
  {
    type: 'input',
    name: 'token',
    message: "What's the api token (if secured endpoint)?",
  },
];

(async () => {
  try {
    const { url, token } = await inquirer.prompt(questions);

    const request = {
      method: 'GET',
      url: url,
    };
    if (token) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    const api = (await axios(request)).data;
    const operations = getSwaggerOperations(api);

    api.paths = operations.reduce((paths, operation) => {
      if (operation.tags && operation.tags.includes('private')) {
        return paths;
      }

      api.host = 'api.sencrop.com';
      api.basePath = '/v1';

      api.paths[operation.path][operation.method].tags = (
        operation.tags || []
      ).filter(t => !(t.startsWith('memx') || t.startsWith('tx')));

      paths[operation.path] = paths[operation.path] || {};
      paths[operation.path][operation.method] =
        api.paths[operation.path][operation.method];

      return paths;
    }, {});

    fs.writeFileSync(
      path.join(__dirname, '../src/swagger.api.json'),
      JSON.stringify(api, null, 2)
    );
  } catch (err) {
    throw err;
  }
})();
