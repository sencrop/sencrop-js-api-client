'use strict';

const API = require('../src/index');
const moxios = require('moxios');

describe('API', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('for simple URI', () => {
    it('should work', (done) => {
      const promise = API.getPing({})
      .then(response => expect({
        status: response.status,
        headers: response.headers,
        body: response.data,
      }).toEqual({
        status: 200,
        headers: {}.undef,
        body: {
          pong: 'pong',
        },
      }));


      moxios.wait(() => {
        Promise.all([
          promise,
          moxios.requests.mostRecent()
          .respondWith({
            status: 200,
            response: {
              pong: 'pong',
            },
          })
        ])
        .then(done)
        .catch(done.fail);
      });
    });
  });

  describe('with Token/URI params and query strings', () => {
    it('should work', (done) => {
      const promise = API.getUserDeviceStatistics({
        userId: 902,
        deviceId: '1B28C5',
        startTime: new Date('2014-07-01T00:00:00.000Z').getTime(),
        endTime: new Date('2017-07-21T00:00:00.000Z').getTime(),
        authenticationToken: '902-771',
        measures: ['RH_AIR_H1', 'TEMP_AIR_H1'],
      })
      .then(response => expect({
        status: response.status,
        headers: response.headers,
        body: response.data,
      }).toEqual({
        status: 200,
        headers: {}.undef,
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
      }));


      moxios.wait(() => {
        Promise.all([
          promise,
          moxios.requests.mostRecent()
          .respondWith({
            status: 200,
            response: {
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
          }),
        ])
        .then(done)
        .catch(done.fail);
      });
    });
  });

  describe('with a body', () => {
    it('should work', (done) => {
      const promise = API.putUserDevice({
        userId: 902,
        deviceId: '1B28C5',
        authenticationToken: '902-771',
        body: {
          contents: {
            serial: '1B28C5',
            identification: 'RC000117',
            name: 'RC000117',
            date_start: 1494799200,
            date_stop: 2147483647,
            role: 'owner',
          },
        },
      })
      .then(response => expect({
        status: response.status,
        headers: response.headers,
        body: response.data,
      }).toEqual({
        status: 201,
        headers: {}.undef,
        body: {
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
      }));

      moxios.wait(() => {
        Promise.all([
          promise,
          moxios.requests.mostRecent()
          .respondWith({
            status: 201,
            response: {
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
          }),
        ])
        .then(done)
        .catch(done.fail);
      });
    });
  });
});
