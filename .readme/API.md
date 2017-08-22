# API
<a name="module_API"></a>

## API
API to consume Sencrop data

**Version**: 1.0.0  

* [API](#module_API)
    * [~getPing(parameters, options)](#module_API..getPing) ⇒ <code>Object</code>
    * [~getCrops(parameters, options)](#module_API..getCrops) ⇒ <code>Object</code>
    * [~postLostPassword(parameters, options)](#module_API..postLostPassword) ⇒ <code>Object</code>
    * [~putPassword(parameters, options)](#module_API..putPassword) ⇒ <code>Object</code>
    * [~postLogin(parameters, options)](#module_API..postLogin) ⇒ <code>Object</code>
    * [~postVerify(parameters, options)](#module_API..postVerify) ⇒ <code>Object</code>
    * [~postUser(parameters, options)](#module_API..postUser) ⇒ <code>Object</code>
    * [~getUser(parameters, options)](#module_API..getUser) ⇒ <code>Object</code>
    * [~putUser(parameters, options)](#module_API..putUser) ⇒ <code>Object</code>
    * [~getUserGuests(parameters, options)](#module_API..getUserGuests) ⇒ <code>Object</code>
    * [~postUserGuest(parameters, options)](#module_API..postUserGuest) ⇒ <code>Object</code>
    * [~putUserGuest(parameters, options)](#module_API..putUserGuest) ⇒ <code>Object</code>
    * [~deleteUserGuest(parameters, options)](#module_API..deleteUserGuest) ⇒ <code>Object</code>
    * [~getUserCollaborators(parameters, options)](#module_API..getUserCollaborators) ⇒ <code>Object</code>
    * [~postUserCollaborator(parameters, options)](#module_API..postUserCollaborator) ⇒ <code>Object</code>
    * [~putUserCollaborator(parameters, options)](#module_API..putUserCollaborator) ⇒ <code>Object</code>
    * [~deleteUserCollaborator(parameters, options)](#module_API..deleteUserCollaborator) ⇒ <code>Object</code>
    * [~getUserAggregations(parameters, options)](#module_API..getUserAggregations) ⇒ <code>Object</code>
    * [~postUserAggregation(parameters, options)](#module_API..postUserAggregation) ⇒ <code>Object</code>
    * [~putUserAggregation(parameters, options)](#module_API..putUserAggregation) ⇒ <code>Object</code>
    * [~deleteUserAggregation(parameters, options)](#module_API..deleteUserAggregation) ⇒ <code>Object</code>
    * [~getUserDisplays(parameters, options)](#module_API..getUserDisplays) ⇒ <code>Object</code>
    * [~postUserDisplay(parameters, options)](#module_API..postUserDisplay) ⇒ <code>Object</code>
    * [~getUserDisplay(parameters, options)](#module_API..getUserDisplay) ⇒ <code>Object</code>
    * [~putUserDisplay(parameters, options)](#module_API..putUserDisplay) ⇒ <code>Object</code>
    * [~deleteUserDisplay(parameters, options)](#module_API..deleteUserDisplay) ⇒ <code>Object</code>
    * [~getUserDevices(parameters, options)](#module_API..getUserDevices) ⇒ <code>Object</code>
    * [~getUserDevice(parameters, options)](#module_API..getUserDevice) ⇒ <code>Object</code>
    * [~putUserDevice(parameters, options)](#module_API..putUserDevice) ⇒ <code>Object</code>
    * [~getUserDeviceStatistics(parameters, options)](#module_API..getUserDeviceStatistics) ⇒ <code>Object</code>
    * [~getUserDeviceDegreeDays(parameters, options)](#module_API..getUserDeviceDegreeDays) ⇒ <code>Object</code>
    * [~getUserDeviceStatus(parameters, options)](#module_API..getUserDeviceStatus) ⇒ <code>Object</code>
    * [~getUserDeviceForecasts(parameters, options)](#module_API..getUserDeviceForecasts) ⇒ <code>Object</code>
    * [~getUserPreferences(parameters, options)](#module_API..getUserPreferences) ⇒ <code>Object</code>
    * [~putUserPreferences(parameters, options)](#module_API..putUserPreferences) ⇒ <code>Object</code>
    * [~getOrganisationOperations(parameters, options)](#module_API..getOrganisationOperations) ⇒ <code>Object</code>
    * [~getUserAlerts(parameters, options)](#module_API..getUserAlerts) ⇒ <code>Object</code>
    * [~postUserAlert(parameters, options)](#module_API..postUserAlert) ⇒ <code>Object</code>
    * [~putUserAlert(parameters, options)](#module_API..putUserAlert) ⇒ <code>Object</code>
    * [~deleteUserAlert(parameters, options)](#module_API..deleteUserAlert) ⇒ <code>Object</code>
    * [~postOrganisation(parameters, options)](#module_API..postOrganisation) ⇒ <code>Object</code>

<a name="module_API..getPing"></a>

### API~getPing(parameters, options) ⇒ <code>Object</code>
Checks API's availability.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getCrops"></a>

### API~getCrops(parameters, options) ⇒ <code>Object</code>
Get the crops

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postLostPassword"></a>

### API~postLostPassword(parameters, options) ⇒ <code>Object</code>
Request a password change e-mail.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The infos to send the mail |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putPassword"></a>

### API~putPassword(parameters, options) ⇒ <code>Object</code>
Change a user password

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The infos to change the password |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postLogin"></a>

### API~postLogin(parameters, options) ⇒ <code>Object</code>
Log a user in

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The infos to log in |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postVerify"></a>

### API~postVerify(parameters, options) ⇒ <code>Object</code>
Verify a user

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | Verify the user |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUser"></a>

### API~postUser(parameters, options) ⇒ <code>Object</code>
Create a user.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The new user to create |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUser"></a>

### API~getUser(parameters, options) ⇒ <code>Object</code>
Get a user's profile.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUser"></a>

### API~putUser(parameters, options) ⇒ <code>Object</code>
Update a user's profile.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The new user |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserGuests"></a>

### API~getUserGuests(parameters, options) ⇒ <code>Object</code>
Get a user's guests.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserGuest"></a>

### API~postUserGuest(parameters, options) ⇒ <code>Object</code>
Create a user's guest.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's guest |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserGuest"></a>

### API~putUserGuest(parameters, options) ⇒ <code>Object</code>
Update a user's guest.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.guestId | <code>string</code> | The guest id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's guest |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserGuest"></a>

### API~deleteUserGuest(parameters, options) ⇒ <code>Object</code>
Delete a user's guest.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.guestId | <code>number</code> | The guest id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserCollaborators"></a>

### API~getUserCollaborators(parameters, options) ⇒ <code>Object</code>
Get a user's collaborators.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserCollaborator"></a>

### API~postUserCollaborator(parameters, options) ⇒ <code>Object</code>
Create a user's collaborator.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's collaborator |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserCollaborator"></a>

### API~putUserCollaborator(parameters, options) ⇒ <code>Object</code>
Update a user's collaborator.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.collaboratorId | <code>string</code> | The collaborator id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's collaborator |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserCollaborator"></a>

### API~deleteUserCollaborator(parameters, options) ⇒ <code>Object</code>
Delete a user's collaborator.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.collaboratorId | <code>number</code> | The collaborator id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserAggregations"></a>

### API~getUserAggregations(parameters, options) ⇒ <code>Object</code>
Get a user's aggregations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.compute | <code>boolean</code> | Wether the aggregations should be computed, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserAggregation"></a>

### API~postUserAggregation(parameters, options) ⇒ <code>Object</code>
Create a user's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's aggregation |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserAggregation"></a>

### API~putUserAggregation(parameters, options) ⇒ <code>Object</code>
Update a user's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.aggregationId | <code>string</code> | The aggregation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's aggregation |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserAggregation"></a>

### API~deleteUserAggregation(parameters, options) ⇒ <code>Object</code>
Delete a user's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.aggregationId | <code>number</code> | The aggregation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDisplays"></a>

### API~getUserDisplays(parameters, options) ⇒ <code>Object</code>
Get a user's displays.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserDisplay"></a>

### API~postUserDisplay(parameters, options) ⇒ <code>Object</code>
Create a user's display.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's display |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDisplay"></a>

### API~getUserDisplay(parameters, options) ⇒ <code>Object</code>
Get a user's display.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.displayId | <code>number</code> | The display id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserDisplay"></a>

### API~putUserDisplay(parameters, options) ⇒ <code>Object</code>
Update a user's display.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.displayId | <code>string</code> | The display id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's display |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserDisplay"></a>

### API~deleteUserDisplay(parameters, options) ⇒ <code>Object</code>
Delete a user's display.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.displayId | <code>number</code> | The display id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDevices"></a>

### API~getUserDevices(parameters, options) ⇒ <code>Object</code>
Get a user's devices.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDevice"></a>

### API~getUserDevice(parameters, options) ⇒ <code>Object</code>
Get a user's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserDevice"></a>

### API~putUserDevice(parameters, options) ⇒ <code>Object</code>
Update a user's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user device |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceStatistics"></a>

### API~getUserDeviceStatistics(parameters, options) ⇒ <code>Object</code>
Get a user's device's device's statistics.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.startDate | <code>string</code> | The statistics start date, |
| parameters.endDate | <code>string</code> | The statistics end date, |
| parameters.measures | <code>array</code> | The measures to read |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceDegreeDays"></a>

### API~getUserDeviceDegreeDays(parameters, options) ⇒ <code>Object</code>
Get a user's device's degree days.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.startDate | <code>string</code> | The statistics start date, |
| parameters.endDate | <code>string</code> | The statistics end date |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceStatus"></a>

### API~getUserDeviceStatus(parameters, options) ⇒ <code>Object</code>
Get a user's device's status at a given date.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.date | <code>string</code> | The status date, |
| parameters.measures | <code>array</code> | The measures to read |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceForecasts"></a>

### API~getUserDeviceForecasts(parameters, options) ⇒ <code>Object</code>
Get a user's device's forecasts.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>string</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserPreferences"></a>

### API~getUserPreferences(parameters, options) ⇒ <code>Object</code>
Get a user's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserPreferences"></a>

### API~putUserPreferences(parameters, options) ⇒ <code>Object</code>
Update a user's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The new user preferences |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationOperations"></a>

### API~getOrganisationOperations(parameters, options) ⇒ <code>Object</code>
Get a organisation's operations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserAlerts"></a>

### API~getUserAlerts(parameters, options) ⇒ <code>Object</code>
Get a user's alerts.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserAlert"></a>

### API~postUserAlert(parameters, options) ⇒ <code>Object</code>
Create a user's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's alert |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserAlert"></a>

### API~putUserAlert(parameters, options) ⇒ <code>Object</code>
Update a user's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.alertId | <code>string</code> | The alert id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The user's alert |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserAlert"></a>

### API~deleteUserAlert(parameters, options) ⇒ <code>Object</code>
Delete a user's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.alertId | <code>number</code> | The alert id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisation"></a>

### API~postOrganisation(parameters, options) ⇒ <code>Object</code>
Creates a new organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The necessary contents to create a new organisation |
| options | <code>Object</code> | Options to override Axios request configuration |
