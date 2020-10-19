# API
<a name="module_API"></a>

## API
API to consume Sencrop data

**Version**: 1.53.1  

* [API](#module_API)
    * [~deleteOrganisationDevice(parameters, options)](#module_API..deleteOrganisationDevice) ⇒ <code>Object</code>
    * [~getOrganisationDevice(parameters, options)](#module_API..getOrganisationDevice) ⇒ <code>Object</code>
    * [~putOrganisationDevice(parameters, body, options)](#module_API..putOrganisationDevice) ⇒ <code>Object</code>
    * [~deleteOrganisationNetworkDeviceAccess(parameters, options)](#module_API..deleteOrganisationNetworkDeviceAccess) ⇒ <code>Object</code>
    * [~putOrganisationNetworkDeviceAccess(parameters, options)](#module_API..putOrganisationNetworkDeviceAccess) ⇒ <code>Object</code>
    * [~deleteUserNotificationRead(parameters, options)](#module_API..deleteUserNotificationRead) ⇒ <code>Object</code>
    * [~putUserNotificationRead(parameters, options)](#module_API..putUserNotificationRead) ⇒ <code>Object</code>
    * [~deleteUserOrganisationAggregation(parameters, options)](#module_API..deleteUserOrganisationAggregation) ⇒ <code>Object</code>
    * [~putUserOrganisationAggregation(parameters, body, options)](#module_API..putUserOrganisationAggregation) ⇒ <code>Object</code>
    * [~deleteUserOrganisationAlert(parameters, options)](#module_API..deleteUserOrganisationAlert) ⇒ <code>Object</code>
    * [~putUserOrganisationAlert(parameters, body, options)](#module_API..putUserOrganisationAlert) ⇒ <code>Object</code>
    * [~deleteUserOrganisationDeviceModule(parameters, options)](#module_API..deleteUserOrganisationDeviceModule) ⇒ <code>Object</code>
    * [~putUserOrganisationDeviceModule(parameters, body, options)](#module_API..putUserOrganisationDeviceModule) ⇒ <code>Object</code>
    * [~deleteUserOrganisationInvitation(parameters, options)](#module_API..deleteUserOrganisationInvitation) ⇒ <code>Object</code>
    * [~putUserOrganisationInvitation(parameters, body, options)](#module_API..putUserOrganisationInvitation) ⇒ <code>Object</code>
    * [~deleteUserOrganisationMember(parameters, options)](#module_API..deleteUserOrganisationMember) ⇒ <code>Object</code>
    * [~putUserOrganisationMember(parameters, body, options)](#module_API..putUserOrganisationMember) ⇒ <code>Object</code>
    * [~putUserOrganisationOpenNetworkMembership(parameters, options)](#module_API..putUserOrganisationOpenNetworkMembership) ⇒ <code>Object</code>
    * [~deleteUserOrganisationShare(parameters, options)](#module_API..deleteUserOrganisationShare) ⇒ <code>Object</code>
    * [~putUserOrganisationShare(parameters, body, options)](#module_API..putUserOrganisationShare) ⇒ <code>Object</code>
    * [~getOpenAPI(parameters, options)](#module_API..getOpenAPI) ⇒ <code>Object</code>
    * [~getCrops(parameters, options)](#module_API..getCrops) ⇒ <code>Object</code>
    * [~getFactorySigfoxStatus(parameters, options)](#module_API..getFactorySigfoxStatus) ⇒ <code>Object</code>
    * [~getInvitation(parameters, options)](#module_API..getInvitation) ⇒ <code>Object</code>
    * [~getInvitationDeviceLiveAggregations(parameters, options)](#module_API..getInvitationDeviceLiveAggregations) ⇒ <code>Object</code>
    * [~getModules(parameters, options)](#module_API..getModules) ⇒ <code>Object</code>
    * [~getMySelf(parameters, options)](#module_API..getMySelf) ⇒ <code>Object</code>
    * [~getNetwork(parameters, options)](#module_API..getNetwork) ⇒ <code>Object</code>
    * [~getNetworkDeviceLiveAggregations(parameters, options)](#module_API..getNetworkDeviceLiveAggregations) ⇒ <code>Object</code>
    * [~getNetworkDevices(parameters, options)](#module_API..getNetworkDevices) ⇒ <code>Object</code>
    * [~getOAuth2Authorize(parameters, options)](#module_API..getOAuth2Authorize) ⇒ <code>Object</code>
    * [~getOrganisation(parameters, options)](#module_API..getOrganisation) ⇒ <code>Object</code>
    * [~putOrganisation(parameters, body, options)](#module_API..putOrganisation) ⇒ <code>Object</code>
    * [~getOrganisationChargebeePortalSession(parameters, options)](#module_API..getOrganisationChargebeePortalSession) ⇒ <code>Object</code>
    * [~getOrganisationDevices(parameters, options)](#module_API..getOrganisationDevices) ⇒ <code>Object</code>
    * [~getOrganisationDevicesLiveAggregations(parameters, options)](#module_API..getOrganisationDevicesLiveAggregations) ⇒ <code>Object</code>
    * [~getOrganisationHostedPage(parameters, options)](#module_API..getOrganisationHostedPage) ⇒ <code>Object</code>
    * [~getOrganisationInvitation(parameters, options)](#module_API..getOrganisationInvitation) ⇒ <code>Object</code>
    * [~getOrganisationInvitations(parameters, options)](#module_API..getOrganisationInvitations) ⇒ <code>Object</code>
    * [~getOrganisationMember(parameters, options)](#module_API..getOrganisationMember) ⇒ <code>Object</code>
    * [~getOrganisationMembers(parameters, options)](#module_API..getOrganisationMembers) ⇒ <code>Object</code>
    * [~getOrganisationNetworkDevices(parameters, options)](#module_API..getOrganisationNetworkDevices) ⇒ <code>Object</code>
    * [~getOrganisationNetworks(parameters, options)](#module_API..getOrganisationNetworks) ⇒ <code>Object</code>
    * [~getOrganisationPlace(parameters, options)](#module_API..getOrganisationPlace) ⇒ <code>Object</code>
    * [~getOrganisationPlaces(parameters, options)](#module_API..getOrganisationPlaces) ⇒ <code>Object</code>
    * [~postOrganisationPlace(parameters, body, options)](#module_API..postOrganisationPlace) ⇒ <code>Object</code>
    * [~getOrganisationPreferences(parameters, options)](#module_API..getOrganisationPreferences) ⇒ <code>Object</code>
    * [~putOrganisationPreferences(parameters, body, options)](#module_API..putOrganisationPreferences) ⇒ <code>Object</code>
    * [~getOrganisationShare(parameters, options)](#module_API..getOrganisationShare) ⇒ <code>Object</code>
    * [~getOrganisationShares(parameters, options)](#module_API..getOrganisationShares) ⇒ <code>Object</code>
    * [~getOrganisationsTrialOperations(parameters, options)](#module_API..getOrganisationsTrialOperations) ⇒ <code>Object</code>
    * [~getPartnerDevices(parameters, options)](#module_API..getPartnerDevices) ⇒ <code>Object</code>
    * [~getPing(parameters, options)](#module_API..getPing) ⇒ <code>Object</code>
    * [~getPublicWeatherLive(parameters, options)](#module_API..getPublicWeatherLive) ⇒ <code>Object</code>
    * [~getPublicWeatherLiveAggregations(parameters, options)](#module_API..getPublicWeatherLiveAggregations) ⇒ <code>Object</code>
    * [~getQuote(parameters, options)](#module_API..getQuote) ⇒ <code>Object</code>
    * [~getQuoteHostedPage(parameters, options)](#module_API..getQuoteHostedPage) ⇒ <code>Object</code>
    * [~getSearchDevices(parameters, options)](#module_API..getSearchDevices) ⇒ <code>Object</code>
    * [~getSearchNetworkDevices(parameters, options)](#module_API..getSearchNetworkDevices) ⇒ <code>Object</code>
    * [~getSearchUser(parameters, options)](#module_API..getSearchUser) ⇒ <code>Object</code>
    * [~getUser(parameters, options)](#module_API..getUser) ⇒ <code>Object</code>
    * [~putUser(parameters, body, options)](#module_API..putUser) ⇒ <code>Object</code>
    * [~getUserAggregation(parameters, options)](#module_API..getUserAggregation) ⇒ <code>Object</code>
    * [~getUserAggregations(parameters, options)](#module_API..getUserAggregations) ⇒ <code>Object</code>
    * [~getUserAlerts(parameters, options)](#module_API..getUserAlerts) ⇒ <code>Object</code>
    * [~getUserDailyData(parameters, options)](#module_API..getUserDailyData) ⇒ <code>Object</code>
    * [~getUserDevice(parameters, options)](#module_API..getUserDevice) ⇒ <code>Object</code>
    * [~getUserDeviceContinuousStatistics(parameters, options)](#module_API..getUserDeviceContinuousStatistics) ⇒ <code>Object</code>
    * [~getUserDeviceDailyData(parameters, options)](#module_API..getUserDeviceDailyData) ⇒ <code>Object</code>
    * [~getUserDeviceForecasts(parameters, options)](#module_API..getUserDeviceForecasts) ⇒ <code>Object</code>
    * [~getUserDeviceHourlyData(parameters, options)](#module_API..getUserDeviceHourlyData) ⇒ <code>Object</code>
    * [~getUserDeviceModules(parameters, options)](#module_API..getUserDeviceModules) ⇒ <code>Object</code>
    * [~getUserDevicePositions(parameters, options)](#module_API..getUserDevicePositions) ⇒ <code>Object</code>
    * [~getUserDeviceRawData(parameters, options)](#module_API..getUserDeviceRawData) ⇒ <code>Object</code>
    * [~getUserDeviceStatistics(parameters, options)](#module_API..getUserDeviceStatistics) ⇒ <code>Object</code>
    * [~getUserDeviceSummary(parameters, options)](#module_API..getUserDeviceSummary) ⇒ <code>Object</code>
    * [~getUserDevices(parameters, options)](#module_API..getUserDevices) ⇒ <code>Object</code>
    * [~getUserDevicesLiveAggregations(parameters, options)](#module_API..getUserDevicesLiveAggregations) ⇒ <code>Object</code>
    * [~getUserForecasts(parameters, options)](#module_API..getUserForecasts) ⇒ <code>Object</code>
    * [~getUserHourlyData(parameters, options)](#module_API..getUserHourlyData) ⇒ <code>Object</code>
    * [~getUserInvitation(parameters, options)](#module_API..getUserInvitation) ⇒ <code>Object</code>
    * [~getUserInvitations(parameters, options)](#module_API..getUserInvitations) ⇒ <code>Object</code>
    * [~getUserNotifications(parameters, options)](#module_API..getUserNotifications) ⇒ <code>Object</code>
    * [~getUserOrganisations(parameters, options)](#module_API..getUserOrganisations) ⇒ <code>Object</code>
    * [~postUserOrganisation(parameters, body, options)](#module_API..postUserOrganisation) ⇒ <code>Object</code>
    * [~getUserPendingInvitation(parameters, options)](#module_API..getUserPendingInvitation) ⇒ <code>Object</code>
    * [~getUserPendingInvitations(parameters, options)](#module_API..getUserPendingInvitations) ⇒ <code>Object</code>
    * [~getUserPreferences(parameters, options)](#module_API..getUserPreferences) ⇒ <code>Object</code>
    * [~putUserPreferences(parameters, body, options)](#module_API..putUserPreferences) ⇒ <code>Object</code>
    * [~getUserStatistics(parameters, options)](#module_API..getUserStatistics) ⇒ <code>Object</code>
    * [~getWeatherLive(parameters, options)](#module_API..getWeatherLive) ⇒ <code>Object</code>
    * [~postLogin(parameters, body, options)](#module_API..postLogin) ⇒ <code>Object</code>
    * [~postLostPassword(parameters, body, options)](#module_API..postLostPassword) ⇒ <code>Object</code>
    * [~postOAuth2Token(parameters, body, options)](#module_API..postOAuth2Token) ⇒ <code>Object</code>
    * [~postOrganisation(parameters, body, options)](#module_API..postOrganisation) ⇒ <code>Object</code>
    * [~postOrganisationEndTrialSupport(parameters, options)](#module_API..postOrganisationEndTrialSupport) ⇒ <code>Object</code>
    * [~postOrganisationNetworkMemberPlan(parameters, body, options)](#module_API..postOrganisationNetworkMemberPlan) ⇒ <code>Object</code>
    * [~postOrganisationPaymentComplete(parameters, body, options)](#module_API..postOrganisationPaymentComplete) ⇒ <code>Object</code>
    * [~postOrganisationToNetworkSupport(parameters, body, options)](#module_API..postOrganisationToNetworkSupport) ⇒ <code>Object</code>
    * [~postPartnerToken(parameters, body, options)](#module_API..postPartnerToken) ⇒ <code>Object</code>
    * [~postPartnerTokenRequest(parameters, body, options)](#module_API..postPartnerTokenRequest) ⇒ <code>Object</code>
    * [~postQuoteOffline(parameters, options)](#module_API..postQuoteOffline) ⇒ <code>Object</code>
    * [~postRegister(parameters, body, options)](#module_API..postRegister) ⇒ <code>Object</code>
    * [~postSignatureCloudinary(parameters, body, options)](#module_API..postSignatureCloudinary) ⇒ <code>Object</code>
    * [~postSignupCheck(parameters, body, options)](#module_API..postSignupCheck) ⇒ <code>Object</code>
    * [~postSocialImage(parameters, body, options)](#module_API..postSocialImage) ⇒ <code>Object</code>
    * [~postUser(parameters, body, options)](#module_API..postUser) ⇒ <code>Object</code>
    * [~postUserDeviceExport(parameters, body, options)](#module_API..postUserDeviceExport) ⇒ <code>Object</code>
    * [~postUserNetworkInvitation(parameters, body, options)](#module_API..postUserNetworkInvitation) ⇒ <code>Object</code>
    * [~postUserOrganisationAggregation(parameters, body, options)](#module_API..postUserOrganisationAggregation) ⇒ <code>Object</code>
    * [~postUserOrganisationAlert(parameters, body, options)](#module_API..postUserOrganisationAlert) ⇒ <code>Object</code>
    * [~postUserOrganisationDevice(parameters, body, options)](#module_API..postUserOrganisationDevice) ⇒ <code>Object</code>
    * [~postUserOrganisationInvitation(parameters, body, options)](#module_API..postUserOrganisationInvitation) ⇒ <code>Object</code>
    * [~postUserOrganisationMember(parameters, body, options)](#module_API..postUserOrganisationMember) ⇒ <code>Object</code>
    * [~postUserPassword(parameters, body, options)](#module_API..postUserPassword) ⇒ <code>Object</code>
    * [~postVerify(parameters, body, options)](#module_API..postVerify) ⇒ <code>Object</code>
    * [~putOrganisationDeviceCalibration(parameters, options)](#module_API..putOrganisationDeviceCalibration) ⇒ <code>Object</code>
    * [~putOrganisationDeviceSettings(parameters, body, options)](#module_API..putOrganisationDeviceSettings) ⇒ <code>Object</code>
    * [~putOrganisationPlace(parameters, body, options)](#module_API..putOrganisationPlace) ⇒ <code>Object</code>
    * [~putPartnerModuleParameters(parameters, body, options)](#module_API..putPartnerModuleParameters) ⇒ <code>Object</code>
    * [~putPassword(parameters, body, options)](#module_API..putPassword) ⇒ <code>Object</code>
    * [~putUserInvitationAnswer(parameters, body, options)](#module_API..putUserInvitationAnswer) ⇒ <code>Object</code>
    * [~getGraphQL(parameters, options)](#module_API..getGraphQL) ⇒ <code>Object</code>
    * [~postGraphQL(parameters, body, options)](#module_API..postGraphQL) ⇒ <code>Object</code>

<a name="module_API..deleteOrganisationDevice"></a>

### API~deleteOrganisationDevice(parameters, options) ⇒ <code>Object</code>
Delete an organisation's device access.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationDevice"></a>

### API~getOrganisationDevice(parameters, options) ⇒ <code>Object</code>
Get a current organisation's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationDevice"></a>

### API~putOrganisationDevice(parameters, body, options) ⇒ <code>Object</code>
Update an organisation's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteOrganisationNetworkDeviceAccess"></a>

### API~deleteOrganisationNetworkDeviceAccess(parameters, options) ⇒ <code>Object</code>
Delete an organisation's network device access.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.networkId | <code>string</code> | The network id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationNetworkDeviceAccess"></a>

### API~putOrganisationNetworkDeviceAccess(parameters, options) ⇒ <code>Object</code>
Update an organisation's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.networkId | <code>string</code> | The network id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserNotificationRead"></a>

### API~deleteUserNotificationRead(parameters, options) ⇒ <code>Object</code>
Set a user's notification as unread.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.notificationId | <code>string</code> | The notification uuid, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserNotificationRead"></a>

### API~putUserNotificationRead(parameters, options) ⇒ <code>Object</code>
Set a user's notification as read.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.notificationId | <code>string</code> | The notification uuid, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationAggregation"></a>

### API~deleteUserOrganisationAggregation(parameters, options) ⇒ <code>Object</code>
Delete a user's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.aggregationId | <code>string</code> | The aggregation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationAggregation"></a>

### API~putUserOrganisationAggregation(parameters, body, options) ⇒ <code>Object</code>
Upsert an organisation's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.aggregationId | <code>string</code> | The aggregation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationAlert"></a>

### API~deleteUserOrganisationAlert(parameters, options) ⇒ <code>Object</code>
Delete a user's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.alertId | <code>string</code> | The alert id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationAlert"></a>

### API~putUserOrganisationAlert(parameters, body, options) ⇒ <code>Object</code>
Update an organisation's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.alertId | <code>string</code> | The alert id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationDeviceModule"></a>

### API~deleteUserOrganisationDeviceModule(parameters, options) ⇒ <code>Object</code>
Disable a module for a user's organisations's device

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationDeviceModule"></a>

### API~putUserOrganisationDeviceModule(parameters, body, options) ⇒ <code>Object</code>
Add a module to a user's organisations's device

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationInvitation"></a>

### API~deleteUserOrganisationInvitation(parameters, options) ⇒ <code>Object</code>
Delete a user's organisation invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationInvitation"></a>

### API~putUserOrganisationInvitation(parameters, body, options) ⇒ <code>Object</code>
Update an organisation's invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationMember"></a>

### API~deleteUserOrganisationMember(parameters, options) ⇒ <code>Object</code>
Delete a member from an user's organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.memberId | <code>number</code> | The member id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationMember"></a>

### API~putUserOrganisationMember(parameters, body, options) ⇒ <code>Object</code>
Add or edit an member to an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.memberId | <code>number</code> | The member id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationOpenNetworkMembership"></a>

### API~putUserOrganisationOpenNetworkMembership(parameters, options) ⇒ <code>Object</code>
Allow an organisation to join an open network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.networkId | <code>string</code> | The network id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..deleteUserOrganisationShare"></a>

### API~deleteUserOrganisationShare(parameters, options) ⇒ <code>Object</code>
undefined

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.shareId | <code>string</code> | The share id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserOrganisationShare"></a>

### API~putUserOrganisationShare(parameters, body, options) ⇒ <code>Object</code>
undefined

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.shareId | <code>string</code> | The share id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOpenAPI"></a>

### API~getOpenAPI(parameters, options) ⇒ <code>Object</code>
Get API documentation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| [parameters.mutedParameters] | <code>array</code> | undefined, |
| [parameters.mutedMethods] | <code>array</code> | undefined, |
| [parameters.tags] | <code>array</code> | undefined, |
| [parameters.authenticated] | <code>boolean</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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

<a name="module_API..getFactorySigfoxStatus"></a>

### API~getFactorySigfoxStatus(parameters, options) ⇒ <code>Object</code>
Get sigfox statuses for devices in production line tests

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.serial | <code>string</code> | Sigfox serial from a device, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getInvitation"></a>

### API~getInvitation(parameters, options) ⇒ <code>Object</code>
Get an invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.invitationId | <code>string</code> | The invitation id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getInvitationDeviceLiveAggregations"></a>

### API~getInvitationDeviceLiveAggregations(parameters, options) ⇒ <code>Object</code>
Retrieve last measures for a given device from an invitation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.invitationId | <code>string</code> | The invitation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.timeZone | <code>string</code> | The timezone of the data |
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

<a name="module_API..getMySelf"></a>

### API~getMySelf(parameters, options) ⇒ <code>Object</code>
Redirect to the user profile.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getNetwork"></a>

### API~getNetwork(parameters, options) ⇒ <code>Object</code>
Get the network.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.networkId | <code>string</code> | The network id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getNetworkDeviceLiveAggregations"></a>

### API~getNetworkDeviceLiveAggregations(parameters, options) ⇒ <code>Object</code>
Retrieve last measures for a given device from a network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.networkId | <code>string</code> | The network id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.timeZone | <code>string</code> | The timezone of the data |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getNetworkDevices"></a>

### API~getNetworkDevices(parameters, options) ⇒ <code>Object</code>
Get devices for a network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.networkId | <code>string</code> | The network id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOAuth2Authorize"></a>

### API~getOAuth2Authorize(parameters, options) ⇒ <code>Object</code>
Implements the [Authorization Endpoint](https://tools.ietf.org/html/rfc6749#section-3.1)
 as defined per the OAuth2 RFC.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.responseType | <code>string</code> | undefined, |
| parameters.clientId | <code>string</code> | undefined, |
| [parameters.redirectUri] | <code>string</code> | undefined, |
| [parameters.scope] | <code>string</code> | See https://tools.ietf.org/html/rfc6749#section-3.3, |
| parameters.state | <code>string</code> | undefined |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisation"></a>

### API~putOrganisation(parameters, body, options) ⇒ <code>Object</code>
Update an organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationChargebeePortalSession"></a>

### API~getOrganisationChargebeePortalSession(parameters, options) ⇒ <code>Object</code>
Create a chargebee portal session

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationDevices"></a>

### API~getOrganisationDevices(parameters, options) ⇒ <code>Object</code>
Get a current organisation's devices.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationDevicesLiveAggregations"></a>

### API~getOrganisationDevicesLiveAggregations(parameters, options) ⇒ <code>Object</code>
Allow to run live aggregation queries against an organisation's devices.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.devicesIds | <code>array</code> | List of id's of devices, |
| parameters.aggregations | <code>array</code> | The aggregations names, |
| [parameters.parameters] | <code>array</code> | The params to set, |
| parameters.intervals | <code>array</code> | The intervals to retrieve, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.date] | <code>string</code> | The status date, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationHostedPage"></a>

### API~getOrganisationHostedPage(parameters, options) ⇒ <code>Object</code>
Create a chargebee hosted page for an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.redirectUrl] | <code>string</code> | Specifies the callback url for chargebee hosted page, |
| parameters.planId | <code>string</code> | Plan id related to chargebee plans, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationInvitation"></a>

### API~getOrganisationInvitation(parameters, options) ⇒ <code>Object</code>
Get a user's invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationInvitations"></a>

### API~getOrganisationInvitations(parameters, options) ⇒ <code>Object</code>
Get an organisation's invitations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.withTypes] | <code>array</code> | undefined, |
| [parameters.withStatuses] | <code>array</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationMember"></a>

### API~getOrganisationMember(parameters, options) ⇒ <code>Object</code>
Retrieve all members from an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.memberId | <code>number</code> | The member id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationMembers"></a>

### API~getOrganisationMembers(parameters, options) ⇒ <code>Object</code>
Retrieve all members from an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationNetworkDevices"></a>

### API~getOrganisationNetworkDevices(parameters, options) ⇒ <code>Object</code>
Get an organisation network.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.networkId | <code>string</code> | The network id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.geohash] | <code>string</code> | The geohash to lookup, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationNetworks"></a>

### API~getOrganisationNetworks(parameters, options) ⇒ <code>Object</code>
Get the networks an organisation has access to.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationPlace"></a>

### API~getOrganisationPlace(parameters, options) ⇒ <code>Object</code>
Get a specific place for a organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.placeId | <code>number</code> | The place id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationPlaces"></a>

### API~getOrganisationPlaces(parameters, options) ⇒ <code>Object</code>
Get all places for an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationPlace"></a>

### API~postOrganisationPlace(parameters, body, options) ⇒ <code>Object</code>
Create a new place for an organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationPreferences"></a>

### API~getOrganisationPreferences(parameters, options) ⇒ <code>Object</code>
Get an organisation's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationPreferences"></a>

### API~putOrganisationPreferences(parameters, body, options) ⇒ <code>Object</code>
Update a organisation's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationShare"></a>

### API~getOrganisationShare(parameters, options) ⇒ <code>Object</code>
Get an organisation's shares.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.shareId | <code>string</code> | The share id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationShares"></a>

### API~getOrganisationShares(parameters, options) ⇒ <code>Object</code>
Get an organisation's shares.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.withTypes] | <code>array</code> | undefined, |
| [parameters.isTransmittable] | <code>boolean</code> | undefined, |
| [parameters.withModes] | <code>array</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getOrganisationsTrialOperations"></a>

### API~getOrganisationsTrialOperations(parameters, options) ⇒ <code>Object</code>
Get an organisation's trial operation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getPing"></a>

### API~getPing(parameters, options) ⇒ <code>Object</code>
Checks API's availability.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getPublicWeatherLive"></a>

### API~getPublicWeatherLive(parameters, options) ⇒ <code>Object</code>
Get last measure (for a specific type) from devices in a given area .

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.topLeftBoxX | <code>number</code> | X coordinate of the top left corner of the map, |
| parameters.topLeftBoxY | <code>number</code> | Y coordinate of the top left corner of the map, |
| parameters.bottomRightBoxX | <code>number</code> | X coordinate of the bottom right corner of the map, |
| parameters.bottomRightBoxY | <code>number</code> | Y coordinate of the bottom right corner of the map, |
| parameters.measureType | <code>string</code> | The type of measure to retrieve, |
| parameters.aggregationType | <code>string</code> | The type of aggregation, |
| parameters.precision | <code>number</code> | The precision of the map, |
| [parameters.timeFrame] | <code>string</code> | The aggregatable measure, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getPublicWeatherLiveAggregations"></a>

### API~getPublicWeatherLiveAggregations(parameters, options) ⇒ <code>Object</code>
Get last measure (for a specifics measures and interval) from devices in a given area

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.geohash | <code>string</code> | The geohash to lookup, |
| parameters.aggregations | <code>array</code> | The aggregations names, |
| parameters.liveInterval | <code>string</code> | The interval to retrieve, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getQuote"></a>

### API~getQuote(parameters, options) ⇒ <code>Object</code>
Get a quote

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.quoteId | <code>string</code> | The quote id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getQuoteHostedPage"></a>

### API~getQuoteHostedPage(parameters, options) ⇒ <code>Object</code>
Create a chargebee hosted page for quote

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.quoteId | <code>string</code> | The quote id, |
| [parameters.tva] | <code>string</code> | undefined, |
| [parameters.paymentMethod] | <code>string</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getSearchDevices"></a>

### API~getSearchDevices(parameters, options) ⇒ <code>Object</code>
Search devices around a geopoint

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getSearchNetworkDevices"></a>

### API~getSearchNetworkDevices(parameters, options) ⇒ <code>Object</code>
Search devices around a geopoint for a network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data, |
| parameters.networkId | <code>string</code> | The network id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getSearchUser"></a>

### API~getSearchUser(parameters, options) ⇒ <code>Object</code>
Search for an user

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.email | <code>string</code> | Email of the user to search, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUser"></a>

### API~putUser(parameters, body, options) ⇒ <code>Object</code>
Update a user's profile.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| parameters.aggregationId | <code>string</code> | The aggregation id, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.ranges] | <code>array</code> | The ranges to get the data from, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.interval] | <code>string</code> | The interval of data (Accepted value : 31 days for 1h interval, 1 year for 1d interval, 5y for 1w interval), |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| parameters.size | <code>number</code> | The number of measures to retrieve, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.interval] | <code>string</code> | The interval of data (Accepted value : 31 days for 1h interval, 1 year for 1d interval, 5y for 1w interval), |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| parameters.date | <code>string</code> | The summary date, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.date] | <code>string</code> | The status date, |
| [parameters.measures] | <code>array</code> | The measures to read, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.limit] | <code>number</code> | The number of items to retrieve, |
| [parameters.start] | <code>number</code> | The index in results, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserDevicesLiveAggregations"></a>

### API~getUserDevicesLiveAggregations(parameters, options) ⇒ <code>Object</code>
Allow to run live aggregation queries against a user devices.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.devicesIds | <code>array</code> | List of id's of devices, |
| parameters.aggregations | <code>array</code> | The aggregations names, |
| [parameters.parameters] | <code>array</code> | The params to set, |
| parameters.intervals | <code>array</code> | The intervals to retrieve, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.date] | <code>string</code> | The status date, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
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
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| parameters.days | <code>number</code> | The number of days to retrieve, |
| [parameters.ranges] | <code>array</code> | The ranges to get the data from, |
| parameters.measures | <code>array</code> | The measures to read, |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserInvitation"></a>

### API~getUserInvitation(parameters, options) ⇒ <code>Object</code>
Get a user's invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserInvitations"></a>

### API~getUserInvitations(parameters, options) ⇒ <code>Object</code>
Get a user's invitations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.withTypes] | <code>array</code> | undefined, |
| [parameters.withStatuses] | <code>array</code> | undefined, |
| [parameters.withModes] | <code>array</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserNotifications"></a>

### API~getUserNotifications(parameters, options) ⇒ <code>Object</code>
Get user's notifications.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.size] | <code>number</code> | undefined, |
| [parameters.cursor] | <code>string</code> | undefined, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserOrganisations"></a>

### API~getUserOrganisations(parameters, options) ⇒ <code>Object</code>
Get all user's organisations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisation"></a>

### API~postUserOrganisation(parameters, body, options) ⇒ <code>Object</code>
Creates a new organisation for a user (add him as owner).

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserPendingInvitation"></a>

### API~getUserPendingInvitation(parameters, options) ⇒ <code>Object</code>
Get a user's pending invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserPendingInvitations"></a>

### API~getUserPendingInvitations(parameters, options) ⇒ <code>Object</code>
Get a user's pending invitations.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.limit | <code>number</code> | The number of items to retrieve, |
| parameters.start | <code>number</code> | The index in results, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserPreferences"></a>

### API~getUserPreferences(parameters, options) ⇒ <code>Object</code>
Get an user's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserPreferences"></a>

### API~putUserPreferences(parameters, body, options) ⇒ <code>Object</code>
Update a user's preferences.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getUserStatistics"></a>

### API~getUserStatistics(parameters, options) ⇒ <code>Object</code>
Get a user's statistics for a given location.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.latitude | <code>number</code> | The latitude of the data, |
| parameters.longitude | <code>number</code> | The longitude of the data, |
| parameters.startDate | <code>string</code> | The statistics start date, |
| parameters.endDate | <code>string</code> | The statistics end date, |
| parameters.measures | <code>array</code> | The measures to read, |
| parameters.ranges | <code>array</code> | The ranges to get the data from, |
| [parameters.patched] | <code>boolean</code> | Patched data are augmented data with internal algorithms. Setting patched to false, will return raw data from device only., |
| [parameters.includeHistory] | <code>boolean</code> | If must include device replacements or not, |
| [parameters.interval] | <code>string</code> | The interval of data (Accepted value : 31 days for 1h interval, 1 year for 1d interval, 5y for 1w interval), |
| [parameters.withCalibration] | <code>boolean</code> | Wether the calibration of rain falls must be taken in count, |
| [parameters.timeZone] | <code>string</code> | The timezone of the data, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getWeatherLive"></a>

### API~getWeatherLive(parameters, options) ⇒ <code>Object</code>
Get last measure (for a specific type) from devices in a given area (1 hour for RAIN_FALL).

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.geohash | <code>string</code> | The geohash to lookup, |
| parameters.measureType | <code>string</code> | The measures to read, |
| [parameters.timeFrame] | <code>string</code> | The aggregatable measure, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postLogin"></a>

### API~postLogin(parameters, body, options) ⇒ <code>Object</code>
Log a user in

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postLostPassword"></a>

### API~postLostPassword(parameters, body, options) ⇒ <code>Object</code>
Request a password change e-mail.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOAuth2Token"></a>

### API~postOAuth2Token(parameters, body, options) ⇒ <code>Object</code>
Implements the [Token Endpoint](https://tools.ietf.org/html/rfc6749#section-3.2)
 as defined per the OAuth2 RFC.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Basic mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisation"></a>

### API~postOrganisation(parameters, body, options) ⇒ <code>Object</code>
Creates a new organisation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationEndTrialSupport"></a>

### API~postOrganisationEndTrialSupport(parameters, options) ⇒ <code>Object</code>
Remove the trial of an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationNetworkMemberPlan"></a>

### API~postOrganisationNetworkMemberPlan(parameters, body, options) ⇒ <code>Object</code>
Add a plan to a organisation of a sponsored network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.networkMemberId | <code>number</code> | The organisation id of the network member, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationPaymentComplete"></a>

### API~postOrganisationPaymentComplete(parameters, body, options) ⇒ <code>Object</code>
Complete the payment flow of an organisation, if chargebee hook is delayed

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postOrganisationToNetworkSupport"></a>

### API~postOrganisationToNetworkSupport(parameters, body, options) ⇒ <code>Object</code>
Convert an organisation to a network

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postPartnerToken"></a>

### API~postPartnerToken(parameters, body, options) ⇒ <code>Object</code>
Create a user token (deprecated, use OAuth2)

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Basic mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postPartnerTokenRequest"></a>

### API~postPartnerTokenRequest(parameters, body, options) ⇒ <code>Object</code>
Request a user token

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Basic mecanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postQuoteOffline"></a>

### API~postQuoteOffline(parameters, options) ⇒ <code>Object</code>
Set offline mode for a quote

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.userId | <code>number</code> | The user id, |
| parameters.quoteId | <code>string</code> | The quote id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postRegister"></a>

### API~postRegister(parameters, body, options) ⇒ <code>Object</code>
Register a new user and his organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.noTrial] | <code>boolean</code> | Parameter use for sponsored network (cause subscription is managed by the network), |
| [parameters.trialOperationId] | <code>string</code> | Operation trial id used to compute trialEndDate of organisation |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postSignatureCloudinary"></a>

### API~postSignatureCloudinary(parameters, body, options) ⇒ <code>Object</code>
Get a cloudinary signature to make a signed upload

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postSignupCheck"></a>

### API~postSignupCheck(parameters, body, options) ⇒ <code>Object</code>
Hit the server to check the email can be used to signup.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mechanism |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postSocialImage"></a>

### API~postSocialImage(parameters, body, options) ⇒ <code>Object</code>
Generate a new image to share it on social media

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUser"></a>

### API~postUser(parameters, body, options) ⇒ <code>Object</code>
Create a new user.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserDeviceExport"></a>

### API~postUserDeviceExport(parameters, body, options) ⇒ <code>Object</code>
Create a new export job

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.emailRecipient] | <code>string</code> | Recipient email of the export (override default user email), |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserNetworkInvitation"></a>

### API~postUserNetworkInvitation(parameters, body, options) ⇒ <code>Object</code>
Invite a user to reach the Network page

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.networkId | <code>string</code> | The network id, |
| [parameters.trialOperationId] | <code>string</code> | Operation trial id used to compute trialEndDate of organisation |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisationAggregation"></a>

### API~postUserOrganisationAggregation(parameters, body, options) ⇒ <code>Object</code>
Create a new organisation's aggregation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisationAlert"></a>

### API~postUserOrganisationAlert(parameters, body, options) ⇒ <code>Object</code>
Create a new organisation's alert.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisationDevice"></a>

### API~postUserOrganisationDevice(parameters, body, options) ⇒ <code>Object</code>
Setup a organisation's device.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.userId | <code>number</code> | The user id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisationInvitation"></a>

### API~postUserOrganisationInvitation(parameters, body, options) ⇒ <code>Object</code>
Create an organisation's invitation.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserOrganisationMember"></a>

### API~postUserOrganisationMember(parameters, body, options) ⇒ <code>Object</code>
Add an member to an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.organisationId | <code>number</code> | The organisation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postUserPassword"></a>

### API~postUserPassword(parameters, body, options) ⇒ <code>Object</code>
Update user password

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postVerify"></a>

### API~postVerify(parameters, body, options) ⇒ <code>Object</code>
Verify a user

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationDeviceCalibration"></a>

### API~putOrganisationDeviceCalibration(parameters, options) ⇒ <code>Object</code>
Update an organisation's device calibration.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.calibrationName | <code>string</code> | Calibration to set, |
| parameters.ratio | <code>number</code> | Ratio to set, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationDeviceSettings"></a>

### API~putOrganisationDeviceSettings(parameters, body, options) ⇒ <code>Object</code>
Update an organisation's device's settings.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.deviceId | <code>number</code> | The device id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putOrganisationPlace"></a>

### API~putOrganisationPlace(parameters, body, options) ⇒ <code>Object</code>
Update a place for an organisation

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.organisationId | <code>number</code> | The organisation id, |
| parameters.placeId | <code>number</code> | The place id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putPartnerModuleParameters"></a>

### API~putPartnerModuleParameters(parameters, body, options) ⇒ <code>Object</code>
Update an partner module parameters

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.partnerId | <code>number</code> | The partner organisation id, |
| parameters.partnerUserId | <code>number</code> | The partner user id, |
| parameters.deviceId | <code>number</code> | The device id, |
| parameters.moduleId | <code>number</code> | The module id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putPassword"></a>

### API~putPassword(parameters, body, options) ⇒ <code>Object</code>
Change a user password

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..putUserInvitationAnswer"></a>

### API~putUserInvitationAnswer(parameters, body, options) ⇒ <code>Object</code>
Set a user's invitation answer.

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| parameters.userId | <code>number</code> | The user id, |
| parameters.invitationId | <code>string</code> | The invitation id, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..getGraphQL"></a>

### API~getGraphQL(parameters, options) ⇒ <code>Object</code>
Graphql endpoint

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| parameters.query | <code>string</code> | The GraphQL query, |
| [parameters.variables] | <code>string</code> | The GraphQL variables, |
| [parameters.operationName] | <code>string</code> | The GraphQL operation name, |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

<a name="module_API..postGraphQL"></a>

### API~postGraphQL(parameters, body, options) ⇒ <code>Object</code>
Graphql endpoint

**Kind**: inner method of [<code>API</code>](#module_API)  
**Returns**: <code>Object</code> - The HTTP response  

| Param | Type | Description |
| --- | --- | --- |
| parameters | <code>Object</code> | The parameters to provide (destructured) |
| body |  | The request body |
| [parameters.authorization] | <code>string</code> | Authorization with Bearer mecanism, |
| [parameters.accessToken] | <code>string</code> | Token provided through query parameters |
| options | <code>Object</code> | Options to override Axios request configuration |

