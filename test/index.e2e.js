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
    it('should work', async () => {
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
    });
  });
});
