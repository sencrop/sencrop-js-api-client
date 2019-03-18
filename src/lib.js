'use strict';

module.exports = {
  cleanQuery,
  cleanHeaders,
  sortMultipleQuery,
};

function cleanQuery(query) {
  return Object.keys(query)
    .filter(key => 'undefined' !== typeof query[key])
    .filter(key => !(query[key] instanceof Array) || 0 !== query[key].length)
    .reduce((newQuery, key) => {
      newQuery[key] = query[key];
      return newQuery;
    }, {});
}

function cleanHeaders(headers) {
  return Object.keys(headers)
    .filter(key => 'undefined' !== typeof headers[key])
    .reduce((newHeaders, key) => {
      newHeaders[key] = headers[key];
      return newHeaders;
    }, {});
}

function sortMultipleQuery(a, b) {
  return a > b ? 1 : -1;
}
