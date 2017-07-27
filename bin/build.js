/* eslint no-console:0 */
'use strict';

/* Architecture Note #1: Generating the API

Since we have a Swagger file, we are generating
 the API to avoid boilerplate code.

A small article (in french) about why and how
 to do that:
http://insertafter.com/fr/blog/generation_api_cliente.html

*/

const camelCase = require('camel-case');
const fs = require('fs');
const {
  flattenSwagger,
  getSwaggerOperations,
} = require('swagger-http-router/src/utils');

flattenSwagger(require('../src/swagger.api.json'))
.then((API) => {

  const content = `
'use strict';

const querystring = require('querystring');
const axios = require('axios');
const {
  cleanQuery,
  sortMultipleQuery, // eslint-disable-line
} = require('./lib');

const API = {
  ${ getSwaggerOperations(API).map((operation) => {
    const { path, method, operationId, parameters } = operation;

    return `${
      operationId
    }: ({
      _,${ (parameters || []).map((parameter) => {
        const variableName = camelCase(parameter.name);
        return `
        ${ variableName },`;
      }).join('') }
  }, options) => {
    const method = '${ method }';
    let urlParts = [${
      path.split('/')
      .filter(identity => identity)
      .map((part) => {
        const result = (/^{([a-z0-9]+)}$/ig).exec(part);

        if(result) {
          return `
      ${ camelCase(result[1]) },`;
        }
        return `
      '${ part }',`;
      }).join('')}
    ];
    let headers = {${
    (parameters || [])
    .filter(p => 'header' === p.in)
    .map(parameter => `
      ${ parameter.name }: ${ camelCase(parameter.name) },`
    ).join('')}
    };
    let qs = cleanQuery({${
    (parameters || [])
    .filter(p => 'query' === p.in)
    .map(parameter => `
      ${ parameter.name }: ${ camelCase(parameter.name)}${
        parameter.ordered ?
        '.sort(sortMultipleQuery)' :
        ''
      },`
    ).join('')}
    });
    let data = ${
      // TODO: Naive approach to setting up the
      // body since it assume only JSON may be
      // sent. Generalize it.
      (parameters || [])
      .filter(p => 'body' === p.in)[0] ?
      camelCase(
        (parameters || [])
        .filter(p => 'body' === p.in)[0].name
      ) :
      '{}.undef'
    };

    return axios(Object.assign({
      baseURL: '${ API.schemes[0] || 'https'}://${
        API.host + (API.basePath || '')
      }/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },`;
  }).join('\n  ') }
};

module.exports = API;
`;

  return new Promise((resolve, reject) => {
    fs.writeFile('src/index.js', content, (err) => {
      if(err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
})
.catch((err) => {
  console.error(err.stack);
  process.exit(1);
});