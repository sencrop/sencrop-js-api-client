# API
<a name="module_API"></a>

## API
API to consume Sencrop data

**Version**: 1.0.0  

* [API](#module_API)
    * [~getPing(parameters, options)](#module_API..getPing) ⇒ <code>Object</code>
    * [~getCrops(parameters, options)](#module_API..getCrops) ⇒ <code>Object</code>
    * [~getModules(parameters, options)](#module_API..getModules) ⇒ <code>Object</code>
    * [~postSignupCheck(parameters, options)](#module_API..postSignupCheck) ⇒ <code>Object</code>
    * [~postLostPassword(parameters, options)](#module_API..postLostPassword) ⇒ <code>Object</code>
    * [~putPassword(parameters, options)](#module_API..putPassword) ⇒ <code>Object</code>
    * [~postLogin(parameters, options)](#module_API..postLogin) ⇒ <code>Object</code>
    * [~postVerify(parameters, options)](#module_API..postVerify) ⇒ <code>Object</code>
    * [~postPartnerTokenRequest(parameters, options)](#module_API..postPartnerTokenRequest) ⇒ <code>Object</code>
    * [~postPartnerToken(parameters, options)](#module_API..postPartnerToken) ⇒ <code>Object</code>
    * [~getPartnerDevices(parameters, options)](#module_API..getPartnerDevices) ⇒ <code>Object</code>
    * [~putPartnerModuleParameters(parameters, options)](#module_API..putPartnerModuleParameters) ⇒ <code>Object</code>
    * [~postUser(parameters, options)](#module_API..postUser) ⇒ <code>Object</code>
    * [~postUserSimplified(parameters, options)](#module_API..postUserSimplified) ⇒ <code>Object</code>
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
    * [~getUserAggregation(parameters, options)](#module_API..getUserAggregation) ⇒ <code>Object</code>
    * [~putUserAggregation(parameters, options)](#module_API..putUserAggregation) ⇒ <code>Object</code>
    * [~deleteUserAggregation(parameters, options)](#module_API..deleteUserAggregation) ⇒ <code>Object</code>
    * [~getUserDevices(parameters, options)](#module_API..getUserDevices) ⇒ <code>Object</code>
    * [~postUserDevice(parameters, options)](#module_API..postUserDevice) ⇒ <code>Object</code>
    * [~getUserDevicePositions(parameters, options)](#module_API..getUserDevicePositions) ⇒ <code>Object</code>
    * [~getUserDevice(parameters, options)](#module_API..getUserDevice) ⇒ <code>Object</code>
    * [~putUserDevice(parameters, options)](#module_API..putUserDevice) ⇒ <code>Object</code>
    * [~deleteUserDevice(parameters, options)](#module_API..deleteUserDevice) ⇒ <code>Object</code>
    * [~getUserDeviceModules(parameters, options)](#module_API..getUserDeviceModules) ⇒ <code>Object</code>
    * [~putUserDeviceModule(parameters, options)](#module_API..putUserDeviceModule) ⇒ <code>Object</code>
    * [~deleteUserDeviceModule(parameters, options)](#module_API..deleteUserDeviceModule) ⇒ <code>Object</code>
    * [~putUserDeviceShares(parameters, options)](#module_API..putUserDeviceShares) ⇒ <code>Object</code>
    * [~getUserDeviceStatistics(parameters, options)](#module_API..getUserDeviceStatistics) ⇒ <code>Object</code>
    * [~getUserDeviceRawData(parameters, options)](#module_API..getUserDeviceRawData) ⇒ <code>Object</code>
    * [~getUserDeviceHourlyData(parameters, options)](#module_API..getUserDeviceHourlyData) ⇒ <code>Object</code>
    * [~getUserDeviceDailyData(parameters, options)](#module_API..getUserDeviceDailyData) ⇒ <code>Object</code>
    * [~getUserDeviceContinuousStatistics(parameters, options)](#module_API..getUserDeviceContinuousStatistics) ⇒ <code>Object</code>
    * [~getUserDeviceSummary(parameters, options)](#module_API..getUserDeviceSummary) ⇒ <code>Object</code>
    * [~getUserDeviceForecasts(parameters, options)](#module_API..getUserDeviceForecasts) ⇒ <code>Object</code>
    * [~getUserForecasts(parameters, options)](#module_API..getUserForecasts) ⇒ <code>Object</code>
    * [~getUserDailyData(parameters, options)](#module_API..getUserDailyData) ⇒ <code>Object</code>
    * [~getUserHourlyData(parameters, options)](#module_API..getUserHourlyData) ⇒ <code>Object</code>
    * [~getUserPreferences(parameters, options)](#module_API..getUserPreferences) ⇒ <code>Object</code>
    * [~putUserPreferences(parameters, options)](#module_API..putUserPreferences) ⇒ <code>Object</code>
    * [~getOrganisationOperations(parameters, options)](#module_API..getOrganisationOperations) ⇒ <code>Object</code>
    * [~postOrganisationOperation(parameters, options)](#module_API..postOrganisationOperation) ⇒ <code>Object</code>
    * [~getOrganisationOperation(parameters, options)](#module_API..getOrganisationOperation) ⇒ <code>Object</code>
    * [~putOrganisationOperation(parameters, options)](#module_API..putOrganisationOperation) ⇒ <code>Object</code>
    * [~deleteOrganisationOperation(parameters, options)](#module_API..deleteOrganisationOperation) ⇒ <code>Object</code>
    * [~getUserAlerts(parameters, options)](#module_API..getUserAlerts) ⇒ <code>Object</code>
    * [~postUserAlert(parameters, options)](#module_API..postUserAlert) ⇒ <code>Object</code>
    * [~putUserAlert(parameters, options)](#module_API..putUserAlert) ⇒ <code>Object</code>
    * [~deleteUserAlert(parameters, options)](#module_API..deleteUserAlert) ⇒ <code>Object</code>
    * [~postOrganisationDeprecated(parameters, options)](#module_API..postOrganisationDeprecated) ⇒ <code>Object</code>
    * [~postOrganisation(parameters, options)](#module_API..postOrganisation) ⇒ <code>Object</code>
    * [~getOrganisation(parameters, options)](#module_API..getOrganisation) ⇒ <code>Object</code>
    * [~putOrganisation(parameters, options)](#module_API..putOrganisation) ⇒ <code>Object</code>
    * [~postOrganisationMembersMigration(parameters, options)](#module_API..postOrganisationMembersMigration) ⇒ <code>Object</code>
    * [~postOrganisationUser(parameters, options)](#module_API..postOrganisationUser) ⇒ <code>Object</code>
    * [~putOrganisationUser(parameters, options)](#module_API..putOrganisationUser) ⇒ <code>Object</code>
    * [~deleteOrganisationUser(parameters, options)](#module_API..deleteOrganisationUser) ⇒ <code>Object</code>
    * [~postOrganisationPlace(parameters, options)](#module_API..postOrganisationPlace) ⇒ <code>Object</code>
    * [~putOrganisationPlace(parameters, options)](#module_API..putOrganisationPlace) ⇒ <code>Object</code>
    * [~getWeatherLive(parameters, options)](#module_API..getWeatherLive) ⇒ <code>Object</code>

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

<a name="module_API..getModules"></a>

### API~getModules(parameters, options) ⇒ <code>Object</code>
Get the modules

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postSignupCheck"></a>

### API~postSignupCheck(parameters, options) ⇒ <code>Object</code>
Hit the server to check the email can be used to signup.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| parameters.body | <code>object</code> | The email to check |
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

<a name="module_API..postPartnerTokenRequest"></a>

### API~postPartnerTokenRequest(parameters, options) ⇒ <code>Object</code>
Request a user token

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| parameters.body | <code>object</code> | Request a user token, |
| parameters.authorization | <code>string</code> | Authorization with Basic mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postPartnerToken"></a>

### API~postPartnerToken(parameters, options) ⇒ <code>Object</code>
Create a user token

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| parameters.body | <code>object</code> | Create a user token, |
| parameters.authorization | <code>string</code> | Authorization with Basic mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getPartnerDevices"></a>

### API~getPartnerDevices(parameters, options) ⇒ <code>Object</code>
Retrieves the devices a partner has access to.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putPartnerModuleParameters"></a>

### API~putPartnerModuleParameters(parameters, options) ⇒ <code>Object</code>
Update an partner module parameters

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| parameters.partnerUserId | <code>number</code> | The partner user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| parameters.body | <code>object</code> | The module parameters, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUser"></a>

### API~postUser(parameters, options) ⇒ <code>Object</code>
Create a new user.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The new user |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserSimplified"></a>

### API~postUserSimplified(parameters, options) ⇒ <code>Object</code>
Create a new user with simplified information (for meeting/showroom/...), add a demo device and connect it. Need a special code.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The new user (simplified) and the special code |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.body | <code>object</code> | The new user, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.organisationIdTarget] | <code>number</code> | The organisation id to add the collaborator to, |
| parameters.body | <code>object</code> | The user's guest, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.guestId | <code>number</code> | The guest id, |
| parameters.body | <code>object</code> | The user's guest, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.organisationIdTarget] | <code>number</code> | The organisation id to remove the collaborator to, |
| parameters.guestId | <code>number</code> | The guest id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.organisationIdTarget] | <code>number</code> | The organisation id to add the collaborator to, |
| parameters.body | <code>object</code> | The user's collaborator, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.body | <code>object</code> | The user's collaborator, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.organisationIdTarget] | <code>number</code> | The organisation id to remove the collaborator to, |
| parameters.collaboratorId | <code>number</code> | The collaborator id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.compute] | <code>boolean</code> | Wether the aggregations should be computed, |
| [parameters.patched] | <code>boolean</code> | Wether you want to get only original data or eventually patched ones to avoid holes., |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.body | <code>object</code> | The user's aggregation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserAggregation"></a>

### API~getUserAggregation(parameters, options) ⇒ <code>Object</code>
Get a single user aggregation with statistics for graphs

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.aggregationId | <code>number</code> | The aggregation id, |
| [parameters.patched] | <code>boolean</code> | Wether you want to get only original data or eventually patched ones to avoid holes., |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.aggregationId | <code>number</code> | The aggregation id, |
| parameters.body | <code>object</code> | The user's aggregation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| [parameters.date] | <code>string</code> | The status date, |
| [parameters.measures] | <code>array</code> | The measures to read, |
| [parameters.patched] | <code>boolean</code> | Wether you want to get only original data or eventually patched ones to avoid holes., |
| [parameters.limit] | <code>number</code> | The number of items to retrieve, |
| [parameters.start] | <code>number</code> | The index in results, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserDevice"></a>

### API~postUserDevice(parameters, options) ⇒ <code>Object</code>
Setup a user's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.body | <code>object</code> | The user device activation couple, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDevicePositions"></a>

### API~getUserDevicePositions(parameters, options) ⇒ <code>Object</code>
Get a user's device geographic positions historic.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.body | <code>object</code> | The user device, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserDevice"></a>

### API~deleteUserDevice(parameters, options) ⇒ <code>Object</code>
Delete a user's device access.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceModules"></a>

### API~getUserDeviceModules(parameters, options) ⇒ <code>Object</code>
Get the modules a user activated on its device

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserDeviceModule"></a>

### API~putUserDeviceModule(parameters, options) ⇒ <code>Object</code>
Add a module to a user's device

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| parameters.body | <code>object</code> | The module settings, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserDeviceModule"></a>

### API~deleteUserDeviceModule(parameters, options) ⇒ <code>Object</code>
Disable a module for a user's device

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserDeviceShares"></a>

### API~putUserDeviceShares(parameters, options) ⇒ <code>Object</code>
Update a user's device shares.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.sharesType | <code>string</code> | The shares type, |
| parameters.body | <code>array</code> | The users concerned by the user's device share, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.startDate | <code>string</code> | The statistics start date, |
| parameters.endDate | <code>string</code> | The statistics end date, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.patched] | <code>boolean</code> | Wether you want to get only original data or eventually patched ones to avoid holes., |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceRawData"></a>

### API~getUserDeviceRawData(parameters, options) ⇒ <code>Object</code>
Get a user's device's raw data.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.beforeDate | <code>string</code> | The date before which the data starts being retrieved, |
| parameters.size | <code>number</code> | The number of measures to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceHourlyData"></a>

### API~getUserDeviceHourlyData(parameters, options) ⇒ <code>Object</code>
Get a user's device's hourly data.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.beforeDate | <code>string</code> | The date before which the data starts being retrieved, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceDailyData"></a>

### API~getUserDeviceDailyData(parameters, options) ⇒ <code>Object</code>
Get a user's device's daily data.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.beforeDate | <code>string</code> | The date before which the data starts being retrieved, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceContinuousStatistics"></a>

### API~getUserDeviceContinuousStatistics(parameters, options) ⇒ <code>Object</code>
Get a user's device's continuous device's statistics.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.startDate | <code>string</code> | The statistics start date, |
| parameters.endDate | <code>string</code> | The statistics end date, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.patched] | <code>boolean</code> | Wether you want to get only original data or eventually patched ones to avoid holes., |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDeviceSummary"></a>

### API~getUserDeviceSummary(parameters, options) ⇒ <code>Object</code>
Get a user's device's summary at a given date.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.date | <code>string</code> | The summary date, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.date | <code>string</code> | Date of the forecasts, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserForecasts"></a>

### API~getUserForecasts(parameters, options) ⇒ <code>Object</code>
Get a user's forecasts.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data, |
| [parameters.date] | <code>string</code> | Date of the forecasts, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDailyData"></a>

### API~getUserDailyData(parameters, options) ⇒ <code>Object</code>
Get a user's daily data for a given geo location.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data, |
| parameters.beforeDate | <code>string</code> | The date before which the data starts being retrieved, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserHourlyData"></a>

### API~getUserHourlyData(parameters, options) ⇒ <code>Object</code>
Get a user's hourly data for a given geo location.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data, |
| parameters.beforeDate | <code>string</code> | The date before which the data starts being retrieved, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.body | <code>object</code> | The new user preferences, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationOperation"></a>

### API~postOrganisationOperation(parameters, options) ⇒ <code>Object</code>
Create an organisation's operation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.body | <code>object</code> | The operation to add, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationOperation"></a>

### API~getOrganisationOperation(parameters, options) ⇒ <code>Object</code>
Retrieve an organisation's operation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.operationId | <code>number</code> | The operation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationOperation"></a>

### API~putOrganisationOperation(parameters, options) ⇒ <code>Object</code>
Update an organisation's operation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.operationId | <code>number</code> | The operation id, |
| parameters.body | <code>object</code> | The operation to update, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteOrganisationOperation"></a>

### API~deleteOrganisationOperation(parameters, options) ⇒ <code>Object</code>
Delete an organisation's operation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.operationId | <code>number</code> | The operation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.body | <code>object</code> | The user's alert, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.alertId | <code>number</code> | The alert id, |
| parameters.body | <code>object</code> | The user's alert, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
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
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationDeprecated"></a>

### API~postOrganisationDeprecated(parameters, options) ⇒ <code>Object</code>
Creates a new organisation. Highly Deprecated, will be moved soon.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.body | <code>object</code> | The necessary contents to create a new organisation |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisation"></a>

### API~postOrganisation(parameters, options) ⇒ <code>Object</code>
Creates a new organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.body | <code>object</code> | The necessary contents to create a new organisation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisation"></a>

### API~getOrganisation(parameters, options) ⇒ <code>Object</code>
Get the organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisation"></a>

### API~putOrganisation(parameters, options) ⇒ <code>Object</code>
Update an organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.body | <code>object</code> | The modified organisation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationMembersMigration"></a>

### API~postOrganisationMembersMigration(parameters, options) ⇒ <code>Object</code>
Endpoint for migration. Don't use it or use with caution !

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.body | <code>object</code> | The necessary contents to migrate users, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationUser"></a>

### API~postOrganisationUser(parameters, options) ⇒ <code>Object</code>
Add an user to an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.targetUserId | <code>number</code> | The user id to add, |
| parameters.body | <code>object</code> | The type of relation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationUser"></a>

### API~putOrganisationUser(parameters, options) ⇒ <code>Object</code>
Edit or add an user to an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.targetUserId | <code>number</code> | The user id to add, |
| parameters.body | <code>object</code> | The type of relation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteOrganisationUser"></a>

### API~deleteOrganisationUser(parameters, options) ⇒ <code>Object</code>
Delete an user from an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.targetUserId | <code>number</code> | The user id to remove, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationPlace"></a>

### API~postOrganisationPlace(parameters, options) ⇒ <code>Object</code>
Create a new place for an organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.body | <code>object</code> | The necessary contents to create a new place for an organisation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationPlace"></a>

### API~putOrganisationPlace(parameters, options) ⇒ <code>Object</code>
Update a place for an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.placeId | <code>number</code> | The place id, |
| parameters.body | <code>object</code> | The necessary contents to update a place for an organisation, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getWeatherLive"></a>

### API~getWeatherLive(parameters, options) ⇒ <code>Object</code>
Get last measure (for a specific type) from devices in a given area (1hour for RAIN_TIC).

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.geohash | <code>string</code> | The geohash of the data, |
| parameters.measureType | <code>string</code> | The measures to read, |
| parameters.authorization | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Access token in the query string |
| options | <code>Object</code> | Options to override Axios request configuration |
