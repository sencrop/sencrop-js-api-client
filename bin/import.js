'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'url',
    message: "What's the api doc endpoint?",
    default: 'https://api.sencrop.com/v1/openAPI',
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

    api.servers = ['https://api.sencrop.com/v1'];

    fs.writeFileSync(
      path.join(__dirname, '../src/openapi.api.json'),
      JSON.stringify(api, null, 2),
    );
  } catch (err) {
    throw err;
  }
})();
