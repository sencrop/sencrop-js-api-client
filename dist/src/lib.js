'use strict';

module.exports = {
  cleanQuery: cleanQuery,
  sortMultipleQuery: sortMultipleQuery
};

function cleanQuery(query) {
  return Object.keys(query).filter(function (key) {
    return 'undefined' !== typeof query[key];
  }).filter(function (key) {
    return !(query[key] instanceof Array) || 0 !== query[key].length;
  }).reduce(function (newQuery, key) {
    newQuery[key] = query[key];
    return newQuery;
  }, {});
}

function sortMultipleQuery(a, b) {
  return a > b ? 1 : -1;
}