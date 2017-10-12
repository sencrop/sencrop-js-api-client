'use strict';

var API = require('./index');
var axios = require('axios');
var httpAdapter = require('axios/lib/adapters/http');
var nock = require('nock');

axios.defaults.adapter = httpAdapter;

describe('API', function () {
  describe('for simple URI', function () {
    test('should work', function () {
      nock('https://api.sencrop.com', {
        encodedQueryParams: true
      }).get('/v1/ping').reply(200, {
        pong: 'pong'
      }, ['content-type', 'application/json', 'Transaction-Id', '11', 'Date', 'Thu, 27 Jul 2017 14:23:57 GMT', 'Connection', 'close', 'Transfer-Encoding', 'chunked']);

      return API.getPing().then(function (response) {
        return expect({
          status: response.status,
          headers: response.headers,
          body: response.data
        }).toMatchSnapshot();
      });
    });
  });

  describe('with Token/URI params and query strings', function () {
    test('should work', function () {
      nock('https://api.sencrop.com', {
        encodedQueryParams: true
      }).get('/v1/users/902/devices/1B28C5/statistics').query({
        startDate: '1404172800000',
        endDate: '1500595200000',
        measures: ['RH_AIR_H1', 'TEMP_AIR_H1']
      }).reply(200, {
        models: {
          7: {
            id: 7,
            contents: {
              name: 'Raincrop',
              externalDiameter: 0.206,
              conception: 'France - Lille',
              manufacturing: 'Europe-France',
              calibration: 'Ok',
              weight: 3.5
            }
          }
        },
        devices: {
          '1B28C5': {
            id: '1B28C5',
            contents: {
              serial: '1B28C5',
              identification: 'RC000117',
              name: 'RC000117',
              date_start: 1494799200,
              date_stop: 2147483647,
              role: 'owner'
            }
          }
        },
        entry: '1B28C5',
        measures: {
          interval: 'month',
          data: [{
            key_as_string: '1404165600000',
            key: 1404165600000,
            doc_count: 0,
            RH_AIR_H1: {}
          }, {
            key_as_string: '1406844000000',
            key: 1406844000000,
            doc_count: 0,
            RH_AIR_H1: {}
          }]
        }
      }, ['content-type', 'application/json', 'Transaction-Id', '12', 'Date', 'Thu, 27 Jul 2017 14:23:57 GMT', 'Connection', 'close', 'Transfer-Encoding', 'chunked']);

      return API.getUserDeviceStatistics({
        userId: 902,
        deviceId: '1B28C5',
        startDate: new Date('2014-07-01T00:00:00.000Z').getTime(),
        endDate: new Date('2017-07-21T00:00:00.000Z').getTime(),
        authorization: 'Bearer 902-771',
        measures: ['RH_AIR_H1', 'TEMP_AIR_H1']
      }).then(function (response) {
        return expect({
          status: response.status,
          headers: response.headers,
          body: response.data
        }).toMatchSnapshot();
      });
    });
  });

  describe('with a body', function () {
    test('should work', function () {
      nock('https://api.sencrop.com', {
        encodedQueryParams: true
      }).put('/v1/users/902/devices/1B28C5', {
        contents: {
          serial: '1B28C5',
          identification: 'RC000117',
          name: 'RC000117',
          date_start: 1494799200,
          date_stop: 2147483647,
          role: 'owner'
        }
      }).reply(201, {
        id: '1B28C5',
        contents: {
          serial: '1B28C5',
          identification: 'RC000117',
          name: 'RC000117',
          date_start: 1494799200,
          date_stop: 2147483647,
          role: 'owner'
        }
      }, ['content-type', 'application/json', 'Transaction-Id', '13', 'Date', 'Thu, 27 Jul 2017 14:23:57 GMT', 'Connection', 'close', 'Transfer-Encoding', 'chunked']);

      return API.putUserDevice({
        userId: 902,
        deviceId: '1B28C5',
        authorization: 'Bearer 902-771',
        body: {
          contents: {
            serial: '1B28C5',
            identification: 'RC000117',
            name: 'RC000117',
            date_start: 1494799200,
            date_stop: 2147483647,
            role: 'owner'
          }
        }
      }).then(function (response) {
        return expect({
          status: response.status,
          headers: response.headers,
          body: response.data
        }).toMatchSnapshot();
      });
    });
  });
});