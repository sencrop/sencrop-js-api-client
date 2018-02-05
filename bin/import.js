'use strict';

const fs = require('fs');
const path = require('path');
const { getSwaggerOperations } = require('swagger-http-router/src/utils');

const API = require(path.join(process.cwd(), process.argv[2]));
const operations = getSwaggerOperations(API);

API.paths = operations.reduce((paths, operation) => {
  if (operation.tags && operation.tags.includes('private')) {
    return paths;
  }

  API.paths[operation.path][operation.method].tags = (
    operation.tags || []
  ).filter(t => !(t.startsWith('memx') || t.startsWith('tx')));

  paths[operation.path] = paths[operation.path] || {};
  paths[operation.path][operation.method] =
    API.paths[operation.path][operation.method];

  return paths;
}, {});

fs.writeFileSync(
  path.join(__dirname, '../src/swagger.api.json'),
  JSON.stringify(API, null, 2)
);
