'use strict';

const API = require('../src');
const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');
const mock = new MockAdapter(axios);

describe('API', () => {
  afterEach(() => {
    mock.restore();
  });

  describe('for simple URI', () => {
    it('should work', async done => {
      mock.onGet('https://api.sencrop.com/v1/ping').reply(200, {
        pong: 'pong',
      });

      const response = await API.getPing({});

      expect({
        status: response.status,
        body: response.data,
      }).toEqual({
        status: 200,
        body: {
          pong: 'pong',
        },
      });

      done();
    });
  });

  describe('with Token/URI params and query strings', () => {
    it('should work', async done => {
      mock
        .onGet('https://api.sencrop.com/v1/users/902/devices/1B28C5/statistics')
        .reply(200, {
          models: {
            7: {
              id: 7,
              contents: {
                name: 'Raincrop',
                externalDiameter: 0.206,
                conception: 'France - Lille',
                manufacturing: 'Europe-France',
                calibration: 'Ok',
                weight: 3.5,
              },
            },
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
                role: 'owner',
              },
            },
          },
          entry: '1B28C5',
          measures: {
            interval: 'month',
            data: [
              {
                key_as_string: '1404165600000',
                key: 1404165600000,
                doc_count: 0,
                RH_AIR_H1: {},
              },
              {
                key_as_string: '1406844000000',
                key: 1406844000000,
                doc_count: 0,
                RH_AIR_H1: {},
              },
            ],
          },
        });

      const response = await API.getUserDeviceStatistics({
        userId: 902,
        deviceId: '1B28C5',
        startDate: new Date('2014-07-01T00:00:00.000Z').getTime(),
        endDate: new Date('2017-07-21T00:00:00.000Z').getTime(),
        authorization: '902-771',
        measures: ['RH_AIR_H1', 'TEMP_AIR_H1'],
      });

      expect({
        status: response.status,
        body: response.data,
      }).toEqual({
        status: 200,
        body: {
          models: {
            7: {
              id: 7,
              contents: {
                name: 'Raincrop',
                externalDiameter: 0.206,
                conception: 'France - Lille',
                manufacturing: 'Europe-France',
                calibration: 'Ok',
                weight: 3.5,
              },
            },
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
                role: 'owner',
              },
            },
          },
          entry: '1B28C5',
          measures: {
            interval: 'month',
            data: [
              {
                key_as_string: '1404165600000',
                key: 1404165600000,
                doc_count: 0,
                RH_AIR_H1: {},
              },
              {
                key_as_string: '1406844000000',
                key: 1406844000000,
                doc_count: 0,
                RH_AIR_H1: {},
              },
            ],
          },
        },
      });

      done();
    });
  });

  // describe('with a body', () => {
  //   it('should work', async done => {
  //     mock
  //       .onPut('https://api.sencrop.com/v1/organisations/1/devices/1B28C5')
  //       .reply(201, {
  //         id: '1B28C5',
  //         contents: {
  //           serial: '1B28C5',
  //           identification: 'RC000117',
  //           name: 'RC000117',
  //           date_start: 1494799200,
  //           date_stop: 2147483647,
  //           role: 'owner',
  //         },
  //       });

  //     const response = await API.putOrganisationDevice({
  //       organisationId: 1,
  //       userId: 902,
  //       deviceId: '1B28C5',
  //       authorization: '902-771',
  //       body: {
  //         contents: {
  //           serial: '1B28C5',
  //           identification: 'RC000117',
  //           name: 'RC000117',
  //           date_start: 1494799200,
  //           date_stop: 2147483647,
  //           role: 'owner',
  //         },
  //       },
  //     });

  //     expect({
  //       status: response.status,
  //       body: response.data,
  //     }).toEqual({
  //       status: 201,
  //       body: {
  //         id: '1B28C5',
  //         contents: {
  //           serial: '1B28C5',
  //           identification: 'RC000117',
  //           name: 'RC000117',
  //           date_start: 1494799200,
  //           date_stop: 2147483647,
  //           role: 'owner',
  //         },
  //       },
  //     });

  //     done();
  //   });
  // });
});
