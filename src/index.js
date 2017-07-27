
'use strict';

const querystring = require('querystring');
const axios = require('axios');
const {
  cleanQuery,
  sortMultipleQuery, // eslint-disable-line
} = require('./lib');

const API = {
  getPing: ({
      _,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'ping',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getCrops: ({
      _,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'crops',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postLostPassword: ({
      _,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'password',
      'lost',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putPassword: ({
      _,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'password',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postLogin: ({
      _,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      'sign_in',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postVerify: ({
      _,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      'verify',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUser: ({
      _,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUser: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUser: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserGuests: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'guests',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUserGuest: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      userId,
      'guests',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserGuest: ({
      _,
        userId,
        guestId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'guests',
      guestId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  deleteUserGuest: ({
      _,
        userId,
        guestId,
        authorization,
  }, options) => {
    const method = 'delete';
    let urlParts = [
      'users',
      userId,
      'guests',
      guestId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserCollaborators: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'collaborators',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUserCollaborator: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      userId,
      'collaborators',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserCollaborator: ({
      _,
        userId,
        collaboratorId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'collaborators',
      collaboratorId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  deleteUserCollaborator: ({
      _,
        userId,
        collaboratorId,
        authorization,
  }, options) => {
    const method = 'delete';
    let urlParts = [
      'users',
      userId,
      'collaborators',
      collaboratorId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserAggregations: ({
      _,
        userId,
        compute,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'aggregations',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
      compute: compute,
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUserAggregation: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      userId,
      'aggregations',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserAggregation: ({
      _,
        userId,
        aggregationId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'aggregations',
      aggregationId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  deleteUserAggregation: ({
      _,
        userId,
        aggregationId,
        authorization,
  }, options) => {
    const method = 'delete';
    let urlParts = [
      'users',
      userId,
      'aggregations',
      aggregationId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDisplays: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'displays',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUserDisplay: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      userId,
      'displays',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDisplay: ({
      _,
        userId,
        displayId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'displays',
      displayId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserDisplay: ({
      _,
        userId,
        displayId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'displays',
      displayId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  deleteUserDisplay: ({
      _,
        userId,
        displayId,
        authorization,
  }, options) => {
    const method = 'delete';
    let urlParts = [
      'users',
      userId,
      'displays',
      displayId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDevices: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDevice: ({
      _,
        userId,
        deviceId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserDevice: ({
      _,
        userId,
        deviceId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDeviceStatistics: ({
      _,
        userId,
        deviceId,
        authorization,
        startDate,
        endDate,
        measures,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
      'statistics',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
      startDate: startDate,
      endDate: endDate,
      measures: measures,
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDeviceDegreeDays: ({
      _,
        userId,
        deviceId,
        authorization,
        startDate,
        endDate,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
      'degreeDays',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
      startDate: startDate,
      endDate: endDate,
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDeviceStatus: ({
      _,
        userId,
        deviceId,
        authorization,
        date,
        measures,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
      'statuses',
      date,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
      measures: measures,
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserDeviceForecasts: ({
      _,
        userId,
        deviceId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'devices',
      deviceId,
      'forecasts',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserPreferences: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'preferences',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserPreferences: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'preferences',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getOrganisationOperations: ({
      _,
        organisationId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'organisations',
      organisationId,
      'operations',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  getUserAlerts: ({
      _,
        userId,
        authorization,
  }, options) => {
    const method = 'get';
    let urlParts = [
      'users',
      userId,
      'alerts',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postUserAlert: ({
      _,
        userId,
        authorization,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'users',
      userId,
      'alerts',
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  putUserAlert: ({
      _,
        userId,
        alertId,
        authorization,
        body,
  }, options) => {
    const method = 'put';
    let urlParts = [
      'users',
      userId,
      'alerts',
      alertId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  deleteUserAlert: ({
      _,
        userId,
        alertId,
        authorization,
  }, options) => {
    const method = 'delete';
    let urlParts = [
      'users',
      userId,
      'alerts',
      alertId,
    ];
    let headers = {
      Authorization: authorization,
    };
    let qs = cleanQuery({
    });
    let data = {}.undef;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
  postOrganisation: ({
      _,
        body,
  }, options) => {
    const method = 'post';
    let urlParts = [
      'organisations',
    ];
    let headers = {
    };
    let qs = cleanQuery({
    });
    let data = body;

    return axios(Object.assign({
      baseURL: 'http://localhost:1337/v1/',
      paramsSerializer: querystring.stringify.bind(querystring),
      validateStatus: status => 200 <= status && 300 > status,
      method: method,
      url: urlParts.join('/'),
      headers,
      params: qs,
      data,
    }, options || {}));
  },
};

module.exports = API;
