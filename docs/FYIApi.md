# ClientPortalWebApi.FYIApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fyiDeliveryoptionsDeviceIdDelete**](FYIApi.md#fyiDeliveryoptionsDeviceIdDelete) | **DELETE** /fyi/deliveryoptions/{deviceId} | delete a device
[**fyiDeliveryoptionsDevicePost**](FYIApi.md#fyiDeliveryoptionsDevicePost) | **POST** /fyi/deliveryoptions/device | enable/disable device option
[**fyiDeliveryoptionsEmailPut**](FYIApi.md#fyiDeliveryoptionsEmailPut) | **PUT** /fyi/deliveryoptions/email | enable/disable email option
[**fyiDeliveryoptionsGet**](FYIApi.md#fyiDeliveryoptionsGet) | **GET** /fyi/deliveryoptions | Get delivery options
[**fyiDisclaimerTypecodeGet**](FYIApi.md#fyiDisclaimerTypecodeGet) | **GET** /fyi/disclaimer/{typecode} | get disclaimer for a certain kind of fyi
[**fyiDisclaimerTypecodePut**](FYIApi.md#fyiDisclaimerTypecodePut) | **PUT** /fyi/disclaimer/{typecode} | mark disclaimer read
[**fyiNotificationsGet**](FYIApi.md#fyiNotificationsGet) | **GET** /fyi/notifications | Get a list of notifications
[**fyiNotificationsMoreGet**](FYIApi.md#fyiNotificationsMoreGet) | **GET** /fyi/notifications/more | Get more notifications based on a certain one
[**fyiNotificationsNotificationIdPut**](FYIApi.md#fyiNotificationsNotificationIdPut) | **PUT** /fyi/notifications/{notificationId} | Get a list of notifications
[**fyiSettingsGet**](FYIApi.md#fyiSettingsGet) | **GET** /fyi/settings | Get a list of subscriptions
[**fyiSettingsTypecodePost**](FYIApi.md#fyiSettingsTypecodePost) | **POST** /fyi/settings/{typecode} | enable/disable certain subscription
[**fyiUnreadnumberGet**](FYIApi.md#fyiUnreadnumberGet) | **GET** /fyi/unreadnumber | Get unread number of fyis


<a name="fyiDeliveryoptionsDeviceIdDelete"></a>
# **fyiDeliveryoptionsDeviceIdDelete**
> Object fyiDeliveryoptionsDeviceIdDelete(deviceId)

delete a device

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var deviceId = "deviceId_example"; // String | device ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDeliveryoptionsDeviceIdDelete(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| device ID | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiDeliveryoptionsDevicePost"></a>
# **fyiDeliveryoptionsDevicePost**
> InlineResponse20021 fyiDeliveryoptionsDevicePost(body)

enable/disable device option

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var body = new ClientPortalWebApi.Body7(); // Body7 | device info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDeliveryoptionsDevicePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body7**](Body7.md)| device info | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiDeliveryoptionsEmailPut"></a>
# **fyiDeliveryoptionsEmailPut**
> InlineResponse20021 fyiDeliveryoptionsEmailPut(enabled)

enable/disable email option

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var enabled = "enabled_example"; // String | true/false


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDeliveryoptionsEmailPut(enabled, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabled** | **String**| true/false | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiDeliveryoptionsGet"></a>
# **fyiDeliveryoptionsGet**
> InlineResponse20022 fyiDeliveryoptionsGet()

Get delivery options

options for sending fyis to email and other devices 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDeliveryoptionsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiDisclaimerTypecodeGet"></a>
# **fyiDisclaimerTypecodeGet**
> InlineResponse20020 fyiDisclaimerTypecodeGet(typecode)

get disclaimer for a certain kind of fyi

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var typecode = "typecode_example"; // String | fyi code, for example --M8, EA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDisclaimerTypecodeGet(typecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typecode** | **String**| fyi code, for example --M8, EA | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiDisclaimerTypecodePut"></a>
# **fyiDisclaimerTypecodePut**
> InlineResponse20021 fyiDisclaimerTypecodePut(typecode)

mark disclaimer read

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var typecode = "typecode_example"; // String | fyi code, for example --M8, EA


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiDisclaimerTypecodePut(typecode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typecode** | **String**| fyi code, for example --M8, EA | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiNotificationsGet"></a>
# **fyiNotificationsGet**
> Notifications fyiNotificationsGet(max, opts)

Get a list of notifications

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var max = "max_example"; // String | max number of fyis in response

var opts = { 
  'exclude': "exclude_example", // String | if set, don't set include
  'include': "include_example" // String | if set, don't set exclude
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiNotificationsGet(max, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **String**| max number of fyis in response | 
 **exclude** | **String**| if set, don't set include | [optional] 
 **include** | **String**| if set, don't set exclude | [optional] 

### Return type

[**Notifications**](Notifications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiNotificationsMoreGet"></a>
# **fyiNotificationsMoreGet**
> Notifications fyiNotificationsMoreGet(id)

Get more notifications based on a certain one

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var id = "id_example"; // String | id of last notification in the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiNotificationsMoreGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id of last notification in the list | 

### Return type

[**Notifications**](Notifications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiNotificationsNotificationIdPut"></a>
# **fyiNotificationsNotificationIdPut**
> Object fyiNotificationsNotificationIdPut(notificationId)

Get a list of notifications

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var notificationId = "notificationId_example"; // String | mark a notification read


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiNotificationsNotificationIdPut(notificationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**| mark a notification read | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiSettingsGet"></a>
# **fyiSettingsGet**
> [InlineResponse20019] fyiSettingsGet()

Get a list of subscriptions

return the current choices of subscriptions, we can toggle the option 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiSettingsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse20019]**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiSettingsTypecodePost"></a>
# **fyiSettingsTypecodePost**
> Object fyiSettingsTypecodePost(typecode, body)

enable/disable certain subscription

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var typecode = "typecode_example"; // String | fyi code

var body = new ClientPortalWebApi.Body6(); // Body6 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiSettingsTypecodePost(typecode, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typecode** | **String**| fyi code | 
 **body** | [**Body6**](Body6.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="fyiUnreadnumberGet"></a>
# **fyiUnreadnumberGet**
> InlineResponse20018 fyiUnreadnumberGet()

Get unread number of fyis

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.FYIApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fyiUnreadnumberGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

