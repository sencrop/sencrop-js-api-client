<!--
# This file is automatically generated by a
# `metapak` module. Do NOT change it in
# place, your changes would be overriden.
-->


# sencrop-js-api-client
> The Sencrop JavaScript API client



[//]: # (::contents:start)

The Sencrop API provides a Swagger file
 as a documentation.

This project aims to provide a JavaScript API
 on its basis, automatically generated.

# Usage

```sh
import API from 'sencrop-js-api-client';

API.getUserDeviceStatistics({
  authorization: 'Bearer yolo-token',
  startDate: '2014-07-01T00:00:00.000Z',
  endDate: '2017-07-21T00:00:00.000Z',
}, {
  // Here goes any Axios request configuration override
  // See: https://github.com/mzabriskie/axios#request-config
  timeout: 40000,
})
.then(response => {
  console.log({
    response,
  });
});

```
# Development
To rebuild the API, erase the swagger file
 with a newer one and build the SDK again:
```js
npm run import
npm run build
npm run compile
```

[//]: # (::contents:end)

# Useful resources
- [API documentation](./API.md)
- [Architecture Notes](./ARCHITECTURE.md)
- [Changelog](./CHANGELOG.md)

# License
[MIT](https://github.com/sencrop/sencrop-js-api-client/blob/master/LICENSE.md)
